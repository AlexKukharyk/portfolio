(() => {
    "use strict";

    const copy = {
        ua: {
            reelPlaceholderTitle: "Рілс — незабаром",
            reelPlaceholderNote: "Тимчасове прев’ю",
            reelProcessTitle: "Як я створював відео",
            reelProcessIntro: "В основі ролика — ключові кадри, згенеровані за візуальними референсами. Частину матеріалів я знайшов у відкритих джерелах, зокрема Pinterest, і доповнив їх референсами локацій та брендингу з Instagram Growe Partners.",
            reelContextTitle: "Контекст тестового завдання",
            reelContextCopy: "Не маючи повного уявлення про бізнес-модель Growe Partners, у межах тестового я творчо інтерпретував локації, офіс, офери та інші деталі. У реальному проєкті перед фіналізацією сценарію я уточнив би бізнес-контекст і запросив погоджені референси, актуальні дані та бренд-матеріали.",
            reelResearchTitle: "Референс і сценарій",
            reelResearchCopy: "На Instagram-сторінці медіабаїнгової команди я знайшов короткий динамічний рілс, який відповідав DIY-формату з брифу. Визначив кількість сцен і підготував сценарій за допомогою Gemini та ChatGPT.",
            reelFramesTitle: "Генерація ключових кадрів",
            reelFramesCopy: "Підготував візуальні референси для сцен і на їхній основі згенерував ключові кадри у ChatGPT та Nano Banana.",
            reelAnimationTitle: "Від ключових кадрів до відео",
            reelAnimationCopy: "У Magnific використав модель Seedance 2.5, щоб анімувати підготовлені ключові кадри та отримати окремі відеофрагменти для монтажу.",
            reelAudioTitle: "Музика, voiceover і звукові ефекти",
            reelAudioCopy: "За допомогою Ultimate Vocal Remover (UVR) розділив аудіодоріжку референсу на стеми та прибрав закадровий голос. Решту звукової основи використав як референс для генерації аудіо в Suno.",
            reelVoiceCopy: "Озвучку згенерував в ElevenLabs. Після цього звів музичну доріжку, voiceover і звукові ефекти.",
            reelEditTitle: "Монтаж і фінальна анімація",
            reelEditCopy: "Зібрав відеофрагменти в цілісний ролик. Для фіналу створив анімацію логотипу Growe Partners безпосередньо в Adobe After Effects.",
            reelCaptionsTitle: "Субтитри та композитинг",
            reelCaptionsCopy: "Завантажив аудіодоріжку в сервіс генерації субтитрів і отримав відео з титрами на зеленому фоні. Прибрав фон ефектом Keylight в After Effects і наклав субтитри на ролик, щоб він залишався зрозумілим без звуку.",
            reelToolsTitle: "Інструменти, сервіси та AI-моделі",
            reelSubtitleService: "Сервіс генерації субтитрів",
            reelTimeTitle: "Орієнтовний час роботи",
            reelTimeResearch: "Знайомство з брендом і пошук матеріалів",
            reelTimeResearchValue: "≈3–4 год",
            reelTimeScript: "Сценарій",
            reelTimeScriptValue: "≈20 хв",
            reelTimeAudio: "Генерація та робота зі звуком: SFX, voiceover, музика",
            reelTimeHour: "≈1 год",
            reelTimeFrames: "Генерація ключових кадрів",
            reelTimeFramesValue: "≈2 год",
            reelTimeAnimation: "Генерація відеофрагментів",
            reelTimeCaptions: "Субтитри",
            reelTimeCaptionsValue: "≈10–15 хв",
            reelTimeEdit: "Монтаж і зведення",
            reelTimeEditValue: "≈30 хв",

            carouselProcessTitle: "Як я створював карусель",
            carouselProcessIntro: "Я побудував карусель навколо однієї візуально виразної обкладинки та п’яти інформаційних слайдів. Їхня основа — чітка типографічна ієрархія та візуальна мова Growe Partners.",
            carouselLayoutTime: "≈15–20 хв",
            carouselLayoutTitle: "Від HTML-макета до Figma",
            carouselLayoutP1: "Для інформаційних слайдів 02–06 я обрав нестандартний підхід, щоб швидше зібрати основу дизайну: залучив AI-агента Codex із моделлю GPT‑6 Astra.",
            carouselLayoutP2: "У промпті поєднав текст із ТЗ, візуальні референси з ресурсів Growe Partners, назви шрифтів, фірмові кольори та файли логотипів. За допомогою вебверстки агент зібрав п’ять артбордів 1080 × 1440 на одній локальній HTML-сторінці.",
            carouselLayoutP3: "Відкрив сторінку в браузері та імпортував її у Figma через розширення для Chrome, зберігши редаговані шари та стилі. У Figma доопрацював композицію й додав графічні елементи.",
            carouselVideoLabel: "Процес роботи",
            carouselVideoSoon: "Відео процесу — незабаром",
            carouselVideoNote: "Тимчасове прев’ю",
            carouselCoverTime: "≈25 хв",
            carouselCoverTitle: "Обкладинка, що зупиняє скрол",
            carouselCoverCopy: "Для першого слайда підібрав візуальні референси й на їхній основі згенерував зображення за допомогою AI. Потім доопрацював його у графічному редакторі, а текст і фінальну композицію зібрав у Figma.",
            carouselTypeLabel: "Типографіка",
            carouselTypeCopy: "Аналізуючи Instagram Growe Partners, я помітив використання Blender Pro. Хоча цього шрифту не було в ТЗ та наданих матеріалах, я додав його до дизайну, щоб підтримати візуальну мову бренду.",
            carouselTypeNote: "Додаткова гарнітура для акцентної типографіки",
            carouselLogoLabel: "Компактний знак",
            carouselLogoCopy: "Компактну версію логотипу з аватарки Instagram використав як референс для генерації головного об’єкта на передньому плані обкладинки.",
            carouselLogoAlt: "Компактний логотип Growe Partners",
            carouselToolsLabel: "Інструменти та AI-моделі",
            carouselExtension: "Figma · Chrome extension",
            carouselGalleryTitle: "Фінальна карусель",
            carouselGalleryNote: "6 слайдів · 1080 × 1440",
            carouselSlide01Alt: "Обкладинка: чому топові команди обирають Growe Partners",
            carouselSlide02Alt: "Слайд 02: LATAM-офери з високою конверсією",
            carouselSlide03Alt: "Слайд 03: відкрита комунікація та швидка підтримка",
            carouselSlide04Alt: "Слайд 04: філософія Win-Win",
            carouselSlide05Alt: "Слайд 05: довгострокове партнерство",
            carouselSlide06Alt: "Слайд 06: заклик до стабільного масштабування",

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
            taskOneTitle: "Завдання 1 — Instagram-карусель",
            staticCreative: "Instagram-карусель",
            taskTwoTitle: "Завдання 2 — Instagram-рілс",
            downloadProject: "Завантажити файли проєкту",
            downloadCreatives: "Завантажити банери",
            openFigma: "Відкрити у Figma",
            carouselLabel: "Instagram-карусель",
            carouselPrevious: "Попередній слайд",
            carouselNext: "Наступний слайд",
            taskOneLabel: "Завдання 1",
            taskOneHeading: "Carousel",
            taskTwoLabel: "Завдання 2",
            taskTwoHeading: "Reel",
            taskTwoDescription: "DIY-рілс, повністю створений за допомогою AI",
            staticVariant: "Варіант статичного банера",
            playVideo: "Відтворити відео",
            backToTop: "На початок ↑",
            staticPlaceholder: "Місце для слайда"
        },
        en: {
            reelPlaceholderTitle: "Reel coming soon",
            reelPlaceholderNote: "Temporary preview",
            reelProcessTitle: "How I made the reel",
            reelProcessIntro: "I built the reel around AI-generated keyframes guided by visual references. I sourced some references from public platforms, including Pinterest, and combined them with location and branding references from Growe Partners’ Instagram.",
            reelContextTitle: "The test-task context",
            reelContextCopy: "As I did not have a complete picture of Growe Partners’ business model, I treated the locations, office, offers and other details as creative interpretations for this test. For a live project, I would confirm the business context and request approved references, current information and brand assets before finalising the script.",
            reelResearchTitle: "Reference and script",
            reelResearchCopy: "I found a short, fast-paced reel on a media-buying team’s Instagram that matched the brief’s DIY format. I mapped out the scenes and developed the script with Gemini and ChatGPT.",
            reelFramesTitle: "Generating the keyframes",
            reelFramesCopy: "I prepared visual references for the scenes, then used them to generate keyframes in ChatGPT and Nano Banana.",
            reelAnimationTitle: "From keyframes to video",
            reelAnimationCopy: "In Magnific, I used Seedance 2.5 to animate the prepared keyframes and generate individual clips for the edit.",
            reelAudioTitle: "Music, voiceover and sound design",
            reelAudioCopy: "I used Ultimate Vocal Remover (UVR) to separate the reference audio into stems and remove the voiceover. I then used the remaining audio as a reference for generation in Suno.",
            reelVoiceCopy: "I generated the voiceover in ElevenLabs, then mixed it with the music and sound effects.",
            reelEditTitle: "Editing and the logo animation",
            reelEditCopy: "I assembled the generated clips into a cohesive reel. For the closing shot, I created a Growe Partners logo animation directly in Adobe After Effects.",
            reelCaptionsTitle: "Subtitles and compositing",
            reelCaptionsCopy: "I uploaded the audio track to a subtitle-generation service and generated a caption video on a green background. I keyed out the background with Keylight in After Effects and composited the subtitles over the reel so it would remain clear with the sound off.",
            reelToolsTitle: "Tools, services and AI models",
            reelSubtitleService: "Subtitle-generation service",
            reelTimeTitle: "Approximate time spent",
            reelTimeResearch: "Brand research and sourcing references",
            reelTimeResearchValue: "≈3–4 hr",
            reelTimeScript: "Script",
            reelTimeScriptValue: "≈20 min",
            reelTimeAudio: "Audio generation and production: SFX, voiceover, music",
            reelTimeHour: "≈1 hr",
            reelTimeFrames: "Keyframe generation",
            reelTimeFramesValue: "≈2 hr",
            reelTimeAnimation: "Video generation",
            reelTimeCaptions: "Subtitles",
            reelTimeCaptionsValue: "≈10–15 min",
            reelTimeEdit: "Editing and mixing",
            reelTimeEditValue: "≈30 min",

            carouselProcessTitle: "How I built the carousel",
            carouselProcessIntro: "I structured the carousel around one striking cover and five information-led slides, with a focus on clear typographic hierarchy and Growe Partners’ visual language.",
            carouselLayoutTime: "≈15–20 min",
            carouselLayoutTitle: "From HTML layouts to Figma",
            carouselLayoutP1: "For slides 02–06, I took an unconventional approach to speed up the initial layout stage: I worked with the Codex AI agent, using GPT‑6 Astra.",
            carouselLayoutP2: "My prompt combined the brief’s copy, visual references from Growe Partners’ channels, font names, brand colours and logo files. The agent used HTML and CSS to build five 1080 × 1440 artboards on a single local page.",
            carouselLayoutP3: "I opened the page in the browser and imported it into Figma through a Chrome extension, preserving editable layers and styles. I then refined the composition and added graphic elements in Figma.",
            carouselVideoLabel: "Work in progress",
            carouselVideoSoon: "Process video coming soon",
            carouselVideoNote: "Temporary preview",
            carouselCoverTime: "≈25 min",
            carouselCoverTitle: "A scroll-stopping cover",
            carouselCoverCopy: "For the first slide, I gathered visual references and used them to generate an AI image. I then refined it in a graphics editor and added the copy and final layout in Figma.",
            carouselTypeLabel: "Typography",
            carouselTypeCopy: "While reviewing Growe Partners’ Instagram, I noticed the use of Blender Pro. Although it was not included in the brief or supplied assets, I brought it into the design to stay consistent with the brand’s visual language.",
            carouselTypeNote: "An additional typeface for display typography",
            carouselLogoLabel: "Compact brand mark",
            carouselLogoCopy: "I used the compact logo from the brand’s Instagram avatar as a reference for generating the main foreground object on the cover.",
            carouselLogoAlt: "Compact Growe Partners logo",
            carouselToolsLabel: "Tools and AI models",
            carouselExtension: "Figma · Chrome extension",
            carouselGalleryTitle: "The final carousel",
            carouselGalleryNote: "6 slides · 1080 × 1440",
            carouselSlide01Alt: "Cover: why top teams choose Growe Partners",
            carouselSlide02Alt: "Slide 02: high-converting LATAM offers",
            carouselSlide03Alt: "Slide 03: open communication and fast support",
            carouselSlide04Alt: "Slide 04: a Win-Win philosophy",
            carouselSlide05Alt: "Slide 05: long-term partnerships",
            carouselSlide06Alt: "Slide 06: a call to scale consistently",

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
            taskOneTitle: "Task 1 — Instagram Carousel",
            staticCreative: "Instagram carousel",
            taskTwoTitle: "Task 2 — Instagram Reel",
            downloadProject: "Download project files",
            downloadCreatives: "Download banners",
            openFigma: "Open in Figma",
            carouselLabel: "Instagram carousel",
            carouselPrevious: "Previous slide",
            carouselNext: "Next slide",
            taskOneLabel: "Task 1",
            taskOneHeading: "Carousel",
            taskTwoLabel: "Task 2",
            taskTwoHeading: "Reel",
            taskTwoDescription: "DIY Reel Created Entirely via AI",
            staticVariant: "Static banner variant",
            playVideo: "Play video",
            backToTop: "Back to top ↑",
            staticPlaceholder: "Slide placeholder"
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

        document.dispatchEvent(new Event("presentation:languagechange"));
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
        document.dispatchEvent(new Event("presentation:ready"));
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

    if (reducedMotion) {
        document.querySelectorAll("[data-decorative-video]").forEach((video) => {
            video.autoplay = false;
            video.pause();
        });
    }

    initializeMotion();
    initializeCarousels();
    initializeGoTop();
    initializeAssets();
})();
