"use client";

const TERM_START = new Date("2026-01-13");
const TERM_END = new Date("2033-01-06");
const NOW = new Date();

export default function TermCountdown() {
  const totalMs = TERM_END.getTime() - TERM_START.getTime();
  const elapsedMs = NOW.getTime() - TERM_START.getTime();
  const remainingMs = totalMs - elapsedMs;
  const pctElapsed = Math.min(Math.max(elapsedMs / totalMs, 0), 1);
  const pctRemaining = 1 - pctElapsed;

  const totalDays = remainingMs / (1000 * 60 * 60 * 24);
  const years = Math.floor(totalDays / 365.25);
  const months = Math.round((totalDays % 365.25) / 30.44);

  const totalTermDays = totalMs / (1000 * 60 * 60 * 24);
  const elapsedDays = Math.floor(elapsedMs / (1000 * 60 * 60 * 24));

  return (
    <div className="mb-10 rounded-xl border border-[#F4811F]/30 bg-[#080f1d] overflow-hidden shadow-xl">
      <div className="px-5 pt-5 pb-3">
        <div className="flex items-center justify-between mb-1">
          <h3
            className="text-sm font-bold text-[#F4811F] uppercase tracking-widest"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            TERM II COUNTDOWN
          </h3>
          <span className="text-xs text-[#6a8faf]">
            Jan 13, 2026 – Jan 6, 2033
          </span>
        </div>

        {/* Big remaining number */}
        <div className="flex items-baseline gap-3 mb-4">
          <span
            className="text-3xl font-bold text-white"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            {years}
            <span className="text-lg text-[#6a8faf]">y</span>{" "}
            {months}
            <span className="text-lg text-[#6a8faf]">m</span>
          </span>
          <span className="text-sm text-[#6a8faf]">remaining</span>
        </div>

        {/* Thermometer bar */}
        <div className="relative w-full h-10 rounded-full bg-[#0d1a2e] border border-[#1a3a6b] overflow-hidden">
          {/* Remaining fill (anchored right, depleting leftward) */}
          <div
            className="absolute inset-y-0 right-0 rounded-full transition-all duration-1000"
            style={{
              width: `${pctRemaining * 100}%`,
              background: `linear-gradient(270deg, #F4811F, #FF7A45)`,
              boxShadow: "0 0 20px rgba(244, 129, 31, 0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          />

          {/* Year markers */}
          {[1, 2, 3, 4, 5, 6].map((yr) => {
            const markerPct = (yr / 7) * 100;
            return (
              <div
                key={yr}
                className="absolute top-0 bottom-0 w-px bg-[#1a3a6b]"
                style={{ left: `${markerPct}%` }}
              />
            );
          })}

          {/* Glass highlight */}
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(0,0,0,0.1) 100%)",
            }}
          />

          {/* Remaining text inside bar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-bold text-white/90 drop-shadow-sm tracking-wide">
              {Math.round(pctRemaining * 100)}% of term remaining
            </span>
          </div>
        </div>

        {/* Year labels under the bar */}
        <div className="relative w-full mt-1.5 h-4">
          <span className="absolute left-0 text-[10px] text-[#F4811F] font-medium">2026</span>
          {[1, 2, 3, 4, 5, 6].map((yr) => {
            const labelPct = (yr / 7) * 100;
            return (
              <span
                key={yr}
                className="absolute text-[10px] text-[#4a6a8f] -translate-x-1/2"
                style={{ left: `${labelPct}%` }}
              >
                {2026 + yr}
              </span>
            );
          })}
          <span className="absolute right-0 text-[10px] text-[#6a8faf]">2033</span>
        </div>

        {/* Stats row */}
        <div className="flex justify-between mt-3 pt-3 border-t border-[#1a3a6b]/50">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#4a6a8f]">Elapsed</span>
            <p className="text-sm text-white font-medium">{elapsedDays} days</p>
          </div>
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-wider text-[#4a6a8f]">Total Term</span>
            <p className="text-sm text-white font-medium">{Math.round(totalTermDays).toLocaleString()} days</p>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-[#4a6a8f]">Remaining</span>
            <p className="text-sm text-[#F4811F] font-medium">{Math.round(totalDays).toLocaleString()} days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
