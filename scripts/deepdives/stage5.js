// Stage 5: Arrival (al-Wuṣūl) — Maturity and Stable Virtues
// This file can be loaded as a plain script (sets window.Stage5Content) or imported as an ES module.

var stage5Html = '<div class="animate-in space-y-6">' +
    '<div class="bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-2xl p-8">' +
        '<div class="flex items-center gap-3 mb-4">' +
            '<div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-500 font-bold border border-purple-500/10 text-lg">5</div>' +
            '<div>' +
                '<h2 class="text-2xl font-bold text-slate-800 dark:text-white">Arrival</h2>' +
                '<p class="text-sm text-purple-600/70 dark:text-purple-500/60 font-serif">al-Wu\u1E63\u016Bl</p>' +
            '</div>' +
        '</div>' +
        '<p class="text-slate-600 dark:text-slate-300 leading-relaxed italic">' +
            '"Stability with Allah rather than ecstasy. Characterized by deep contentment and the annihilation of self-regard."' +
        '</p>' +
    '</div>' +

    '<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">' +
        '<div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">' +
            '<h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">' +
                '<span class="text-purple-500">\u25C8</span> Patience (\u1E62abr)' +
            '</h3>' +
            '<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">' +
                '<span class="text-purple-600 dark:text-purple-400 font-semibold">Steadiness and endurance that appears before a complaint is even formed</span>. At this stage, patience is no longer a conscious effort but a settled quality of the heart. The <em>s\u0101lik</em> does not need to remind themselves to be patient — patience has become their nature. Hardship is met with stillness. Delay is met with trust. Loss is met with a heart that has already let go. This is \u1E63abr not as suppression but as a deep, quiet strength that precedes any impulse to complain.' +
            '</p>' +
        '</div>' +

        '<div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">' +
            '<h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">' +
                '<span class="text-purple-500">\u25C8</span> Gratitude (Shukr)' +
            '</h3>' +
            '<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">' +
                '<span class="text-purple-600 dark:text-purple-400 font-semibold">Maintaining thankfulness in both ease and hardship</span>. The immature heart is grateful in ease and forgetful in hardship. The mature heart has unified its state: gratitude flows in both conditions because it sees the Giver behind every circumstance. Hardship is recognized as a cleansing, ease as a gift — both are reasons for shukr. This is not forced positivity but a genuine perception that all divine decrees carry hidden kindness.' +
            '</p>' +
        '</div>' +

        '<div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">' +
            '<h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">' +
                '<span class="text-purple-500">\u25C8</span> Contentment (Ri\u1E0D\u0101)' +
            '</h3>' +
            '<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">' +
                '<span class="text-purple-600 dark:text-purple-400 font-semibold">Deep inner peace with whatever Allah decrees</span>. Ri\u1E0D\u0101 is the fruit of complete trust and gratitude combined. It is not passive acceptance but active peace — a heart so aligned with divine will that it finds no resistance within itself to what unfolds. The one who has reached ri\u1E0D\u0101 does not merely tolerate divine decree; they are at home in it. This is the station where "why me?" has been permanently replaced by "whatever You will."' +
            '</p>' +
        '</div>' +

        '<div class="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-2xl p-6">' +
            '<h3 class="text-lg font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">' +
                '<span class="text-purple-500">\u25C8</span> Arrival (Wu\u1E63\u016Bl)' +
            '</h3>' +
            '<p class="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">' +
                'Wu\u1E63\u016Bl is defined <span class="text-purple-600 dark:text-purple-400 font-semibold">not as ecstasy, but as stability with Allah</span>. Many imagine the end of the path as a state of perpetual spiritual rapture. The Sh\u0101dhil\u012B understanding is more sober: arrival means the heart has become firmly established with Allah regardless of emotional state. It is marked by <span class="text-purple-600 dark:text-purple-400 font-semibold">minimal self-regard</span> — the ego has been so thoroughly dissolved that the person no longer revolves around themselves — and by <span class="text-purple-600 dark:text-purple-400 font-semibold">a presence that makes others feel at ease</span>. The one who has arrived does not intimidate, does not impress, but simply puts people at peace.' +
            '</p>' +
        '</div>' +

        '<div class="md:col-span-2 bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/50 rounded-2xl p-6">' +
            '<h3 class="text-lg font-bold text-purple-800 dark:text-purple-300 mb-4 flex items-center gap-2">' +
                '<span>\u26A1</span> Key Insight' +
            '</h3>' +
            '<p class="text-sm text-purple-700 dark:text-purple-400 leading-relaxed italic">' +
                '"Stability itself is a station. Wanting rapid progress is often a sign of following the ego." Arrival is not the end of the journey but the beginning of true servitude. The one who has arrived no longer asks "how far have I come?" but simply rests in the presence of the One who brought them here.' +
            '</p>' +
        '</div>' +
    '</div>' +
'</div>';

// Global assignment for direct script-tag loading (used by shadhhiliPath.html)
window.Stage5Content = stage5Html;
window.renderStage5 = function() {
    return stage5Html;
};