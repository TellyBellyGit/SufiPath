export function renderTawbahSection() {
    return `
        <button onclick="switchTab('core')"
            class="text-sm font-medium text-emerald-600 dark:text-emerald-400 flex items-center mb-4 group">
            <span class="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Core Path
        </button>

        <div class="bg-emerald-900 dark:bg-emerald-950 text-white p-8 rounded-2xl shadow-xl border border-emerald-800">
            <h2 class="text-4xl serif mb-4 font-bold">The Station of Repentance (Al-Tawbah)</h2>
            <p class="text-emerald-200 serif italic text-lg leading-relaxed">
                In the Sufi tradition, Repentance is not merely a legalistic ritual for past mistakes; it is the First Station of the wayfarer. It is the "Awakening" of the soul from the sleep of heedlessness.
            </p>
        </div>

        <!-- Section 1: The Degrees of Repentance -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">1. The Degrees of Repentance</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">There are different levels of return based on the clarity and focus of the heart:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- The Awakening (Tawbah) -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-emerald-600 dark:text-emerald-400">The Awakening (Tawbah)</h4>
                    <div class="space-y-3">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">The Moment:</span>
                            <p class="text-sm mt-1">Realizing that a change is needed and turning toward the light of Allah SWT.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Focus:</span>
                            <p class="text-sm mt-1">Turning away from outward sins, transgressions of the Law, and forbidden desires.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Goal:</span>
                            <p class="text-sm mt-1">Safety from Divine punishment and the restoration of moral integrity.</p>
                        </div>
                    </div>
                </div>

                <!-- The Awake (Inabah) -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">The Awake (Inabah)</h4>
                    <div class="space-y-3">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">The State:</span>
                            <p class="text-sm mt-1">Living in a consistent state of vigilance and mindfulness.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Focus:</span>
                            <p class="text-sm mt-1">Turning away from even permissible distractions that do not lead to Allah SWT.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Goal:</span>
                            <p class="text-sm mt-1">Pleasing the Beloved and seeking Divine Proximity.</p>
                        </div>
                    </div>
                </div>

                <!-- The Aware (Awbah) -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">The Aware (Awbah)</h4>
                    <div class="space-y-3">
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">The Depth:</span>
                            <p class="text-sm mt-1">A state of total presence where the 'self' no longer distracts from the One.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Focus:</span>
                            <p class="text-sm mt-1">Turning away from "other-than-Allah" entirely.</p>
                        </div>
                        <div>
                            <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Concept:</span>
                            <p class="text-sm mt-1">Repenting from the "sin" of seeing oneself as existing independently of the Creator. It is the return from the self to Allah SWT.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 2: The Internal Alchemy: The Three Pillars -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">2. The Internal Alchemy: The Three Pillars</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">For repentance to be valid and transformative, it must contain three essential components:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Knowledge (ʿIlm) -->
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h4 class="text-lg font-bold mb-3 text-indigo-700 dark:text-indigo-400">Knowledge (ʿIlm)</h4>
                    <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">The seeker must realize that every sin is a dark spot on the mirror of the heart. If the mirror is covered, it cannot reflect the Divine Light of Allah SWT.</p>
                    <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
                        <p class="text-xs italic text-slate-600 dark:text-slate-400">
                            <span class="font-bold">Clarification:</span> The "veil" is not something Allah SWT places between you and Him; it is a film of your own making that clouds your vision. Repentance is the act of polishing that mirror.
                        </p>
                    </div>
                    <div class="mt-3 bg-indigo-100 dark:bg-indigo-900/30 p-3 rounded-lg">
                        <p class="text-xs italic text-indigo-800 dark:text-indigo-300">
                            <span class="font-bold">Reflection:</span> "My sin is not just a broken rule, but a veil between my soul and Allah SWT."
                        </p>
                    </div>
                </div>

                <!-- State (Hal - Remorse) -->
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h4 class="text-lg font-bold mb-3 text-indigo-700 dark:text-indigo-400">State (Hal - Remorse)</h4>
                    <p class="text-sm text-slate-700 dark:text-slate-300 mb-4">This is the "Heart-Ache." True remorse is characterized by a burning sensation in the chest.</p>
                    <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
                        <p class="text-xs italic text-slate-600 dark:text-slate-400">
                            <span class="font-bold">Wisdom:</span> "A moan of a sinner is more beloved to Allah SWT than the proud tasbih of a saint."
                        </p>
                    </div>
                </div>

                <!-- Action (ʿAmal) -->
                <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                    <h4 class="text-lg font-bold mb-3 text-indigo-700 dark:text-indigo-400">Action (ʿAmal)</h4>
                    <div class="space-y-3">
                        <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                <span class="font-bold">Restitution:</span> If the sin involved another person (theft, backbiting), one must seek their forgiveness.
                            </p>
                        </div>
                        <div class="bg-white dark:bg-slate-800 p-3 rounded-lg">
                            <p class="text-xs text-slate-600 dark:text-slate-400">
                                <span class="font-bold">The "Clean Sweep":</span> Actively changing the environments you spend time in and the people you surround yourself with to protect your new state of heart.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Section 3: The Awakening Challenge: A 3-Day Practical Exercise -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">3. The Awakening Challenge: A 3-Day Practical Exercise</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">Designed for those beginning their return to the Path.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <!-- Day 1 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center mb-4">
                        <span class="serif italic text-3xl text-emerald-600 dark:text-emerald-400 mr-3">1.</span>
                        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100">Day 1: Identifying the Veil</h4>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Sit in silence for 5 minutes. Ask your heart: "What is the one habit or environment that makes me forget Allah SWT most often?" Do not judge it; simply name it. This is your first 'veil' to lift.</p>
                </div>

                <!-- Day 2 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center mb-4">
                        <span class="serif italic text-3xl text-indigo-600 dark:text-indigo-400 mr-3">2.</span>
                        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100">Day 2: The Sincere Turn</h4>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Pick one small, outward action associated with that veil and stop it for 24 hours. If you speak ill of others, practice silence. If you scroll mindlessly, put the phone away. Replace that moment with a single breath of Dhikr (Remembrance).</p>
                </div>

                <!-- Day 3 -->
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div class="flex items-center mb-4">
                        <span class="serif italic text-3xl text-purple-600 dark:text-purple-400 mr-3">3.</span>
                        <h4 class="text-lg font-bold text-slate-800 dark:text-slate-100">Day 3: Clearing the Space</h4>
                    </div>
                    <p class="text-sm text-slate-600 dark:text-slate-400">The heart needs a safe environment. Unfollow one digital account or tidy one physical space that triggers heedlessness. Make room for the light of Allah SWT to enter.</p>
                </div>
            </div>
        </div>

        <!-- Section 4: Muhasabah: The Daily Self-Accounting -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">4. Muhasabah: The Daily Self-Accounting</h3>
            <p class="text-slate-600 dark:text-slate-400 mb-6">To maintain your return, practice Muhasabah, the method of taking account of the soul throughout the day.</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-emerald-600 dark:text-emerald-400">Before the Act (Musharatah)</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Setting the intention at Fajr (Dawn) to remain vigilant.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">During the Act (Muraqabah)</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Being "present" with Allah SWT while interacting with the world.</p>
                </div>
                <div class="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h4 class="text-lg font-bold mb-3 text-purple-600 dark:text-purple-400">After the Act (Muhasabah)</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Reviewing the day at night. If good was done, give thanks (Shukr); if bad was done, renew your Repentance.</p>
                </div>
            </div>
        </div>

        <!-- Section 5: The Signs of Accepted Repentance -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">5. The Signs of Accepted Repentance</h3>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-emerald-50 dark:bg-slate-900 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
                    <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Softness of Heart</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">A feeling of humility and tenderness toward all of creation.</p>
                </div>
                <div class="bg-emerald-50 dark:bg-slate-900 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
                    <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Detachment</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">The once-alluring sin now feels heavy or distasteful.</p>
                </div>
                <div class="bg-emerald-50 dark:bg-slate-900 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
                    <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Increased Vigilance</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">A heightened fear of falling back into heedlessness (Ghaflah).</p>
                </div>
                <div class="bg-emerald-50 dark:bg-slate-900 p-5 rounded-xl border border-emerald-200 dark:border-emerald-900/30">
                    <h4 class="font-bold text-emerald-700 dark:text-emerald-400 mb-2">Transformation of Character</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-400">Replacing a vice with its opposite virtue.</p>
                </div>
            </div>
        </div>

        <!-- Section 6: Subtle Contemplations -->
        <div class="mb-12">
            <h3 class="text-2xl serif font-bold mb-6 text-slate-800 dark:text-slate-100">6. Subtle Contemplations</h3>
            
            <div class="bg-slate-100 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 mb-6">
                <p class="text-lg serif italic text-slate-700 dark:text-slate-300 text-center">
                    "Your turning to Him is only a result of His turning to you first."
                </p>
            </div>

            <div class="bg-indigo-50 dark:bg-slate-900 p-6 rounded-xl border-2 border-indigo-200 dark:border-indigo-900/50">
                <h4 class="text-lg font-bold mb-4 text-indigo-700 dark:text-indigo-400">Daily Dhikr for the Penitent:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
                        <p class="font-bold text-indigo-600 dark:text-indigo-400">Astaghfirullah al-Azim</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Seeking protection from the consequences of the self.</p>
                    </div>
                    <div class="bg-white dark:bg-slate-800 p-4 rounded-lg">
                        <p class="font-bold text-indigo-600 dark:text-indigo-400">Ya Tawwab</p>
                        <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Calling upon "O Relenting One" to open the door of the heart.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sources -->
        <div class="border-t border-slate-200 dark:border-slate-800 pt-6">
            <p class="text-xs text-slate-500 dark:text-slate-500 italic">
                Sources: The "Degrees of Repentance" are based on the stations defined by Al-Ansari. The "Three Pillars" follow the framework of Imam al-Ghazali. The "Daily Accounting" method is derived from the teachings of Al-Muhasibi.
            </p>
        </div>
    `;
}