export function renderZikrSection() {
    return `
        <button onclick="switchTab('core')"
            class="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mb-4 group">
            <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Core Path
        </button>

        <div class="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-2xl shadow-xl border border-emerald-800 text-center">
            <h2 class="text-4xl serif mb-4 font-bold">Remembrance (Dhikr)</h2>
            <p class="text-emerald-200 serif italic text-lg leading-relaxed">
                "I am with My servant when he remembers Me and his lips move with My mention."
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-600">
                        <span class="mr-2">◈</span> The Levels of Remembrance
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Commoners (ʿĀmm)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300">Remembrance with the tongue alone, while the heart is distracted—yet this is better than no remembrance at all.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect (Khāṣṣ)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300">Remembrance with the heart fully awake to the meaning, sensing Allah's presence filling the heart with peace.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Elect of Elect (Khāṣṣ al-Khāṣṣ)</h4>
                            <p class="text-sm text-slate-700 dark:text-slate-300">Remembrance where the presence of Allah is so strong that it immerses the heart with light, excluding all other thoughts—such that "the one who remembers becomes the One remembered."</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-600">
                        <span class="mr-2">◈</span> Indicators of the Heart
                    </h3>
                    <ul class="space-y-3 mb-4">
                        <li class="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200"><span class="font-bold">Forgetting creation (nisyān al-khalq)</span>—The heart becomes oblivious to the gaze of others, as all attention turns toward the Remembered alone.</p>
                        </li>
                        <li class="p-3 border border-indigo-100 dark:border-indigo-900/30 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200"><span class="font-bold">Constant presence (hudūr)</span>—The seeker reaches a state where dhikr continues even in sleep, for as the Prophet ﷺ said, "My eyes sleep, but my heart remains awake."</p>
                        </li>
                        <li class="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200"><span class="font-bold">Unity consciousness (tawḥīd al-dhākir wa al-madhkūr)</span>—The distinction between the one who remembers, the act of remembrance, and the One remembered dissolves, leaving only Allah.</p>
                        </li>
                        <li class="p-3 border border-indigo-100 dark:border-indigo-900/30 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200"><span class="font-bold">Inner motion (ḥarakat al-qalb)</span>—The physical heart itself begins to palpitate with the Name "Allāh," a motion that spreads to the entire body until every limb murmurs His Name.</p>
                        </li>
                        <li class="p-3 bg-indigo-50/50 dark:bg-indigo-950/20 rounded-lg">
                            <p class="text-sm text-slate-800 dark:text-slate-200"><span class="font-bold">Absence of distraction (al-jamʿ)</span>—The heart remains fixed on Allah even when engaged in worldly affairs, as the Qur'an commands: "those who remember Allah standing, sitting, and upon their sides" (3:191).</p>
                        </li>
                    </ul>
                    <div class="p-4 bg-indigo-900 dark:bg-indigo-800 rounded-lg text-white text-xs italic leading-relaxed">
                        "In short, the core indicator of dhikr is that the heart no longer needs to strive for remembrance—remembrance becomes its very nature. The seeker passes from actively remembering Allah to being remembered by Allah, from dhikr as an action to dhikr as a state. As one early Sufi said: 'I reached a point where my tongue moved not with dhikr, but by dhikr.' This is the station of the dhākir (the one who remembers) becoming the madhkūr (the One remembered)."
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-700 dark:text-indigo-400">
                        <span class="mr-2">⚡</span> Practical Inner Actions
                    </h3>
                    <div class="space-y-5">
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">The Three Stations of Remembrance</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Observe your state: (1) Dhikr of the tongue while the heart wanders; (2) Dhikr of the heart while the tongue is still; (3) Dhikr of the innermost being (sirr) where the self disappears.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Breath Awareness</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Let no breath pass without remembrance—your inhale and exhale become continuous invocation.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">The Audit of Presence</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Periodically check: Is my heart here with Allah, or have I drifted into forgetfulness (ghafla)?</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Loving Imagination</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic font-serif">Remember that you only remember whom you love. If dhikr is difficult, tend to the love first—for "as one remembers the beloved in everything that reminds one of them, the one who loves Allah will remember Him through everything seen in the universe."</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
