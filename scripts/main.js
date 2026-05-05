import { renderTawbahSection } from "./deepdives/tawbah.js";
import { renderIkhlasSection } from "./deepdives/ikhlas.js";
import { renderZikrSection } from "./deepdives/zikr.js";
import { renderKhushuSection } from "./deepdives/khushu.js";
import { initCoreGrid, getDeepDiveTabs } from "./core.js";

const deepDiveRenderers = {
    tawbah: renderTawbahSection,
    "ikhlāṣ": renderIkhlasSection,
    zikr: renderZikrSection,
    "khushū‘": renderKhushuSection
};

const pageSections = ["core", "tawbah", "ikhlāṣ", "zikr", "khushū‘"];
const navHighlightTabs = ["core", "zikr"];
const deepDiveTabs = getDeepDiveTabs();

function init() {
    initTheme();
    initCoreGrid();
    renderDeepDiveSections();
    window.switchTab = switchTab;
    window.toggleDarkMode = toggleDarkMode;
    window.handleStepClick = handleStepClick;
}

function initTheme() {
    if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
    }
}

function renderDeepDiveSections() {
    Object.entries(deepDiveRenderers).forEach(([id, renderSection]) => {
        const section = document.getElementById(`section-${id}`);
        if (section) {
            section.innerHTML = renderSection();
        }
    });
}

function handleStepClick(id) {
    if (deepDiveTabs.includes(id)) {
        switchTab(id);
    } else {
        console.log(`Deep dive for ${id} coming soon.`);
    }
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function switchTab(tab) {
    pageSections.forEach(s => {
        const el = document.getElementById(`section-${s}`);
        if (el) el.classList.add('hidden');

        const btn = document.getElementById(`btn-${s}`);
        if (btn) {
            btn.classList.remove('tab-active');
            btn.classList.add('text-slate-500');
        }
    });

    const targetSection = document.getElementById(`section-${tab}`);
    if (targetSection) targetSection.classList.remove('hidden');

    if (navHighlightTabs.includes(tab)) {
        const targetBtn = document.getElementById(`btn-${tab}`);
        if (targetBtn) {
            targetBtn.classList.add('tab-active');
            targetBtn.classList.remove('text-slate-500');
        }
    }

    window.scrollTo(0, 0);
}

init();
