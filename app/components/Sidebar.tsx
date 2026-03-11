"use client";

import { useEffect } from "react";

export type TabId = "timeline" | "universities" | "meetings" | "impact" | "board";

interface NavItem {
  id: TabId;
  label: string;
  icon: string;
  description: string;
}

const navItems: NavItem[] = [
  { id: "timeline", label: "Timeline", icon: "⏱", description: "Tenure & milestones" },
  { id: "universities", label: "Universities", icon: "🎓", description: "SUS 12 institutions" },
  { id: "meetings", label: "Meetings", icon: "📅", description: "BOG schedule" },
  { id: "impact", label: "Impact & Votes", icon: "⚖️", description: "Key decisions" },
  { id: "board", label: "Board", icon: "👥", description: "BOG members" },
];

interface SidebarProps {
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ activeTab, setActiveTab, open, onClose }: SidebarProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSelect = (tab: TabId) => {
    setActiveTab(tab);
    onClose();
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="px-5 py-6 border-b border-[#1a3a6b]">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-gold text-lg">★</span>
          <span
            className="text-[10px] font-medium tracking-[0.2em] text-gold uppercase"
            style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
          >
            State of Florida
          </span>
        </div>
        <h1
          className="text-sm font-bold leading-tight text-white mt-2"
          style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
        >
          Board of Governors
        </h1>
        <p className="text-[11px] text-[#8fafd4] mt-1 leading-tight">
          State University System
        </p>
        <div className="mt-3 pt-3 border-t border-[#1a3a6b]">
          <p className="text-[11px] text-[#FA4616] font-semibold">Ashley Bell Barnett</p>
          <p className="text-[10px] text-[#8fafd4] mt-0.5">Member · Term II · 2026–2033</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleSelect(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-150 group ${
                isActive
                  ? "bg-[#FA4616] text-[#0a1628]"
                  : "text-[#c8d9f0] hover:bg-[#152847] hover:text-white"
              }`}
            >
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <div className="min-w-0">
                <p
                  className={`text-xs font-semibold truncate ${isActive ? "text-[#0a1628]" : "text-white"}`}
                  style={{ fontFamily: "var(--font-orbitron-var), Orbitron, sans-serif" }}
                >
                  {item.label}
                </p>
                <p className={`text-[10px] truncate ${isActive ? "text-[#2a4a28]" : "text-[#6a8faf]"}`}>
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-[#1a3a6b]">
        <p className="text-[10px] text-[#4a6a8a] leading-relaxed">
          Data current as of March 2026. Compiled for informational purposes.
        </p>
        <div className="mt-2 flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-[#4caf50] animate-pulse"></div>
          <p className="text-[10px] text-[#4caf50]">Term II Active</p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed left-0 top-0 h-screen w-60 bg-[#060e1a] border-r border-[#1a3a6b] z-30">
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-[#060e1a] border-r border-[#1a3a6b] z-50 lg:hidden transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#8fafd4] hover:text-white text-xl"
          aria-label="Close menu"
        >
          ✕
        </button>
        <SidebarContent />
      </aside>
    </>
  );
}
