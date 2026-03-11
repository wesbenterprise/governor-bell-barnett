"use client";

import { useState } from "react";
import Sidebar, { TabId } from "@/app/components/Sidebar";
import Timeline from "@/app/components/Timeline";
import Universities from "@/app/components/Universities";
import Meetings from "@/app/components/Meetings";
import ImpactVotes from "@/app/components/ImpactVotes";
import Board from "@/app/components/Board";

const tabTitles: Record<TabId, string> = {
  timeline: "Tenure Timeline",
  universities: "SUS Universities",
  meetings: "BOG Meetings",
  impact: "Impact & Votes",
  board: "Board Members",
};

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabId>("timeline");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0a1628]">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 lg:ml-60 min-h-screen">
        {/* Top bar */}
        <div className="sticky top-0 z-20 bg-[#060e1a]/95 backdrop-blur border-b border-[#1a3a6b] px-4 sm:px-6 py-3 flex items-center gap-3">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1 text-[#c9a84c]"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation"
          >
            <span className="block w-5 h-0.5 bg-current"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
            <span className="block w-5 h-0.5 bg-current"></span>
          </button>

          <div className="flex-1 min-w-0">
            <h1
              className="text-sm font-bold text-white truncate"
              style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
            >
              {tabTitles[activeTab]}
            </h1>
            <p className="text-[10px] text-[#6a8faf] hidden sm:block">
              Ashley Bell Barnett · FL Board of Governors · Term II Active
            </p>
          </div>

          {/* Current date badge */}
          <div className="flex-shrink-0 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f2040] border border-[#1a3a6b]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#4caf50] animate-pulse"></div>
            <span className="text-[11px] text-[#8fafd4] font-mono">Mar 11, 2026</span>
          </div>
        </div>

        {/* Tab content */}
        <div className="px-4 sm:px-6 py-6">
          {activeTab === "timeline" && <Timeline />}
          {activeTab === "universities" && <Universities />}
          {activeTab === "meetings" && <Meetings />}
          {activeTab === "impact" && <ImpactVotes />}
          {activeTab === "board" && <Board />}
        </div>
      </main>
    </div>
  );
}
