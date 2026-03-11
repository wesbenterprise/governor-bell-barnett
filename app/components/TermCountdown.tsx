"use client";

const TERM_START = new Date("2026-01-13");
const TERM_END = new Date("2033-01-06");
const TODAY = new Date("2026-03-11");

function getDecimalYear(date: Date): number {
  const year = date.getFullYear();
  const startOfYear = new Date(year, 0, 1).getTime();
  const endOfYear = new Date(year + 1, 0, 1).getTime();
  return year + (date.getTime() - startOfYear) / (endOfYear - startOfYear);
}

function getRemainingLabel(): string {
  const totalMs = TERM_END.getTime() - TERM_START.getTime();
  const elapsedMs = TODAY.getTime() - TERM_START.getTime();
  const remainingMs = totalMs - elapsedMs;
  const totalDays = remainingMs / (1000 * 60 * 60 * 24);
  const years = Math.floor(totalDays / 365.25);
  const months = Math.round((totalDays % 365.25) / 30.44);
  return `${years}y ${months}m remaining`;
}

export default function TermCountdown() {
  const padLeft = 60;
  const padRight = 30;
  const padTop = 50;
  const padBottom = 55;
  const svgW = 600;
  const svgH = 290;
  const chartW = svgW - padLeft - padRight;
  const chartH = svgH - padTop - padBottom;

  const xScale = (decYear: number) =>
    padLeft + ((decYear - 2026) / 7) * chartW;
  const yScale = (remaining: number) =>
    padTop + ((7 - remaining) / 7) * chartH;

  const termStartDec = getDecimalYear(TERM_START);
  const termEndDec = getDecimalYear(TERM_END);
  const todayDec = getDecimalYear(TODAY);

  const totalTermMs = TERM_END.getTime() - TERM_START.getTime();
  const elapsedMs = TODAY.getTime() - TERM_START.getTime();
  const todayRemaining = 7 * (1 - elapsedMs / totalTermMs);

  const x1 = xScale(termStartDec);
  const y1 = yScale(7);
  const x2 = Math.min(xScale(termEndDec), svgW - padRight);
  const y2 = yScale(0);
  const xT = xScale(todayDec);
  const yT = yScale(todayRemaining);
  const chartBottom = svgH - padBottom;

  const areaPath = `M ${x1} ${y1} L ${x2} ${y2} L ${x2} ${chartBottom} L ${x1} ${chartBottom} Z`;
  const linePath = `M ${x1} ${y1} L ${x2} ${y2}`;

  const remainingLabel = getRemainingLabel();
  const yearTicks = [2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033];
  const yTicks = [0, 1, 2, 3, 4, 5, 6, 7];

  // Position the today label to the right if close to left edge
  const labelX = xT + 10;
  const labelAnchor = "start";

  return (
    <div className="mb-10 rounded-xl border border-[#FA4616]/30 bg-[#080f1d] overflow-hidden shadow-xl">
      <div className="px-5 pt-5 pb-2">
        <h3
          className="text-sm font-bold text-[#FA4616] uppercase tracking-widest mb-0.5"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          TERM II COUNTDOWN
        </h3>
        <p className="text-xs text-[#6a8faf]">Jan 13, 2026 – Jan 6, 2033</p>
      </div>

      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        className="w-full"
        style={{ maxHeight: 260, display: "block" }}
      >
        {/* Horizontal grid lines */}
        {yTicks.map((y) => (
          <line
            key={`grid-y-${y}`}
            x1={padLeft}
            y1={yScale(y)}
            x2={svgW - padRight}
            y2={yScale(y)}
            stroke="#1a3a6b"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        ))}

        {/* Vertical grid lines */}
        {yearTicks.map((yr) => (
          <line
            key={`grid-x-${yr}`}
            x1={xScale(yr)}
            y1={padTop}
            x2={xScale(yr)}
            y2={chartBottom}
            stroke="#1a3a6b"
            strokeWidth="1"
            strokeDasharray="4,4"
          />
        ))}

        {/* Area fill */}
        <path d={areaPath} fill="#FA4616" fillOpacity="0.10" />

        {/* Line */}
        <path d={linePath} stroke="#FA4616" strokeWidth="2.5" fill="none" />

        {/* Axes */}
        <line
          x1={padLeft}
          y1={chartBottom}
          x2={svgW - padRight}
          y2={chartBottom}
          stroke="#2a4a7b"
          strokeWidth="1.5"
        />
        <line
          x1={padLeft}
          y1={padTop}
          x2={padLeft}
          y2={chartBottom}
          stroke="#2a4a7b"
          strokeWidth="1.5"
        />

        {/* Today vertical dashed line */}
        <line
          x1={xT}
          y1={padTop}
          x2={xT}
          y2={chartBottom}
          stroke="#FA4616"
          strokeWidth="1.5"
          strokeDasharray="4,3"
          strokeOpacity="0.6"
        />

        {/* Today dot */}
        <circle
          cx={xT}
          cy={yT}
          r="6"
          fill="#FA4616"
          stroke="#080f1d"
          strokeWidth="2.5"
        />
        <circle cx={xT} cy={yT} r="3" fill="#fff8e1" />

        {/* Today label */}
        <text
          x={labelX}
          y={yT - 10}
          fill="#FA4616"
          fontSize="11"
          fontWeight="bold"
          textAnchor={labelAnchor}
        >
          {remainingLabel}
        </text>
        <text
          x={labelX}
          y={yT + 4}
          fill="#8fafd4"
          fontSize="9"
          textAnchor={labelAnchor}
        >
          Mar 11, 2026
        </text>

        {/* X axis labels */}
        {yearTicks.map((yr) => (
          <text
            key={`x-label-${yr}`}
            x={xScale(yr)}
            y={chartBottom + 18}
            fill="#6a8faf"
            fontSize="10"
            textAnchor="middle"
          >
            {yr}
          </text>
        ))}

        {/* Y axis labels */}
        {yTicks.map((y) => (
          <text
            key={`y-label-${y}`}
            x={padLeft - 8}
            y={yScale(y) + 4}
            fill="#6a8faf"
            fontSize="10"
            textAnchor="end"
          >
            {y}y
          </text>
        ))}

        {/* Y axis title */}
        <text
          x={14}
          y={padTop + chartH / 2}
          fill="#4a6a8f"
          fontSize="9"
          textAnchor="middle"
          transform={`rotate(-90, 14, ${padTop + chartH / 2})`}
        >
          Years Remaining
        </text>
      </svg>
    </div>
  );
}
