export const coreSteps = [
    { id: "tawbah", t: "Repentance", a: "Tawbah", d: "Sincerely turning away from all sins and self-reliance." },
    { id: "ikhlāṣ", t: "Sincerity", a: "Ikhlāṣ", d: "Purifying every intention for Allah alone." },
    { id: "zikr", t: "Remembrance", a: "Dhikr", d: "Constant engagement of heart and tongue." },
    { id: "khushū‘", t: "Presence in Prayer", a: "Khushū'", d: "Praying with total focus and awareness." },
    { id: "tadabbur", t: "Qur'an Engagement", a: "Tadabbur", d: "Deep recitation combined with reflection." },
    { id: "zuhd", t: "Detachment", a: "Zuhd", d: "Reducing the heart's attachment to the material world." },
    { id: "tazkiyah", t: "Purification", a: "Tazkiyah", d: "Fighting the ego's pride, envy, and showing off." },
    { id: "sabr", t: "Patience", a: "Sabr", d: "In times of hardship and in steadfast obedience." },
    { id: "shukr", t: "Gratitude", a: "Shukr", d: "Consistent recognition of Divine blessings." },
    { id: "tawakkul", t: "Trust", a: "Tawakkul", d: "Complete reliance on Allah without passivity." },
    { id: "maḥabbah", t: "Divine Love", a: "Maḥabbah", d: "Cultivating deep love for the Divine over mere fear." },
    { id: "suhbah", t: "Companionship", a: "Suhbah", d: "Keeping the company of the righteous." },
    { id: "shaykh", t: "Guidance", a: "Shaykh", d: "Following a mentor for discipline and spiritual direction." },
    { id: "mujāhadah", t: "Striving", a: "Mujāhadah", d: "The inner struggle against base desires." },
    { id: "khalwah", t: "Seclusion", a: "Khalwah", d: "Periods of solitude for spiritual focus." },
    { id: "khidmah", t: "Service", a: "Khidmah", d: "Serving creation as an act of worship." },
    { id: "muḥāsabah", t: "Self-Accounting", a: "Muḥāsabah", d: "Performing a daily inner audit of the heart." },
    { id: "fanā'", t: "Annihilation", a: "Fanā'", d: "Annihilation of ego to find subsistence (Baqā') in Allah." },
    { id: "istiqāmah", t: "Consistency", a: "Istiqāmah", d: "Small, virtuous deeds done continuously." }
];

export function initCoreGrid(onStepClick) {
    const grid = document.getElementById('core-grid');
    grid.innerHTML = coreSteps.map((step, i) => `
        <div onclick="handleStepClick('${step.id}')"
             class="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-lg hover:border-indigo-400 dark:hover:border-indigo-600 transition-all group cursor-pointer">
            <span class="step-number text-indigo-600 dark:text-indigo-400 text-sm font-bold opacity-50 group-hover:opacity-100">${(i + 1).toString().padStart(2, '0')}</span>
            <h3 class="font-bold text-slate-800 dark:text-slate-100 mt-1">
                ${step.t} <span class="text-sm font-normal text-slate-400 dark:text-slate-500">(${step.a})</span>
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">${step.d}</p>
        </div>
    `).join('');
}

export function getDeepDiveTabs() {
    return coreSteps
        .filter(step => ["tawbah", "ikhlāṣ", "zikr", "khushū‘"].includes(step.id))
        .map(step => step.id);
}
