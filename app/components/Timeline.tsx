"use client";

import { milestones, bio, Milestone } from "@/app/data";

const TODAY = "2026-03-11";

const significanceBadge = (s: Milestone["significance"]) => {
  if (s === "historic")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-red-900/60 text-red-300 border border-red-700 uppercase tracking-wider">
        🔴 Historic
      </span>
    );
  if (s === "major")
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-900/40 text-yellow-300 border border-yellow-700/60 uppercase tracking-wider">
        🟡 Major
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-bold bg-green-900/40 text-green-400 border border-green-700/50 uppercase tracking-wider">
      🟢 Standard
    </span>
  );
};

const categoryLabel = (c: Milestone["category"]) => {
  const map: Record<string, string> = {
    appointment: "Appointment",
    curriculum: "Curriculum",
    presidential: "Presidential",
    tuition: "Tuition & Funding",
    strategic: "Strategic Planning",
    policy: "Policy",
    accreditation: "Accreditation",
  };
  return map[c] ?? c;
};

const allSorted = [...milestones].sort((a, b) =>
  a.sortDate.localeCompare(b.sortDate)
);

// Insert a virtual "today" marker
const todayMarkerDate = TODAY;

export default function Timeline() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Bio Section */}
      <div className="mb-10 p-6 rounded-xl border border-[#1a3a6b] bg-[#0f2040] shadow-xl">
        <div className="flex flex-col sm:flex-row gap-5 items-start">
          {/* Avatar placeholder */}
          <div className="flex-shrink-0 w-20 h-20 rounded-full bg-[#152847] border-2 border-[#c9a84c] flex items-center justify-center text-3xl shadow-lg">
            ⚖️
          </div>
          <div className="flex-1">
            <h2
              className="text-xl font-bold text-white mb-0.5"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
            >
              {bio.name}
            </h2>
            <p className="text-[#c9a84c] font-semibold text-sm mb-1">{bio.title}</p>
            <p className="text-[#8fafd4] text-xs mb-3">{bio.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              <div className="bg-[#0a1628] rounded-lg p-2.5 border border-[#1a3a6b]">
                <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider mb-0.5">Term I</p>
                <p className="text-xs text-white font-medium">
                  {bio.term1.start} — {bio.term1.end}
                </p>
              </div>
              <div className="bg-[#0a1628] rounded-lg p-2.5 border border-[#c9a84c]/40">
                <p className="text-[10px] text-[#c9a84c] uppercase tracking-wider mb-0.5">
                  Term II (Active)
                </p>
                <p className="text-xs text-white font-medium">
                  {bio.term2.start} — {bio.term2.end}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#8fafd4] mb-1">
              <span className="text-[#c9a84c] font-medium">Appointed by:</span>{" "}
              {bio.appointedBy}
            </p>
            <p className="text-xs text-[#8fafd4] mb-1">
              <span className="text-[#c9a84c] font-medium">Education:</span>{" "}
              {bio.education.join(" · ")}
            </p>
            <p className="text-xs text-[#8fafd4]">
              <span className="text-[#c9a84c] font-medium">Also serves on:</span>{" "}
              {bio.boards.join(" · ")}
            </p>
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-4 pt-4 border-t border-[#1a3a6b] grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-xl font-bold text-[#c9a84c]">2</p>
            <p className="text-[10px] text-[#8fafd4] uppercase tracking-wider">Terms</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#c9a84c]">12</p>
            <p className="text-[10px] text-[#8fafd4] uppercase tracking-wider">Universities</p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#c9a84c]">9+</p>
            <p className="text-[10px] text-[#8fafd4] uppercase tracking-wider">Years Remaining</p>
          </div>
        </div>
      </div>

      {/* Term labels */}
      <div className="flex gap-4 mb-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-[#0f2040] border border-[#1a3a6b]"></div>
          <span className="text-[#8fafd4]">Term I (Nov 2023 – Jan 2026)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-[#102040] border border-[#c9a84c]/30"></div>
          <span className="text-[#8fafd4]">Term II (Jan 2026 – Jan 2033)</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#c9a84c] via-[#1a3a6b] to-[#c9a84c]/30"></div>

        <div className="space-y-0">
          {allSorted.map((m, idx) => {
            // Should we show a "TODAY" marker before this milestone?
            const prevDate = idx > 0 ? allSorted[idx - 1].sortDate : "0000-00-00";
            const showTodayBefore =
              prevDate < todayMarkerDate && todayMarkerDate <= m.sortDate;
            const isFuture = m.sortDate > todayMarkerDate;

            return (
              <div key={m.id}>
                {/* Today marker */}
                {showTodayBefore && (
                  <div className="relative flex items-center my-4">
                    <div className="absolute left-5 w-4 h-4 -translate-x-1/2 rounded-full bg-[#4caf50] border-2 border-[#0a1628] z-10 shadow-[0_0_12px_rgba(76,175,80,0.7)]"></div>
                    <div className="ml-14 flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/50">
                        <div className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></div>
                        <span className="text-[11px] font-bold text-[#4caf50] uppercase tracking-wider">
                          Today — March 11, 2026
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Milestone card */}
                <div className="relative flex gap-4 pb-6">
                  {/* Node */}
                  <div
                    className={`absolute left-5 w-4 h-4 -translate-x-1/2 rounded-full border-2 z-10 flex-shrink-0 mt-4 ${
                      m.isFeatured
                        ? "bg-red-500 border-red-300 shadow-[0_0_16px_rgba(239,68,68,0.8)]"
                        : m.significance === "historic"
                        ? "bg-red-500 border-red-300"
                        : m.significance === "major"
                        ? "bg-[#c9a84c] border-[#dfc06a]"
                        : "bg-[#1a3a6b] border-[#2a5a8b]"
                    } ${isFuture ? "opacity-50" : ""}`}
                  ></div>

                  {/* Content */}
                  <div className="ml-14 flex-1">
                    <div
                      className={`rounded-xl border p-4 transition-all duration-200 ${
                        m.isFeatured
                          ? "bg-[#1a0808] border-red-600 shadow-[0_0_24px_rgba(220,38,38,0.25)]"
                          : m.term === 2
                          ? "bg-[#0d1f38] border-[#c9a84c]/25 hover:border-[#c9a84c]/50"
                          : "bg-[#0f2040] border-[#1a3a6b] hover:border-[#2a5a8b]"
                      } ${isFuture ? "opacity-60" : ""}`}
                    >
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <span className="text-[11px] text-[#6a8faf] font-mono">{m.date}</span>
                          {m.term === 2 && (
                            <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/30 font-medium">
                              TERM II
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {significanceBadge(m.significance)}
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] bg-[#0a1628] text-[#6a8faf] border border-[#1a3a6b] uppercase tracking-wider">
                            {categoryLabel(m.category)}
                          </span>
                        </div>
                      </div>

                      <h3
                        className={`text-sm font-bold mb-1.5 leading-snug ${
                          m.isFeatured ? "text-red-300" : "text-white"
                        }`}
                        style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
                      >
                        {m.isFeatured && (
                          <span className="mr-2 text-red-400">⚠</span>
                        )}
                        {m.title}
                      </h3>

                      <p className="text-xs text-[#a0b8d0] leading-relaxed">{m.description}</p>

                      {m.voteOutcome && (
                        <div
                          className={`mt-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${
                            m.voteOutcome.includes("REJECTED")
                              ? "bg-red-900/50 text-red-300 border border-red-700"
                              : "bg-[#0a1628] text-[#c9a84c] border border-[#c9a84c]/40"
                          }`}
                        >
                          <span>📊</span>
                          Vote: {m.voteOutcome}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* End of timeline today marker if today is after all events */}
          {allSorted[allSorted.length - 1]?.sortDate < todayMarkerDate && (
            <div className="relative flex items-center my-4">
              <div className="absolute left-5 w-4 h-4 -translate-x-1/2 rounded-full bg-[#4caf50] border-2 border-[#0a1628] z-10 shadow-[0_0_12px_rgba(76,175,80,0.7)]"></div>
              <div className="ml-14 flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4caf50]/10 border border-[#4caf50]/50">
                  <div className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></div>
                  <span className="text-[11px] font-bold text-[#4caf50] uppercase tracking-wider">
                    Today — March 11, 2026
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
