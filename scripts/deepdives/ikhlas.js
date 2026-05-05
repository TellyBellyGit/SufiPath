export function renderIkhlasSection() {
    return `
        <button onclick="switchTab('core')"
            class="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mb-4 group">
            <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Core Path
        </button>

        <div class="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-2xl shadow-xl border border-emerald-800">
            <h2 class="text-4xl serif mb-4 font-bold">Sincerity (Ikhlāṣ)</h2>
            <p class="text-emerald-200 serif italic text-lg leading-relaxed">
                "Ikhlāṣ is to forget the eyes of the people by constantly looking at the Creator."
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-600">
                        <span class="mr-2">◈</span> The Levels of Action
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Commoners (ʿĀm)</h4>
                            <p class="text-sm">Acting to seek rewards in the afterlife and protection from punishment.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect (Khāṣ)</h4>
                            <p class="text-sm">Acting solely to seek the pleasure and closeness of Allah (SWT).</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect of Elect (Khāṣ al-Khāṣ)</h4>
                            <p class="text-sm">Acting by Allah, for Allah, while being completely absent from the self.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-600">
                        <span class="mr-2">◈</span> Indicators of the Heart
                    </h3>
                    <ul class="space-y-3">
                        <li class="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200">Contentment (riḍā) with divine decree, whether favorable or adverse.</p>
                        </li>
                        <li class="p-3 border border-emerald-100 dark:border-emerald-900/30 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200">Fear (khawf) and hope (rajā’) balanced, not tied to people’s reactions.</p>
                        </li>
                        <li class="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200">Absence of envy (ḥasad) and grudge (ghill), since the heart sees all blessings as from God.</p>
                        </li>
                        <li class="p-3 border border-emerald-100 dark:border-emerald-900/30 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200">Constancy (thabāt) in dhikr, unaffected by presence or absence of onlookers.</p>
                        </li>
                        <li class="p-3 bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200">Detachment (zuhd) from status and reputation, realizing they are veils from God.</p>
                        </li>
                    </ul>
                    <div class="p-4 bg-emerald-900 dark:bg-emerald-800 rounded-lg text-white text-xs italic leading-relaxed">
                        "In short, the core indicator is that the heart’s conditions shifts entirely from creation to the Creator. Praise and blame become equal, and people’s reward or rejection loses its emotional hold—not through suppression, but through gnosis (ma‘rifa) that only God’s approval ultimately matters."
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-emerald-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-emerald-200 dark:border-emerald-900/50">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-700 dark:text-emerald-400">
                        <span class="mr-2">⚡</span> Practical Inner Actions
                    </h3>
                    <div class="space-y-5">
                        <div>
                            <h4 class="font-bold text-sm text-emerald-900 dark:text-emerald-200">The Triple Audit</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Check your intention before the deed, during the deed, and after its completion.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-emerald-900 dark:text-emerald-200">Hiding Good Deeds</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Strive to have "secret" acts of worship that nobody knows about except Allah.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-emerald-900 dark:text-emerald-200">Defeating 'Ujb (Self-Admiration)</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Realize that the ability to do good is a gift from Him, not your own strength.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-emerald-900 dark:text-emerald-200">Purifying the Goal</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic font-serif">Continually asking: "Am I doing this for Allah, or for the image of being a person who does this for Allah?"</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
