"use client";

import { meetings } from "@/app/data";

const TODAY = "2026-03-11";

const sorted = [...meetings].sort((a, b) => b.sortDate.localeCompare(a.sortDate));
const upcoming = sorted.filter((m) => m.isUpcoming || m.sortDate > TODAY).sort((a, b) =>
  a.sortDate.localeCompare(b.sortDate)
);
const past = sorted.filter((m) => !m.isUpcoming && m.sortDate <= TODAY);

export default function Meetings() {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          BOG Meetings
        </h2>
        <p className="text-[#8fafd4] text-sm">
          The Florida Board of Governors meets approximately 4–6 times per year.
        </p>
      </div>

      {/* Upcoming meetings */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></div>
          <h3
            className="text-sm font-bold text-[#4caf50] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            Upcoming Meetings
          </h3>
        </div>

        <div className="space-y-4">
          {upcoming.map((m, i) => (
            <div
              key={m.id}
              className={`rounded-xl border p-5 ${
                i === 0
                  ? "bg-[#0d1f10] border-[#4caf50]/50 shadow-[0_0_20px_rgba(76,175,80,0.1)]"
                  : "bg-[#0f2040] border-[#1a3a6b]"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {i === 0 && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#4caf50]/20 text-[#4caf50] border border-[#4caf50]/40 uppercase tracking-wider">
                        Next Meeting
                      </span>
                    )}
                  </div>
                  <h4
                    className="text-base font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
                  >
                    {m.dates}
                  </h4>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F4811F] text-xs">📍</span>
                    <p className="text-sm text-[#8fafd4]">{m.location}</p>
                  </div>
                </div>
                <div className="bg-[#0a1628] rounded-lg px-3 py-2 border border-[#1a3a6b] text-right">
                  <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider">Agenda</p>
                  <p className="text-xs text-[#a0b8d0] mt-0.5">TBD</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Past meetings */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-[#F4811F] rounded"></div>
          <h3
            className="text-sm font-bold text-[#F4811F] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            Past Meetings
          </h3>
        </div>

        <div className="space-y-3">
          {past.map((m) => {
            const isJune2025 = m.sortDate.startsWith("2025-06");
            return (
              <div
                key={m.id}
                className={`rounded-xl border p-4 ${
                  isJune2025
                    ? "bg-[#1a0808] border-red-700/50"
                    : "bg-[#0f2040] border-[#1a3a6b]"
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <div>
                    <h4
                      className="text-sm font-bold text-white"
                      style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
                    >
                      {m.dates}
                    </h4>
                    <div className="flex items-center gap-1 mt-0.5">
                      <span className="text-[#F4811F] text-[11px]">📍</span>
                      <p className="text-xs text-[#6a8faf]">{m.location}</p>
                    </div>
                  </div>
                  {isJune2025 && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-900/60 text-red-300 border border-red-700 uppercase tracking-wider">
                      Historic
                    </span>
                  )}
                </div>

                {m.highlights && m.highlights.length > 0 && (
                  <ul className="space-y-1.5 mt-2 pt-2 border-t border-[#1a3a6b]">
                    {m.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className={`flex-shrink-0 mt-0.5 text-[11px] ${
                            h.includes("REJECTED") || h.includes("historic")
                              ? "text-red-400"
                              : "text-[#F4811F]"
                          }`}
                        >
                          ▸
                        </span>
                        <p
                          className={`text-xs leading-snug ${
                            h.includes("REJECTED") ? "text-red-300 font-semibold" : "text-[#a0b8d0]"
                          }`}
                        >
                          {h}
                        </p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-6 p-4 rounded-xl bg-[#0f2040] border border-[#1a3a6b]">
        <p className="text-xs text-[#6a8faf]">
          <span className="text-[#F4811F] font-semibold">Meeting cadence:</span> The Board of Governors
          typically meets 4–6 times per year. Meetings are open to the public and agendas are posted in
          advance on the BOG website. Special or emergency meetings may be called by the Chair.
        </p>
      </div>
    </div>
  );
}
