export function renderKhushuSection() {
    return `
        <button onclick="switchTab('core')"
            class="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mb-4 group">
            <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Core Path
        </button>

        <div class="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-2xl shadow-xl border border-emerald-800 text-center">
            <h2 class="text-4xl serif mb-4 font-bold">Presence in Prayer (Khushūʿ)</h2>
            <p class="text-emerald-200 serif italic text-lg leading-relaxed">
                "Khushūʿ is not a station you arrive at, but a scent that rises from the station of Mindfulness when the fire of Remembrance burns steadily."
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-600">
                        <span class="mr-2">◈</span> The Levels of Presence
                    </h3>
                    <div class="space-y-6">
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Commoners (ʿĀmm)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300">Struggling to prevent outward physical movement and wandering thoughts.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect (Khāṣṣ)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300">A fluid state where the heart remains with Allah even if the eyes move (like the Prophet's ﷺ heart while his eyes slept).</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect of Elect (Khāṣṣ al-Khāṣṣ)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300 font-bold italic mb-1">Fana' fil-Salat (Annihilation in the prayer):</p>
                            <p class="text-sm text-slate-700 dark:text-slate-300">The worshipper is so absorbed in witnessing Allah that they are "absent" to the self.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-600">
                        <span class="mr-2">◈</span> Indicators of the Heart
                    </h3>
                    <ul class="space-y-4">
                        <li class="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                            <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-1">Stillness of the limbs (ṭuma'nīnah)</h4>
                            <p class="text-xs text-slate-700 dark:text-slate-400">Not rushing between postures, as the Prophet ﷺ corrected the man who prayed poorly.</p>
                        </li>
                        <li class="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                            <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-1">Equality of the two rows</h4>
                            <p class="text-xs text-slate-700 dark:text-slate-400">The inner row (the heart's focus) and the outer row (the body's action) become synchronized; neither runs ahead nor lags behind.</p>
                        </li>
                        <li class="p-4 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg border border-indigo-100 dark:border-indigo-900/30">
                            <h4 class="text-sm font-bold text-indigo-900 dark:text-indigo-200 mb-1">Heaviness in the chest when Khushūʿ is lost</h4>
                            <p class="text-xs text-slate-700 dark:text-slate-400">A sign that the heart has tasted presence and now feels the pain of absence.</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-700 dark:text-indigo-400">
                        <span class="mr-2">⚡</span> Practical Inner Actions
                    </h3>
                    <div class="space-y-6">
                        <div class="p-4 bg-white dark:bg-slate-800/50 rounded-lg border border-indigo-200 dark:border-indigo-900/30">
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200 mb-2">The Pre-Prayer Pause (10 seconds)</h4>
                            <ul class="text-xs text-slate-700 dark:text-slate-400 space-y-2 list-disc pl-4">
                                <li>Stop all movement.</li>
                                <li>Recall that Allah is closer to you than your jugular vein.</li>
                                <li>Say inwardly: "I am about to stand before the King of kings. If I cannot see Him, He sees me."</li>
                                <li>Then say "Allahu Akbar"—but let that Takbīr be the sound of the world falling away behind you.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Increase Dhikr</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Practice outside of prayer (a distracted heart outside produces a dead heart inside).</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Reduce worldly noise</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic">Al-Ghazali says the heart leaks concentration like a bucket leaks water.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
