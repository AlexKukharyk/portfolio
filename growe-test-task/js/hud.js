(() => {
    "use strict";

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const hoverCapability = window.matchMedia("(hover: hover) and (pointer: fine)");
    const glitchTimers = new Map();
    const revealTargets = [];
    let observer;

    function createCorners() {
        const corners = document.createElement("span");
        corners.className = "hud-corners";
        corners.setAttribute("aria-hidden", "true");
        for (const position of ["tl", "tr", "br", "bl"]) {
            const corner = document.createElement("span");
            corner.className = `hud-corner hud-corner--${position}`;
            corners.appendChild(corner);
        }
        return corners;
    }

    function createDivider() {
        const divider = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        divider.setAttribute("viewBox", "0 0 1280 20");
        divider.setAttribute("preserveAspectRatio", "none");
        divider.setAttribute("aria-hidden", "true");
        divider.setAttribute("focusable", "false");
        divider.classList.add("hud-divider");
        const shape = "M0 1H548L563 17H717L732 1H1280";
        for (const [name, d] of [
            ["track", shape],
            ["trace", shape],
            ["marker", "M635 2L639 5L635 8ZM645 2L641 5L645 8Z"]
        ]) {
            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            path.setAttribute("d", d);
            path.setAttribute("pathLength", "1");
            path.classList.add(`hud-divider__${name}`);
            divider.appendChild(path);
        }
        revealTargets.push(divider);
        return divider;
    }

    function stopGlitch(element) {
        window.clearTimeout(glitchTimers.get(element));
        glitchTimers.delete(element);
        element.classList.remove("is-glitching");
    }

    function playGlitch(element) {
        if (motionPreference.matches || glitchTimers.has(element)) return;
        element.classList.add("is-glitching");
        glitchTimers.set(element, window.setTimeout(() => stopGlitch(element), 500));
    }

    function bindInteraction(element) {
        element.addEventListener("pointerenter", (event) => {
            if (hoverCapability.matches && event.pointerType !== "touch") playGlitch(element);
        });
        element.addEventListener("focus", () => {
            if (element.matches(":focus-visible")) playGlitch(element);
        });
    }

    document.querySelectorAll(".ui-button").forEach((button) => {
        const label = button.querySelector("[data-i18n]");
        if (!label) return;
        button.classList.add("hud-button");
        const wrapper = document.createElement("span");
        wrapper.className = "hud-label";
        label.before(wrapper);
        wrapper.appendChild(label);
        for (const part of ["upper", "lower"]) {
            const fragment = document.createElement("span");
            fragment.className = `hud-glitch hud-glitch--${part}`;
            fragment.setAttribute("aria-hidden", "true");
            wrapper.appendChild(fragment);
        }
        button.appendChild(createCorners());
        bindInteraction(button);
    });

    function syncLabels() {
        document.querySelectorAll(".hud-label").forEach((wrapper) => {
            const label = wrapper.querySelector("[data-i18n]");
            wrapper.querySelectorAll(".hud-glitch").forEach((fragment) => {
                fragment.textContent = label.textContent;
            });
            stopGlitch(wrapper.closest(".hud-button"));
        });
    }
    syncLabels();
    document.addEventListener("presentation:languagechange", syncLabels);

    document.querySelectorAll(".carousel-arrow, .video-play, .go-top").forEach((control) => {
        control.classList.add("hud-control");
        bindInteraction(control);
    });
    document.querySelectorAll(".result-card, .story-row, .subtitle-card, .task-two-summary, .static-gallery__item").forEach((panel) => {
        panel.classList.add("hud-panel");
        panel.appendChild(createCorners());
        revealTargets.push(panel);
    });
    const header = document.querySelector(".floating-header");
    const headerBar = header?.querySelector(".header-bar");
    if (header && headerBar) {
        const divider = createDivider();
        header.appendChild(divider);
        const updateHeaderShape = () => {
            const width = header.clientWidth;
            const barWidth = headerBar.getBoundingClientRect().width;
            const height = parseFloat(getComputedStyle(header).getPropertyValue("--header-rule-height"));
            const scaleY = height / 20;
            const scaleX = barWidth / 1280;
            const center = width / 2;
            const outer = 92 * scaleX;
            const inner = 77 * scaleX;
            header.style.setProperty("--header-notch-outer", `${outer}px`);
            header.style.setProperty("--header-notch-inner", `${inner}px`);
            divider.setAttribute("viewBox", `0 0 ${width} ${height}`);
            const shape = `M0 ${scaleY}H${center - outer}L${center - inner} ${17 * scaleY}H${center + inner}L${center + outer} ${scaleY}H${width}`;
            divider.querySelectorAll(".hud-divider__track, .hud-divider__trace").forEach((path) => path.setAttribute("d", shape));
            divider.querySelector(".hud-divider__marker").setAttribute("d",
                `M${center - 5 * scaleX} ${2 * scaleY}L${center - scaleX} ${5 * scaleY}L${center - 5 * scaleX} ${8 * scaleY}ZM${center + 5 * scaleX} ${2 * scaleY}L${center + scaleX} ${5 * scaleY}L${center + 5 * scaleX} ${8 * scaleY}Z`);
        };
        updateHeaderShape();
        if ("ResizeObserver" in window) {
            const headerResize = new ResizeObserver(updateHeaderShape);
            headerResize.observe(header);
            headerResize.observe(headerBar);
        } else {
            window.addEventListener("resize", updateHeaderShape, { passive: true });
        }
    }
    document.querySelector(".site-footer")?.prepend(createDivider());

    function show(target) {
        target.classList.remove("hud-pending");
        target.classList.add("is-hud-visible");
    }

    function initializeReveals() {
        if (motionPreference.matches || !("IntersectionObserver" in window)) {
            revealTargets.forEach(show);
            return;
        }
        observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                show(entry.target);
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.08, rootMargin: "0px 0px -24px 0px" });
        revealTargets.forEach((target) => {
            target.classList.add("hud-pending");
            observer.observe(target);
        });
    }
    if (document.body.classList.contains("is-ready")) initializeReveals();
    else document.addEventListener("presentation:ready", initializeReveals, { once: true });

    motionPreference.addEventListener("change", () => {
        if (!motionPreference.matches) return;
        observer?.disconnect();
        revealTargets.forEach(show);
        [...glitchTimers.keys()].forEach(stopGlitch);
    });
})();
