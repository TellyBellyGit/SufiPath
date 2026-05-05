// Stage 1: Uprightness / Initial Turning (al-Istiqāmah) — Repentance & Outward Discipline
// This file can be loaded as a plain script (sets window.Stage1Content) or imported as an ES module.

const stage1Html = `
<div class="animate-in space-y-6">
    <div class="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-8">
        <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-500 font-bold border border-emerald-500/10 text-lg">1</div>
            <div>
                <h2 class="text-2xl font-bold text-slate-800 dark:text-white">Initial Turning</h2>
                <p class="text-sm text-emerald-600/70 dark:text-emerald-500/60 font-serif">al-Istiqāmah — الاستقامة</p>
            </div>
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed italic">
            "Repentance is the foundation of character reform, defined as truthfulness in turning back to Allah. It involves leaving not just sin, but also self-reliance."
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-emerald-500">◈</span> Repentance (Tawbah)
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Tawbah is the <span class="text-emerald-600 dark:text-emerald-400 font-semibold">foundation of character reform</span> — defined as "truthfulness in turning back to Allah." It is not merely regret or verbal seeking of forgiveness. True repentance involves a genuine turning of the heart away from disobedience and toward the Divine. Crucially, it involves leaving not just sin, but also <span class="text-emerald-600 dark:text-emerald-400 font-semibold">self-reliance</span> — the subtle belief that one can manage their own spiritual state without Allah's help.
            </p>
        </div>

        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-emerald-500">◈</span> Outward Discipline
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The traveler reorganizes their life around obedience. <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Prayers become non-negotiable</span> — the five daily prayers form the backbone of the day, not optional appointments. <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Major sins are abandoned</span> decisively. At this stage, <span class="text-emerald-600 dark:text-emerald-400 font-semibold">consistency is prioritized over emotional intensity</span>. The goal is to build a sustainable rhythm of obedience that does not depend on fleeting spiritual highs.
            </p>
        </div>

        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-emerald-500">◈</span> Practical Foundations
            </h3>
            <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li class="flex items-start gap-2">
                    <span class="text-emerald-500 mt-1">•</span>
                    <span>Establish the five daily prayers at their proper times without exception</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-500 mt-1">•</span>
                    <span>Identify and decisively abandon major sins (kabā'ir)</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-500 mt-1">•</span>
                    <span>Structure the day around obedience, not obedience around the day</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-500 mt-1">•</span>
                    <span>Seek sincere, continuous repentance — not a one-time event but an ongoing state</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-emerald-500 mt-1">•</span>
                    <span>Prioritize consistency (istiqāmah) over bursts of emotional fervor</span>
                </li>
            </ul>
        </div>

        <div class="bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-800/50 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-emerald-800 dark:text-emerald-300 mb-4 flex items-center gap-2">
                <span>⚡</span> Key Insight
            </h3>
            <p class="text-sm text-emerald-700 dark:text-emerald-400 leading-relaxed italic">
                "Stability itself is a station. Wanting rapid progress is often a sign of following the ego." Consistency in small, sincere actions outweighs dramatic but unsustainable bursts of spiritual effort. The one who prays steadily every day is further along than the one who prays all night once a month.
            </p>
        </div>
    </div>
</div>
`;

// Global assignment for direct script-tag loading (used by shadhhiliPath.html)
window.Stage1Content = stage1Html;
window.renderStage1 = function() {
    return stage1Html;
};
