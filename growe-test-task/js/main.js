(() => {
    "use strict";

    const copy = {
        ua: {
            authorName: "Олександр Кухарик",
            headerIdentity: "Олександр Кухарик · Тестове завдання",
            loaderTask: "Тестове завдання",
            headerTask: "Тестове завдання",
            resultsTitle: "Результати",
            navResults: "Результати",
            navTaskOne: "Завдання 1",
            navTaskTwo: "Завдання 2",
            videoCreative: "Відео‑креатив",
            videoWithSound: "Відео",
            taskOneTitle: "Завдання 1 — paid performance відео‑креатив",
            staticCreative: "Статичний банер",
            taskTwoTitle: "Завдання 2 — редизайн статичних банерів",
            downloadProject: "Завантажити файли проєкту",
            downloadCreatives: "Завантажити банери",
            openFigma: "Відкрити у Figma",
            carouselLabel: "Статичні банери",
            carouselPrevious: "Попередній банер",
            carouselNext: "Наступний банер",
            taskOneLabel: "Завдання 1",
            taskOneHeading: "Paid performance відео‑креатив",
            preparationLabel: "Підготовка.",
            studyIntro: "Спочатку я ознайомився з візуальним стилем продукту на сайті та підготував SVG-версію логотипу для використання в креативах.",
            studyNote: "Уже під час анімації UI я також помітив логотип у наданих Figma-файлах.",
            hookLabel: "Концепція хука.",
            hookP1: "Я вирішив використати інший підхід до утримання уваги — pattern interrupt. Стрічки соцмереж переповнені класичним UGC: «голова, що говорить» плюс субтитри, і глядач уже навчився автоматично гортати такі відео в першу секунду.",
            hookP2: "Моя пропозиція — виразний швидкий моушн-дизайн на старті, який збиває звичний сценарій і зупиняє скрол.",
            hookP3: "За скриптом на перші три секунди припадає довге повідомлення. У виконанні реальної людини в кадрі воно звучало б зім’ято й неприродно. Швидка типографіка, pop-up бабли, SFX і візуальні акценти передають цей зміст ефективніше.",
            designCopy: "Хук виконаний у мінімалістичному стилі продукту. Впізнаваний елемент UI в оригінальному кольорі #5DFCA5 використаний як знак генерації.",
            scriptLabel: "Сценарій.",
            scriptP1: "Хук задає високу динаміку й показує «магію» — обіцянку сильного результату. Після цього ми органічно переходимо в UGC-частину та реальний інтерфейс Zeely з тими самими впізнаваними елементами.",
            scriptP2: "Спочатку продаємо емоцію і результат, потім показуємо, наскільки легко цього досягти з продуктом. Тому фінальний скрипт був дещо змінений під запропоновану візуальну концепцію.",
            briefScript: "Скрипт із ТЗ",
            newScript: "Новий скрипт / Voiceover",
            aiPipelineLabel: "Voiceover та AI-аватар.",
            aiPipelineIntro: "Voiceover я згенерував окремо, після чого створив візуальний референс персонажа та lip sync відео з аватаром.",
            elevenLabsStep: "Окрема генерація voiceover.",
            nanoBananaStep: "Генерація візуального референсу персонажа.",
            minimaxStep: "Я протестував нову модель Minimax H3 та згенерував з її допомогою lip sync відео з аватаром.",
            animationLabel: "Візуалізація UI.",
            uiP1: "Для цього відео я переніс асети з Figma до After Effects за допомогою Overlord, зберігши їхню пошарову структуру, а потім анімував безпосередньо в AE.",
            subtitlesLabel: "Субтитри.",
            subtitles: "Я додав субтитри, щоб рекламний креатив сприймався навіть без увімкненого звуку.",
            taskTwoLabel: "Завдання 2",
            taskTwoHeading: "Редизайн статичних банерів",
            staticConcepts: "Під час розробки статичних банерів я відштовхувався від логіки наведених референсів, де візуальний ряд безпосередньо резонує з контекстом цільової аудиторії — як це реалізовано для ніш Airbnb, б’юті та e-commerce — і відповідає стилю продукту Zeely.",
            staticHighlightsTitle: "Ключові акценти концепції:",
            staticContextLabel: "Контекстна відповідність:",
            staticContextCopy: "Для сегмента соло-підприємців та фрілансерів підібрано візуальні образи, що транслюють робочу рутину, фокус на масштабуванні та сучасний діджитал-лайфстайл.",
            staticStopScrollLabel: "Stop-scroll композиція:",
            staticStopScrollCopy: "Використано динамічні ракурси, контрастні силуети та інші прийоми, що миттєво виділяють банер у стрічці.",
            staticHierarchyLabel: "Ієрархія та CTA:",
            staticHierarchyCopy: "Текстовий скрипт структуровано з чітким фокусом на офері, ключових булетах вигоди AI-продукту, контрастних тригерах і кнопках дії.",
            staticClosing: "Такий підхід дозволяє протестувати різні візуальні гачки — від агресивного контрасту до чистого мінімалізму — у межах єдиної комунікаційної стратегії.",
            staticVariant: "Варіант статичного банера",
            playVideo: "Відтворити відео",
            backToTop: "На початок ↑"
        },
        en: {
            authorName: "Oleksandr Kukharyk",
            headerIdentity: "Oleksandr Kukharyk · Test task",
            loaderTask: "Test task",
            headerTask: "Test task",
            resultsTitle: "Results",
            navResults: "Results",
            navTaskOne: "Task 1",
            navTaskTwo: "Task 2",
            videoCreative: "Video creative",
            videoWithSound: "Video",
            taskOneTitle: "Task 1 — paid performance video ad",
            staticCreative: "Static banner",
            taskTwoTitle: "Task 2 — static banner redesign",
            downloadProject: "Download project files",
            downloadCreatives: "Download banners",
            openFigma: "Open in Figma",
            carouselLabel: "Static banners",
            carouselPrevious: "Previous banner",
            carouselNext: "Next banner",
            taskOneLabel: "Task 1",
            taskOneHeading: "Paid performance video ad",
            preparationLabel: "Preparation.",
            studyIntro: "I started by reviewing the product’s visual style on the website and preparing an SVG version of the logo for use in the creatives.",
            studyNote: "Later, while animating the UI, I also noticed the logo in the provided Figma files.",
            hookLabel: "Hook concept.",
            hookP1: "I decided to take a different approach to holding attention: a pattern interrupt. Social feeds are saturated with classic UGC — a talking head plus subtitles — and viewers have learned to scroll past those videos almost automatically in the first second.",
            hookP2: "My proposal is to open with bold, fast motion design that breaks the expected rhythm and stops the scroll.",
            hookP3: "The script puts a long message into the first three seconds. Delivered by a real person on camera, it would sound rushed and unnatural. Fast typography, pop-up bubbles, SFX, and visual accents communicate the idea more effectively.",
            designCopy: "The hook follows the product’s minimal visual style. A recognizable UI element in the original #5DFCA5 color is used as a sign for generation.",
            scriptLabel: "Script.",
            scriptP1: "The hook sets a fast pace and shows the “magic” — the promise of a strong result. We then move naturally into the UGC section and the real Zeely interface, using the same recognizable elements.",
            scriptP2: "First, we sell the emotion and the result. Then we show how easily the product delivers it. That is why I adjusted the final script to fit the proposed visual concept.",
            briefScript: "Script from the brief",
            newScript: "New script / Voiceover",
            aiPipelineLabel: "Voiceover and AI avatar.",
            aiPipelineIntro: "I generated the voiceover separately, then created a visual character reference and a lip-sync avatar video.",
            elevenLabsStep: "Voiceover generated separately.",
            nanoBananaStep: "Visual character reference generation.",
            minimaxStep: "I tested the newly released Minimax H3 model and used it to generate the lip-sync avatar video.",
            animationLabel: "UI visualization.",
            uiP1: "For this video, I used Overlord to transfer the assets from Figma to After Effects while preserving their layer structure, then animated them directly in AE.",
            subtitlesLabel: "Subtitles.",
            subtitles: "I added subtitles so the ad remains clear even when viewed without sound.",
            taskTwoLabel: "Task 2",
            taskTwoHeading: "Static banner redesign",
            staticConcepts: "While developing the static banners, I followed the logic of the provided references, where the visuals directly resonate with the target audience’s context — as shown for Airbnb, beauty, and e-commerce niches — and align with Zeely’s product style.",
            staticHighlightsTitle: "Key concept highlights:",
            staticContextLabel: "Contextual relevance:",
            staticContextCopy: "For solo entrepreneurs and freelancers, I selected imagery that communicates day-to-day work, a focus on scaling, and a modern digital lifestyle.",
            staticStopScrollLabel: "Stop-scroll composition:",
            staticStopScrollCopy: "Dynamic angles, contrasting silhouettes, and other devices help each banner stand out instantly in the feed.",
            staticHierarchyLabel: "Hierarchy and CTA:",
            staticHierarchyCopy: "The copy is structured around a clear offer, the key benefits of the AI product, and high-contrast triggers and action buttons.",
            staticClosing: "This approach makes it possible to test different visual hooks — from bold contrast to clean minimalism — within a single communication strategy.",
            staticVariant: "Static banner variant",
            playVideo: "Play video",
            backToTop: "Back to top ↑"
        }
    };

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobileScrolling = window.matchMedia("(max-width: 760px), (pointer: coarse)").matches;
    const canAnimate = Boolean(window.gsap) && !reducedMotion;
    const canUseScrollTrigger = Boolean(window.ScrollTrigger) && !mobileScrolling && !reducedMotion;
    const languageButtons = [...document.querySelectorAll("[data-lang]")];

    if (window.ScrollTrigger) {
        window.ScrollTrigger.config({ ignoreMobileResize: true });
        if (mobileScrolling) window.ScrollTrigger.disable(false, false);
    }

    let currentLanguage = "ua";
    try {
        const savedLanguage = window.localStorage.getItem("growe-presentation-language");
        if (savedLanguage === "ua" || savedLanguage === "en") currentLanguage = savedLanguage;
    } catch (_) {
        currentLanguage = "ua";
    }

    function setLanguage(language, persist = true) {
        const dictionary = copy[language] || copy.ua;
        currentLanguage = language;

        document.documentElement.lang = language === "en" ? "en-US" : "uk";
        document.title = language === "en"
            ? "Growe — Test Task · Oleksandr Kukharyk"
            : "Growe — тестове завдання · Oleksandr Kukharyk";

        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const value = dictionary[element.dataset.i18n];
            if (value) element.textContent = value;
        });

        document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
            const value = dictionary[element.dataset.i18nAlt];
            if (value) element.alt = `${value} ${element.dataset.variant || ""}`.trim();
        });

        languageButtons.forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.lang === language));
        });

        const playButton = document.querySelector(".video-play");
        if (playButton) playButton.setAttribute("aria-label", dictionary.playVideo);

        const goTopButton = document.querySelector(".go-top");
        if (goTopButton) goTopButton.setAttribute("aria-label", dictionary.backToTop);

        document.querySelectorAll("[data-carousel]").forEach((carousel) => {
            carousel.setAttribute("aria-label", dictionary.carouselLabel);
            carousel.querySelector(".carousel-arrow--previous")?.setAttribute("aria-label", dictionary.carouselPrevious);
            carousel.querySelector(".carousel-arrow--next")?.setAttribute("aria-label", dictionary.carouselNext);
        });

        if (persist) {
            try {
                window.localStorage.setItem("growe-presentation-language", language);
            } catch (_) {
                // Language switching remains available when storage is blocked.
            }
        }

        if (canUseScrollTrigger) window.ScrollTrigger.refresh();
    }

    languageButtons.forEach((button) => {
        button.addEventListener("click", () => setLanguage(button.dataset.lang));
    });
    setLanguage(currentLanguage, false);

    function finishPreloader() {
        const preloader = document.querySelector(".preloader");
        if (!preloader) return;
        preloader.style.visibility = "hidden";
        preloader.style.pointerEvents = "none";
        document.body.classList.add("is-ready");
    }

    function initializeMotion() {
        if (!canAnimate) {
            finishPreloader();
            return;
        }

        const gsap = window.gsap;
        if (canUseScrollTrigger) {
            gsap.registerPlugin(window.ScrollTrigger);
            window.ScrollTrigger.config({ ignoreMobileResize: true });
        }

        gsap.set(".preloader__line span", { yPercent: 120 });
        gsap.set(".preloader__top", { opacity: 0 });

        const introElements = gsap.utils.toArray("#results-title, .result-card, .download-row");
        const introSet = new Set(introElements);
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });

        intro
            .to(".preloader__top", { opacity: 1, duration: 0.45 })
            .to(".preloader__line span", { yPercent: 0, duration: 0.85, stagger: 0.1 }, 0.06)
            .to(".preloader__rule span", { width: "100%", duration: 1.2 }, 0.1)
            .to(".preloader__line span", { yPercent: -120, duration: 0.65, stagger: 0.06 }, "+=0.28")
            .to(".preloader", { autoAlpha: 0, duration: 0.6, onComplete: finishPreloader }, "-=0.16")
            .from(introElements, { y: 34, opacity: 0, duration: 0.82, stagger: 0.1 }, "-=0.3");

        if (canUseScrollTrigger) {
            gsap.utils.toArray("[data-reveal]").forEach((element) => {
                if (introSet.has(element)) return;
                gsap.from(element, {
                    y: 34,
                    opacity: 0,
                    duration: 0.78,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }
    }

    function initializeGoTop() {
        const button = document.querySelector(".go-top");
        if (!button) return;

        const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
        if (coarsePointer || window.innerWidth <= 760) {
            button.hidden = true;
            return;
        }

        const update = () => button.classList.toggle("is-visible", window.scrollY > 700);
        button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }));
        window.addEventListener("scroll", update, { passive: true });
        update();
    }

    function initializeCarousels() {
        document.querySelectorAll("[data-carousel]").forEach((carousel) => {
            const slides = [...carousel.querySelectorAll(".creative-carousel__slide")];
            const viewport = carousel.querySelector(".creative-carousel__viewport");
            const previous = carousel.querySelector(".carousel-arrow--previous");
            const next = carousel.querySelector(".carousel-arrow--next");
            const counter = carousel.querySelector("[data-carousel-current]");
            if (!slides.length || !viewport || !previous || !next) return;

            let index = 0;
            let pointerStart = null;

            const show = (nextIndex) => {
                index = (nextIndex + slides.length) % slides.length;
                slides.forEach((slide, slideIndex) => {
                    const active = slideIndex === index;
                    slide.classList.toggle("is-active", active);
                    slide.setAttribute("aria-hidden", String(!active));
                });
                if (counter) counter.textContent = String(index + 1).padStart(2, "0");
            };

            previous.addEventListener("click", () => show(index - 1));
            next.addEventListener("click", () => show(index + 1));
            viewport.addEventListener("keydown", (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault();
                    show(index - 1);
                } else if (event.key === "ArrowRight") {
                    event.preventDefault();
                    show(index + 1);
                }
            });
            viewport.addEventListener("pointerdown", (event) => {
                pointerStart = event.clientX;
            }, { passive: true });
            viewport.addEventListener("pointerup", (event) => {
                if (pointerStart === null) return;
                const distance = event.clientX - pointerStart;
                pointerStart = null;
                if (Math.abs(distance) < 44) return;
                show(index + (distance < 0 ? 1 : -1));
            }, { passive: true });
            viewport.addEventListener("pointercancel", () => {
                pointerStart = null;
            }, { passive: true });

            show(0);
        });
    }

    function hydrateAsset(slot) {
        return new Promise((resolve) => {
            const source = slot.dataset.src;
            const stage = slot.querySelector(".asset-slot__stage");
            if (!source || !stage) {
                resolve(null);
                return;
            }

            const isVideo = slot.dataset.kind === "video";
            const usesControls = slot.dataset.controls === "true";
            const media = document.createElement(isVideo ? "video" : "img");
            let settled = false;

            const finish = (loaded) => {
                if (settled) return;
                settled = true;
                window.clearTimeout(timeout);
                if (loaded) {
                    stage.appendChild(media);
                    slot.classList.add("is-loaded");
                    if (isVideo && !slot.dataset.syncGroup && !usesControls) media.play().catch(() => {});
                    resolve(media);
                } else {
                    resolve(null);
                }
            };

            const timeout = window.setTimeout(() => finish(false), 4500);

            if (isVideo) {
                const autoLoop = !usesControls;
                if (slot.dataset.poster) media.poster = slot.dataset.poster;
                media.muted = autoLoop;
                media.defaultMuted = autoLoop;
                media.autoplay = autoLoop;
                media.loop = autoLoop;
                media.playsInline = true;
                media.preload = "metadata";
                media.controls = usesControls;
                if (usesControls) {
                    media.volume = 1;
                    const playButton = slot.querySelector(".video-play");
                    if (playButton) {
                        playButton.addEventListener("click", () => {
                            if (media.paused) media.play().catch(() => {});
                            else media.pause();
                        });
                    }
                    media.addEventListener("play", () => slot.classList.add("is-playing"));
                    media.addEventListener("pause", () => slot.classList.remove("is-playing"));
                    media.addEventListener("ended", () => slot.classList.remove("is-playing"));
                }
                media.addEventListener("loadeddata", () => finish(true), { once: true });
            } else {
                media.alt = "";
                media.decoding = "async";
                media.addEventListener("load", () => finish(true), { once: true });
            }

            media.addEventListener("error", () => finish(false), { once: true });
            media.src = source;
            if (isVideo) media.load();
        });
    }

    async function initializeAssets() {
        const slots = [...document.querySelectorAll(".asset-slot[data-src]")];
        await Promise.allSettled(slots.map(hydrateAsset));

        const groups = new Set(slots.map((slot) => slot.dataset.syncGroup).filter(Boolean));
        groups.forEach((group) => {
            const videos = [...document.querySelectorAll(`[data-sync-group="${group}"].is-loaded video`)];
            videos.forEach((video) => {
                video.currentTime = 0;
                video.play().catch(() => {});
            });
        });

        if (canUseScrollTrigger) window.ScrollTrigger.refresh();
    }

    initializeMotion();
    initializeCarousels();
    initializeGoTop();
    initializeAssets();
})();
