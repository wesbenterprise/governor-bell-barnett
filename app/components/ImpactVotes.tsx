"use client";

import { useState } from "react";
import { milestones, Milestone } from "@/app/data";

type FilterCategory = "all" | Milestone["category"];

const categoryConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  all: { label: "All Decisions", color: "text-white", bg: "bg-[#F4811F]", border: "border-[#F4811F]" },
  presidential: { label: "Presidential", color: "text-purple-300", bg: "bg-purple-900/30", border: "border-purple-700/50" },
  tuition: { label: "Tuition & Funding", color: "text-blue-300", bg: "bg-blue-900/30", border: "border-blue-700/50" },
  curriculum: { label: "Curriculum", color: "text-green-300", bg: "bg-green-900/30", border: "border-green-700/50" },
  strategic: { label: "Strategic Planning", color: "text-yellow-300", bg: "bg-yellow-900/30", border: "border-yellow-700/50" },
  policy: { label: "Policy Changes", color: "text-orange-300", bg: "bg-orange-900/30", border: "border-orange-700/50" },
  accreditation: { label: "Accreditation", color: "text-cyan-300", bg: "bg-cyan-900/30", border: "border-cyan-700/50" },
  appointment: { label: "Appointments", color: "text-pink-300", bg: "bg-pink-900/30", border: "border-pink-700/50" },
};

const significanceOrder: Record<string, number> = { historic: 0, major: 1, standard: 2 };

export default function ImpactVotes() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filtered = milestones
    .filter((m) => activeFilter === "all" || m.category === activeFilter)
    .sort((a, b) => {
      // Featured first, then by significance, then by date desc
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      const sigDiff = significanceOrder[a.significance] - significanceOrder[b.significance];
      if (sigDiff !== 0) return sigDiff;
      return b.sortDate.localeCompare(a.sortDate);
    });

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          Impact & Votes
        </h2>
        <p className="text-[#8fafd4] text-sm">
          Key decisions and votes by the Board of Governors during Ashley Bell Barnett's tenure.
        </p>
      </div>

      {/* Featured: UF/Ono Rejection */}
      <div className="mb-8 rounded-xl border border-red-600 bg-[#1a0808] p-5 shadow-[0_0_32px_rgba(220,38,38,0.2)]">
        <div className="flex items-start gap-3 mb-3">
          <span className="text-red-400 text-2xl mt-0.5">⚠</span>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span className="text-[10px] font-black px-2 py-0.5 rounded bg-red-900 text-red-300 border border-red-600 uppercase tracking-wider">
                🔴 Historic — First in 22-Year BOG History
              </span>
            </div>
            <h3
              className="text-base font-black text-red-300 leading-tight"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
            >
              BOG Rejects Santa Ono as UF President
            </h3>
          </div>
        </div>
        <p className="text-sm text-[#a0b8d0] leading-relaxed mb-3">
          In a 10-6 vote on June 10, 2025, the Board of Governors overturned the University of Florida
          Board of Trustees' unanimous selection of Dr. Santa Ono as UF president — the first such
          rejection in the BOG's 22-year history. Members cited concerns about DEI initiatives and
          ideological alignment incompatible with Florida's higher education direction under Governor DeSantis.
        </p>
        <div className="flex flex-wrap gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-900/40 border border-red-700">
            <span className="text-sm">📊</span>
            <span className="text-sm font-black text-red-300">Vote: 10-6 REJECTED</span>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-[#4a6a8f]">
            Vote not yet public
          </span>
          <div className="px-3 py-1.5 rounded-lg bg-[#0a1628] border border-[#1a3a6b]">
            <span className="text-xs text-[#6a8faf]">June 2025 · Presidential · Term I</span>
          </div>
        </div>
      </div>

      {/* Impact summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: "Total Actions", value: String(milestones.length) },
          { label: "Historic", value: String(milestones.filter((m) => m.significance === "historic").length) },
          { label: "Major", value: String(milestones.filter((m) => m.significance === "major").length) },
          { label: "Standard", value: String(milestones.filter((m) => m.significance === "standard").length) },
        ].map((s) => (
          <div key={s.label} className="bg-[#0f2040] border border-[#1a3a6b] rounded-xl p-3 text-center">
            <p
              className="text-xl font-bold text-[#F4811F]"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
            >
              {s.value}
            </p>
            <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Category filters */}
      <div className="mb-5">
        <p className="text-[11px] text-[#6a8faf] uppercase tracking-wider mb-2">Filter by Category</p>
        <div className="flex flex-wrap gap-2">
          {(Object.keys(categoryConfig) as FilterCategory[]).map((cat) => {
            const cfg = categoryConfig[cat];
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 ${
                  isActive
                    ? `${cfg.bg} ${cfg.color} ${cfg.border}`
                    : "bg-[#0f2040] text-[#6a8faf] border-[#1a3a6b] hover:border-[#2a5a8b] hover:text-white"
                }`}
              >
                {cfg.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Decisions list */}
      <div className="space-y-3">
        {filtered.map((m) => {
          if (m.isFeatured) return null; // already shown above
          const cfg = categoryConfig[m.category] ?? categoryConfig.all;

          return (
            <div
              key={m.id}
              className={`rounded-xl border p-4 transition-all duration-200 hover:shadow-md ${
                m.significance === "historic"
                  ? "bg-[#1a0808] border-red-700/50"
                  : m.term === 2
                  ? "bg-[#0d1f38] border-[#F4811F]/20 hover:border-[#F4811F]/40"
                  : "bg-[#0f2040] border-[#1a3a6b] hover:border-[#2a5a8b]"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] text-[#6a8faf] font-mono">{m.date}</span>
                  {m.term === 2 && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#F4811F]/10 text-[#F4811F] border border-[#F4811F]/30">
                      TERM II
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${cfg.bg} ${cfg.color} ${cfg.border}`}>
                    {cfg.label}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded border font-semibold uppercase tracking-wider ${
                      m.significance === "historic"
                        ? "bg-red-900/60 text-red-300 border-red-700"
                        : m.significance === "major"
                        ? "bg-yellow-900/40 text-yellow-300 border-yellow-700/60"
                        : "bg-green-900/40 text-green-400 border-green-700/50"
                    }`}
                  >
                    {m.significance}
                  </span>
                </div>
              </div>

              <h4
                className="text-sm font-bold text-white mb-1.5 leading-snug"
                style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
              >
                {m.title}
              </h4>
              <p className="text-xs text-[#a0b8d0] leading-relaxed">{m.description}</p>

              {(m.voteOutcome || m.ashleyVote) && (
                <div className="mt-2 flex flex-wrap gap-1.5 items-center">
                  {m.voteOutcome && (
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-semibold ${
                        m.voteOutcome.includes("REJECTED")
                          ? "bg-red-900/50 text-red-300 border border-red-700"
                          : m.voteOutcome === "Board Action"
                          ? "bg-[#0a1628] text-[#6a8faf] border border-[#1a3a6b]"
                          : "bg-[#0a1628] text-[#F4811F] border border-[#F4811F]/40"
                      }`}
                    >
                      📊 {m.voteOutcome === "Board Action" ? "Board Action" : `Vote: ${m.voteOutcome}`}
                    </div>
                  )}
                  {m.ashleyVote === "yes" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-[#6a8faf]">
                      Ashley voted yes
                    </span>
                  )}
                  {m.ashleyVote === "no" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-[#c97a5a]">
                      Ashley voted no
                    </span>
                  )}
                  {m.ashleyVote === "unknown" && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-[#4a6a8f]">
                      Vote not yet public
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
