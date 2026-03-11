"use client";

import { universities } from "@/app/data";

const statusConfig = {
  confirmed: { label: "Confirmed", color: "text-green-400", bg: "bg-green-900/30 border-green-700/50" },
  interim: { label: "Interim", color: "text-yellow-300", bg: "bg-yellow-900/30 border-yellow-700/50" },
  acting: { label: "Acting", color: "text-orange-300", bg: "bg-orange-900/30 border-orange-700/50" },
  vacant: { label: "Vacant", color: "text-red-400", bg: "bg-red-900/30 border-red-700/50" },
};

export default function Universities() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          State University System
        </h2>
        <p className="text-[#8fafd4] text-sm">
          Florida's 12 public universities — governed by the Board of Governors
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Universities", value: "12" },
          { label: "Total Enrollment", value: "~380K" },
          { label: "Presidential Vacancies", value: "1" },
          { label: "4-Year Grad Rate", value: "62%" },
        ].map((s) => (
          <div key={s.label} className="bg-[#0f2040] border border-[#1a3a6b] rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#c9a84c]"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}>
              {s.value}
            </p>
            <p className="text-[11px] text-[#6a8faf] uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Alert: UF vacancy */}
      <div className="mb-6 p-4 rounded-xl bg-red-900/15 border border-red-700/50 flex items-start gap-3">
        <span className="text-red-400 text-xl mt-0.5 flex-shrink-0">⚠</span>
        <div>
          <p className="text-sm font-bold text-red-300 mb-0.5"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}>
            UF Presidential Vacancy — Search Underway
          </p>
          <p className="text-xs text-[#a0b8d0]">
            On June 10, 2025, the Board of Governors rejected Santa Ono (10-6) — the first BOG rejection
            of a university presidential pick in its 22-year history. The University of Florida is currently
            conducting a new presidential search.
          </p>
        </div>
      </div>

      {/* University grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {universities.map((u) => {
          const status = u.presidentStatus ? statusConfig[u.presidentStatus] : statusConfig.confirmed;
          const isUF = u.shortName === "UF";

          return (
            <div
              key={u.id}
              className={`rounded-xl border p-5 transition-all duration-200 hover:shadow-lg ${
                isUF
                  ? "bg-[#1a0808] border-red-700/60 hover:border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.12)]"
                  : "bg-[#0f2040] border-[#1a3a6b] hover:border-[#2a5a8b]"
              }`}
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      className="text-lg font-black"
                      style={{
                        color: u.color,
                        fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif",
                      }}
                    >
                      {u.shortName}
                    </span>
                    {isUF && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-900/60 text-red-300 border border-red-700 font-bold uppercase">
                        Vacancy
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-semibold text-white leading-tight">{u.name}</p>
                  <p className="text-[11px] text-[#6a8faf]">{u.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-[#c9a84c]">{u.enrollment}</p>
                  <p className="text-[10px] text-[#6a8faf]">enrollment</p>
                </div>
              </div>

              {/* Ranking */}
              <div className="mb-3 px-2.5 py-1.5 rounded-lg bg-[#0a1628] border border-[#1a3a6b]">
                <span className="text-[10px] text-[#6a8faf] uppercase tracking-wider">US News: </span>
                <span className="text-xs text-white font-medium">{u.usNewsRanking}</span>
              </div>

              {/* President */}
              <div className="mb-3">
                <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider mb-1">President</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-white font-medium flex-1 leading-tight">{u.president}</p>
                  {u.presidentStatus && (
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded border font-semibold flex-shrink-0 ${status.bg} ${status.color}`}
                    >
                      {status.label}
                    </span>
                  )}
                </div>
              </div>

              {/* Notable actions */}
              {u.notableActions.length > 0 && (
                <div>
                  <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider mb-1.5">BOG Actions</p>
                  <ul className="space-y-1">
                    {u.notableActions.slice(0, 2).map((action, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-[#c9a84c] mt-0.5 flex-shrink-0 text-[10px]">▸</span>
                        <p className="text-[11px] text-[#a0b8d0] leading-snug">{action}</p>
                      </li>
                    ))}
                    {u.notableActions.length > 2 && (
                      <li className="text-[11px] text-[#4a6a8a] italic">
                        +{u.notableActions.length - 2} more...
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
