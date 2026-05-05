// Stage 0: Wakefulness (al-Yaqaẓah) — Awakening
// This file can be loaded as a plain script (sets window.Stage0Content) or imported as an ES module.

const stage0Html = `
<div class="animate-in space-y-6">
    <div class="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-8">
        <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 dark:text-amber-500 font-bold border border-amber-500/10 text-lg">0</div>
            <div>
                <h2 class="text-2xl font-bold text-slate-800 dark:text-white">Awakening</h2>
                <p class="text-sm text-amber-600/70 dark:text-amber-500/60 font-serif">al-Yaqaẓah — اليقظة</p>
            </div>
        </div>
        <p class="text-slate-600 dark:text-slate-300 leading-relaxed italic">
            "The process begins with honest attention — noticing one's own heedlessness and developing a sincere desire for Allah."
        </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-amber-500">◈</span> Honest Attention
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Wakefulness (Yaqaẓah) begins with <span class="text-amber-600 dark:text-amber-400 font-semibold">"honest attention"</span> — a moment of clarity where the seeker notices their own heedlessness (ghaflah). This is not guilt or self-reproach, but a sincere recognition that one has been distracted from the Divine. From this recognition springs a genuine, heartfelt desire for Allah — not for spiritual experiences, not for states, but for Allah Himself.
            </p>
        </div>

        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-amber-500">◈</span> Beyond Experiences
            </h3>
            <p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                The key distinction at this stage is developing a <span class="text-amber-600 dark:text-amber-400 font-semibold">sincere desire for Allah over mere "experiences."</span> Many begin the path seeking visions, states, or spiritual consolations. The awakening is realizing that the Goal is not the gifts but the Giver — not the experience but the Presence. This reorientation of desire is the first true step on the path.
            </p>
        </div>

        <div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
                <span class="text-amber-500">◈</span> Signs of Wakefulness
            </h3>
            <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                <li class="flex items-start gap-2">
                    <span class="text-amber-500 mt-1">•</span>
                    <span>A growing discomfort with heedlessness and wasted time</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-500 mt-1">•</span>
                    <span>An inner pull toward remembrance (dhikr) and reflection</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-500 mt-1">•</span>
                    <span>Questioning the purpose of worldly pursuits and attachments</span>
                </li>
                <li class="flex items-start gap-2">
                    <span class="text-amber-500 mt-1">•</span>
                    <span>A sincere, quiet longing for Allah that was not there before</span>
                </li>
            </ul>
        </div>

        <div class="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-800/50 rounded-2xl p-6">
            <h3 class="text-lg font-bold text-amber-800 dark:text-amber-300 mb-4 flex items-center gap-2">
                <span>⚡</span> Key Insight
            </h3>
            <p class="text-sm text-amber-700 dark:text-amber-400 leading-relaxed italic">
                "Your reaching out to Him is only because He first reached out to you." The very fact that you feel this awakening is itself a sign that Allah has turned toward you. The desire for Allah is a gift from Allah.
            </p>
        </div>
    </div>
</div>
`;

// Global assignment for direct script-tag loading (used by shadhhiliPath.html)
window.Stage0Content = stage0Html;
window.renderStage0 = function() {
    return stage0Html;
};
