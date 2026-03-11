"use client";

import { boardMembers } from "@/app/data";

export default function Board() {
  const appointed = boardMembers.filter((m) => !m.isExOfficio);
  const exOfficio = boardMembers.filter((m) => m.isExOfficio);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h2
          className="text-2xl font-bold text-white mb-1"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          Board of Governors
        </h2>
        <p className="text-[#8fafd4] text-sm">
          Florida Board of Governors — State University System
        </p>
      </div>

      {/* Composition */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: "Total Members", value: "17" },
          { label: "Gov. Appointed", value: "14" },
          { label: "Ex-Officio", value: "3" },
          { label: "Term (yrs)", value: "7" },
        ].map((s) => (
          <div key={s.label} className="bg-[#0f2040] border border-[#1a3a6b] rounded-xl p-4 text-center">
            <p
              className="text-2xl font-bold text-[#FA4616]"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
            >
              {s.value}
            </p>
            <p className="text-[10px] text-[#6a8faf] uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="mb-6 p-4 rounded-xl bg-[#0f2040] border border-[#1a3a6b]">
        <p className="text-xs text-[#a0b8d0] leading-relaxed">
          <span className="text-[#FA4616] font-semibold">About the BOG:</span> The Florida Board of
          Governors was established by constitutional amendment in 2002 (Amendment 11). It is
          constitutionally responsible for the operation, regulation, control, and management of
          the State University System. The 14 citizen members are appointed by the Governor and
          confirmed by the Florida Senate for staggered 7-year terms.
        </p>
      </div>

      {/* Governor-appointed members */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[#FA4616] rounded"></div>
          <h3
            className="text-sm font-bold text-[#FA4616] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            Governor-Appointed Members ({appointed.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {appointed.map((member) => (
            <div
              key={member.id}
              className={`rounded-xl border p-4 transition-all duration-200 ${
                member.isSubject
                  ? "bg-[#0d1f38] border-[#FA4616]/50 shadow-[0_0_16px_rgba(201,168,76,0.1)]"
                  : "bg-[#0f2040] border-[#1a3a6b] hover:border-[#2a5a8b]"
              }`}
            >
              <div className="flex items-start justify-between gap-2 mb-1.5">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4
                      className={`text-sm font-bold leading-tight ${
                        member.isSubject ? "text-[#FA4616]" : "text-white"
                      }`}
                      style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
                    >
                      {member.name}
                    </h4>
                    {member.isSubject && (
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#FA4616]/15 text-[#FA4616] border border-[#FA4616]/40 font-bold uppercase tracking-wide flex-shrink-0">
                        ★ You
                      </span>
                    )}
                  </div>
                  {member.role && (
                    <p className="text-[11px] text-[#8fafd4] font-medium">{member.role}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1">
                {member.appointedBy && (
                  <p className="text-[11px] text-[#6a8faf]">
                    <span className="text-[#8fafd4]">Appointed by:</span> {member.appointedBy}
                  </p>
                )}
                <p className="text-[11px] text-[#6a8faf]">
                  <span className="text-[#8fafd4]">Term:</span> {member.termStart} – {member.termEnd}
                </p>
                {member.notes && (
                  <p className="text-[11px] text-[#6a8faf] italic mt-1">{member.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ex-Officio members */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-[#1a3a6b] rounded"></div>
          <h3
            className="text-sm font-bold text-[#8fafd4] uppercase tracking-wider"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            Ex-Officio Members ({exOfficio.length})
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {exOfficio.map((member) => (
            <div
              key={member.id}
              className="rounded-xl border border-[#1a3a6b] bg-[#0c1a30] p-4"
            >
              <h4
                className="text-xs font-bold text-[#8fafd4] mb-1 leading-tight"
                style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
              >
                {member.name}
              </h4>
              {member.role && (
                <p className="text-[10px] text-[#6a8faf] mb-1.5">{member.role}</p>
              )}
              {member.notes && (
                <p className="text-[11px] text-[#4a6a8a] leading-snug">{member.notes}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 rounded-xl bg-[#0f2040] border border-[#1a3a6b]">
        <p className="text-[11px] text-[#4a6a8a] leading-relaxed">
          <span className="text-[#6a8faf] font-semibold">Note:</span> Board membership listed is for
          informational purposes and may not reflect real-time changes. Some member names are approximate.
          For the official current roster, visit the Florida Board of Governors website at flbog.edu.
        </p>
      </div>
    </div>
  );
}
