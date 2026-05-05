export function renderTawbahSection() {
    return `
        <button onclick="switchTab('core')"
            class="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mb-4 group">
            <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Core Path
        </button>

        <div class="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-2xl shadow-xl border border-emerald-800">
            <h2 class="text-4xl serif mb-4 font-bold">Repentance (Tawbah)</h2>
            <p class="text-emerald-200 serif italic text-lg leading-relaxed">
                "Repentance is the return of the heart's focus from everything to the Only One."
            </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-emerald-600">
                        <span class="mr-2">◈</span> The Anatomy of Sin
                    </h3>
                    <div class="space-y-4">
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Outward (Ẓāhir)</h4>
                            <p class="text-sm">Physical disobedience, lying, injustice, and violations of Sharia.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Inward (Bāṭin)</h4>
                            <p class="text-sm">Pride (Kibr), Arrogance, Envy (Ḥasad), and reliance on worldly status.</p>
                        </div>
                        <div>
                            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">Subtle (Khafī)</h4>
                            <p class="text-sm">Heedlessness (Ghaflah) - forgetting Allah even for a moment.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-600">
                        <span class="mr-2">◈</span> Mechanism of Return
                    </h3>
                    <ul class="space-y-6">
                        <li class="flex">
                            <div class="font-serif italic text-2xl mr-4 text-indigo-300">1.</div>
                            <div>
                                <h4 class="font-bold">Knowledge (ʿIlm)</h4>
                                <p class="text-xs text-slate-500">Realizing sin is a veil from the Beloved.</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="font-serif italic text-2xl mr-4 text-indigo-300">2.</div>
                            <div>
                                <h4 class="font-bold">Remorse (Nadam)</h4>
                                <p class="text-xs text-slate-500">The burning desire to restore the connection.</p>
                            </div>
                        </li>
                        <li class="flex">
                            <div class="font-serif italic text-2xl mr-4 text-indigo-300">3.</div>
                            <div>
                                <h4 class="font-bold">Action (ʿAmal)</h4>
                                <p class="text-xs text-slate-500">Immediate cessation and firm resolve.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="space-y-6">
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h3 class="text-xl font-bold mb-4 flex items-center text-indigo-700 dark:text-indigo-400">
                        <span class="mr-2">⚡</span> Practical Inner Actions
                    </h3>
                    <div class="space-y-5">
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Cutting the Means</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Removing environments, habits, or people that lead to sin.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Guarding the Senses</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Vigilance over eyes, ears, tongue, and your internal thoughts.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Replace, Not Just Stop</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1">Sin → Dhikr, ‘ibādah, and good deeds.</p>
                        </div>
                        <div>
                            <h4 class="font-bold text-sm text-indigo-900 dark:text-indigo-200">Continuous Repentance</h4>
                            <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 italic font-serif">Not one moment, but ongoing (even the Prophet ﷺ made constant istighfār).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}
