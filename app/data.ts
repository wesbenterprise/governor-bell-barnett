export type Significance = "historic" | "major" | "standard";
export type MilestoneCategory =
  | "appointment"
  | "curriculum"
  | "presidential"
  | "tuition"
  | "strategic"
  | "policy"
  | "accreditation";

export interface Milestone {
  id: number;
  date: string;
  sortDate: string;
  title: string;
  description: string;
  significance: Significance;
  term: 1 | 2;
  category: MilestoneCategory;
  voteOutcome?: string;
  isFeatured?: boolean;
}

export interface University {
  id: number;
  name: string;
  shortName: string;
  location: string;
  enrollment: string;
  usNewsRanking: string;
  president: string;
  presidentStatus?: "acting" | "interim" | "vacant" | "confirmed";
  notableActions: string[];
  color: string;
  bgColor: string;
}

export interface Meeting {
  id: number;
  dates: string;
  sortDate: string;
  location: string;
  isUpcoming: boolean;
  highlights?: string[];
}

export interface BoardMember {
  id: number;
  name: string;
  role?: string;
  appointedBy?: string;
  termStart: string;
  termEnd: string;
  isExOfficio: boolean;
  notes?: string;
  isSubject?: boolean;
}

// ──────────────────────────────────────────
// BIO
// ──────────────────────────────────────────
export const bio = {
  name: "Ashley Bell Barnett",
  title: "Member, Florida Board of Governors",
  subtitle: "State University System of Florida",
  term1: { start: "November 27, 2023", end: "January 6, 2026" },
  term2: { start: "January 13, 2026", end: "January 6, 2033" },
  appointedBy: "Governor Ron DeSantis",
  education: [
    "MPA — University of South Florida",
    "BA — Florida Southern College",
  ],
  boards: [
    "Moffitt Cancer Center Foundation Board",
    "Polk State College District Board of Trustees",
    "Southwest Florida Water Management District Governing Board",
    "United Way of Central Florida Board",
  ],
  leadership: [
    "Leadership Polk (Class XII)",
    "Leadership Florida Education (Class III)",
    "Leadership Los Angeles (Class VI)",
  ],
  personal:
    "Fifth-generation Floridian. Lives in Winter Haven with husband Wesley and two daughters.",
  spiritNote: "Go Gators",
};

// ──────────────────────────────────────────
// MILESTONES
// ──────────────────────────────────────────
export const milestones: Milestone[] = [
  {
    id: 1,
    date: "November 2023",
    sortDate: "2023-11-27",
    title: "Appointed to Board of Governors",
    description:
      "Governor Ron DeSantis appoints Ashley Bell Barnett to the Florida Board of Governors for the State University System. She begins her role representing the State University System's 12 public universities.",
    significance: "major",
    term: 1,
    category: "appointment",
  },
  {
    id: 2,
    date: "January 2024",
    sortDate: "2024-01-15",
    title: "Sociology Removed from General Education Core",
    description:
      "Board votes to remove sociology from the general education core curriculum, replacing it with a 'factual history' course requirement across the State University System.",
    significance: "major",
    term: 1,
    category: "curriculum",
    voteOutcome: "Approved",
  },
  {
    id: 3,
    date: "February 2024",
    sortDate: "2024-02-15",
    title: "UF Hamilton Center Course Approved",
    description:
      "The Board approves the University of Florida's Hamilton Center civil discourse course to satisfy the Civic Literacy requirement for students across the system.",
    significance: "standard",
    term: 1,
    category: "curriculum",
    voteOutcome: "Approved",
  },
  {
    id: 4,
    date: "September 2024",
    sortDate: "2024-09-15",
    title: "2024 System Accountability Plan Approved",
    description:
      "BOG approves the 2024 System Accountability Plan, highlighting record metrics: 62% four-year graduation rate system-wide, and an average bachelor's degree cost of $20,300 with financial aid.",
    significance: "major",
    term: 1,
    category: "strategic",
    voteOutcome: "Approved",
  },
  {
    id: 5,
    date: "January 2025",
    sortDate: "2025-01-15",
    title: "2030 Strategic Goals Established",
    description:
      "BOG sets ambitious 2030 strategic goals including positioning UCF among the top 50 public universities and FAMU among the top 100 public universities in national rankings.",
    significance: "major",
    term: 1,
    category: "strategic",
    voteOutcome: "Approved",
  },
  {
    id: 6,
    date: "May 2025",
    sortDate: "2025-05-15",
    title: "UF Board of Trustees Selects Santa Ono",
    description:
      "The University of Florida's Board of Trustees unanimously selects Dr. Santa Ono as the next president of the University of Florida, sending the selection to the Board of Governors for confirmation.",
    significance: "major",
    term: 1,
    category: "presidential",
  },
  {
    id: 7,
    date: "June 2025",
    sortDate: "2025-06-10",
    title: "BOG REJECTS Santa Ono as UF President",
    description:
      "In a 10-6 vote, the Board of Governors rejects Dr. Santa Ono as University of Florida president — the FIRST TIME in the BOG's 22-year history that a Board of Trustees presidential selection was overturned. Members cited concerns about Ono's prior leadership on diversity, equity, and inclusion initiatives, which they characterized as promoting 'woke' ideology incompatible with Florida's higher education direction.",
    significance: "historic",
    term: 1,
    category: "presidential",
    voteOutcome: "10-6 REJECTED",
    isFeatured: true,
  },
  {
    id: 8,
    date: "June 2025",
    sortDate: "2025-06-15",
    title: "Three University Presidents Confirmed",
    description:
      "BOG confirms three new university presidents: Jeanette Nuñez at Florida International University (FIU), Marva Johnson at Florida A&M University (FAMU), and Manny Diaz Jr. as Interim President at University of West Florida (UWF).",
    significance: "major",
    term: 1,
    category: "presidential",
    voteOutcome: "Unanimously Approved",
  },
  {
    id: 9,
    date: "June 2025",
    sortDate: "2025-06-20",
    title: "Out-of-State Tuition Increases Authorized",
    description:
      "BOG unanimously approves allowing universities to increase out-of-state tuition — the first such increases in over a decade. Universities may increase up to 10% in year one and up to 15% in year two.",
    significance: "major",
    term: 1,
    category: "tuition",
    voteOutcome: "Unanimously Approved",
  },
  {
    id: 10,
    date: "July 2025",
    sortDate: "2025-07-15",
    title: "New Accreditor Approved (CPHE)",
    description:
      "BOG approves transitioning to a new accrediting body — the Commission on Postsecondary Higher Education (CPHE) — for the State University System, replacing the longstanding SACSCOC accreditation.",
    significance: "major",
    term: 1,
    category: "accreditation",
    voteOutcome: "Approved",
  },
  {
    id: 11,
    date: "November 2025",
    sortDate: "2025-11-01",
    title: "Latin American/Caribbean Scholarship Removed",
    description:
      "BOG ends the in-state tuition benefit for students from more than 50 Latin American and Caribbean countries, eliminating a program that had broadened higher education access across the region.",
    significance: "major",
    term: 1,
    category: "tuition",
    voteOutcome: "Approved",
  },
  {
    id: 12,
    date: "November 2025",
    sortDate: "2025-11-15",
    title: "Performance-Based Funding Model Updated",
    description:
      "BOG updates the Performance-Based Funding Model that determines state funding distribution among the 12 SUS universities based on key metrics including graduation rates, employment outcomes, and research activity.",
    significance: "standard",
    term: 1,
    category: "strategic",
    voteOutcome: "Approved",
  },
  {
    id: 13,
    date: "December 2025",
    sortDate: "2025-12-01",
    title: "Chair's Unilateral Power Over Presidential Finalists Rescinded",
    description:
      "BOG rescinds a rule that had granted the Board chair unilateral authority over the selection of presidential finalists, restoring more collective governance authority to the full board following the controversy over the UF/Ono rejection.",
    significance: "major",
    term: 1,
    category: "policy",
    voteOutcome: "Approved",
  },
  {
    id: 14,
    date: "December 2025",
    sortDate: "2025-12-15",
    title: "SUS30 Strategic Plan Launched",
    description:
      "BOG formally launches the SUS30 Strategic Plan — a comprehensive roadmap for the State University System through 2030, setting targets for academic excellence, research output, graduate rates, and workforce alignment.",
    significance: "major",
    term: 1,
    category: "strategic",
    voteOutcome: "Approved",
  },
  {
    id: 15,
    date: "January 13, 2026",
    sortDate: "2026-01-13",
    title: "Term 2 Begins — Reappointed",
    description:
      "Ashley Bell Barnett begins her second term on the Florida Board of Governors, reappointed to serve through January 6, 2033. Her reappointment reflects continued confidence in her service and the Board's direction under Governor DeSantis.",
    significance: "major",
    term: 2,
    category: "appointment",
  },
  {
    id: 16,
    date: "March 2026",
    sortDate: "2026-03-01",
    title: "H-1B Visa Hiring Pause Approved",
    description:
      "BOG approves a pause on H-1B visa sponsored faculty hiring through January 2027, affecting international faculty recruitment across all 12 SUS universities.",
    significance: "major",
    term: 2,
    category: "policy",
    voteOutcome: "Approved",
  },
];

// ──────────────────────────────────────────
// UNIVERSITIES
// ──────────────────────────────────────────
export const universities: University[] = [
  {
    id: 1,
    name: "University of Florida",
    shortName: "UF",
    location: "Gainesville, FL",
    enrollment: "~57,000",
    usNewsRanking: "#6 Public University",
    president: "Vacant — Search Underway",
    presidentStatus: "vacant",
    notableActions: [
      "BOG rejected Santa Ono as president (Jun 2025) — historic first in 22-year BOG history",
      "Hamilton Center civil discourse course approved for Civic Literacy (Feb 2024)",
      "New presidential search ongoing",
    ],
    color: "#FA4616",
    bgColor: "#1a1a0f",
  },
  {
    id: 2,
    name: "Florida State University",
    shortName: "FSU",
    location: "Tallahassee, FL",
    enrollment: "~45,000",
    usNewsRanking: "#18 Public University",
    president: "Richard McCullough",
    presidentStatus: "confirmed",
    notableActions: [
      "Continues to advance research enterprise and graduate rankings",
      "Strong performance in 2024 System Accountability metrics",
    ],
    color: "#782F40",
    bgColor: "#1a0f10",
  },
  {
    id: 3,
    name: "University of South Florida",
    shortName: "USF",
    location: "Tampa, FL",
    enrollment: "~50,000",
    usNewsRanking: "#44 Public University",
    president: "Rhea Law",
    presidentStatus: "confirmed",
    notableActions: [
      "Rapid ascension through Preeminent research designation",
      "Meeting 2030 strategic benchmarks ahead of schedule",
    ],
    color: "#006747",
    bgColor: "#0a1a14",
  },
  {
    id: 4,
    name: "University of Central Florida",
    shortName: "UCF",
    location: "Orlando, FL",
    enrollment: "~68,000",
    usNewsRanking: "#127 National University",
    president: "Alexander Cartwright",
    presidentStatus: "confirmed",
    notableActions: [
      "2030 Goal: Achieve Top 50 public university ranking",
      "Largest university in Florida by enrollment",
      "Growing research capacity and downtown campus expansion",
    ],
    color: "#BA9B37",
    bgColor: "#1a1608",
  },
  {
    id: 5,
    name: "Florida International University",
    shortName: "FIU",
    location: "Miami, FL",
    enrollment: "~58,000",
    usNewsRanking: "#197 National University",
    president: "Jeanette Nuñez",
    presidentStatus: "confirmed",
    notableActions: [
      "Jeanette Nuñez confirmed as president by BOG (Jun 2025)",
      "Serves a majority Hispanic student population",
      "Strong ties to Latin American academic community",
    ],
    color: "#081E3F",
    bgColor: "#0a0f1a",
  },
  {
    id: 6,
    name: "Florida Atlantic University",
    shortName: "FAU",
    location: "Boca Raton, FL",
    enrollment: "~30,000",
    usNewsRanking: "#138 National University",
    president: "Stacy Volnick",
    presidentStatus: "confirmed",
    notableActions: [
      "Expanding STEM and research programs",
      "Growing online and hybrid course offerings",
    ],
    color: "#003366",
    bgColor: "#0a0f1a",
  },
  {
    id: 7,
    name: "Florida Gulf Coast University",
    shortName: "FGCU",
    location: "Fort Myers, FL",
    enrollment: "~16,000",
    usNewsRanking: "#50 Regional South",
    president: "Mike Martin",
    presidentStatus: "confirmed",
    notableActions: [
      "Focused on southwest Florida workforce needs",
      "Strong environmental and sustainability programs",
    ],
    color: "#004B23",
    bgColor: "#0a1610",
  },
  {
    id: 8,
    name: "University of North Florida",
    shortName: "UNF",
    location: "Jacksonville, FL",
    enrollment: "~17,000",
    usNewsRanking: "#40 Regional South",
    president: "Moez Limayem",
    presidentStatus: "confirmed",
    notableActions: [
      "Serving northeast Florida region",
      "Focus on business, health, and computing programs",
    ],
    color: "#002D62",
    bgColor: "#0a0f1a",
  },
  {
    id: 9,
    name: "University of West Florida",
    shortName: "UWF",
    location: "Pensacola, FL",
    enrollment: "~13,000",
    usNewsRanking: "#53 Regional South",
    president: "Manny Diaz Jr. (Interim)",
    presidentStatus: "interim",
    notableActions: [
      "Manny Diaz Jr. confirmed as Interim President by BOG (Jun 2025)",
      "Host of March 25-26, 2026 BOG meeting",
      "Serving northwest Florida Panhandle region",
    ],
    color: "#003087",
    bgColor: "#0a0f1a",
  },
  {
    id: 10,
    name: "Florida A&M University",
    shortName: "FAMU",
    location: "Tallahassee, FL",
    enrollment: "~10,000",
    usNewsRanking: "#159 National University",
    president: "Marva Johnson",
    presidentStatus: "confirmed",
    notableActions: [
      "Marva Johnson confirmed as president by BOG (Jun 2025)",
      "2030 Goal: Achieve Top 100 public university ranking",
      "Florida's only public HBCU",
    ],
    color: "#4A7729",
    bgColor: "#0d1a0a",
  },
  {
    id: 11,
    name: "Florida Polytechnic University",
    shortName: "Florida Poly",
    location: "Lakeland, FL",
    enrollment: "~5,000",
    usNewsRanking: "Emerging / STEM Focused",
    president: "G. Thomas Smatresk",
    presidentStatus: "confirmed",
    notableActions: [
      "Florida's newest state university (opened 2014)",
      "100% STEM focus — engineering, computer science, data science",
      "Partnership-driven model with industry employers",
    ],
    color: "#002E5D",
    bgColor: "#0a0f1a",
  },
  {
    id: 12,
    name: "New College of Florida",
    shortName: "New College",
    location: "Sarasota, FL",
    enrollment: "~700",
    usNewsRanking: "Liberal Arts — Emerging",
    president: "Richard Corcoran",
    presidentStatus: "confirmed",
    notableActions: [
      "Underwent significant transformation under Governor DeSantis beginning 2023",
      "New board and leadership installed; curriculum restructured",
      "Smallest institution in the SUS",
    ],
    color: "#003087",
    bgColor: "#0a0f1a",
  },
];

// ──────────────────────────────────────────
// MEETINGS
// ──────────────────────────────────────────
export const meetings: Meeting[] = [
  {
    id: 1,
    dates: "March 25–26, 2026",
    sortDate: "2026-03-25",
    location: "University of West Florida, Pensacola",
    isUpcoming: true,
    highlights: [],
  },
  {
    id: 2,
    dates: "May 14, 2026",
    sortDate: "2026-05-14",
    location: "Via Zoom (Virtual Meeting)",
    isUpcoming: true,
    highlights: [],
  },
  {
    id: 3,
    dates: "December 2025",
    sortDate: "2025-12-10",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Rescinded rule granting chair unilateral power over presidential finalists",
      "Launched SUS30 Strategic Plan through 2030",
    ],
  },
  {
    id: 4,
    dates: "November 2025",
    sortDate: "2025-11-05",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Removed Latin American/Caribbean in-state tuition scholarship (50+ countries)",
      "Updated Performance-Based Funding Model for FY2025-26",
    ],
  },
  {
    id: 5,
    dates: "July 2025",
    sortDate: "2025-07-17",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Approved CPHE as new accreditor for the SUS — replacing SACSCOC",
    ],
  },
  {
    id: 6,
    dates: "June 2025",
    sortDate: "2025-06-12",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "REJECTED Santa Ono as UF President (10-6) — historic first in 22-year BOG history",
      "Confirmed Jeanette Nuñez (FIU), Marva Johnson (FAMU), Manny Diaz Jr. interim (UWF)",
      "Unanimously approved out-of-state tuition increases (up to 10% yr1, 15% yr2)",
    ],
  },
  {
    id: 7,
    dates: "January 2026",
    sortDate: "2026-01-15",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Ashley Bell Barnett begins Term 2 (reappointed through Jan 6, 2033)",
    ],
  },
  {
    id: 8,
    dates: "January 2025",
    sortDate: "2025-01-15",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Established 2030 strategic goals: UCF Top 50, FAMU Top 100 public universities",
    ],
  },
  {
    id: 9,
    dates: "September 2024",
    sortDate: "2024-09-12",
    location: "Tallahassee, FL",
    isUpcoming: false,
    highlights: [
      "Approved 2024 System Accountability Plan",
      "Highlighted record 62% 4-year graduation rate",
      "Average bachelor's degree cost $20,300 with aid",
    ],
  },
];

// ──────────────────────────────────────────
// BOARD MEMBERS
// ──────────────────────────────────────────
export const boardMembers: BoardMember[] = [
  {
    id: 1,
    name: "Ashley Bell Barnett",
    appointedBy: "Governor Ron DeSantis",
    termStart: "Nov 2023",
    termEnd: "Jan 2033",
    isExOfficio: false,
    notes: "Winter Haven, FL. Second term began Jan 13, 2026.",
    isSubject: true,
  },
  {
    id: 2,
    name: "Eric Silagy",
    role: "Chair",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2020",
    termEnd: "2028",
    isExOfficio: false,
    notes: "Former CEO of FPL Group; led BOG through UF/Ono controversy.",
  },
  {
    id: 3,
    name: "Tim Jones",
    role: "Vice Chair",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2019",
    termEnd: "2027",
    isExOfficio: false,
  },
  {
    id: 4,
    name: "Courtney Doyle",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2022",
    termEnd: "2030",
    isExOfficio: false,
  },
  {
    id: 5,
    name: "Rahul Patel",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2021",
    termEnd: "2029",
    isExOfficio: false,
  },
  {
    id: 6,
    name: "Charles Edwards",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2022",
    termEnd: "2030",
    isExOfficio: false,
  },
  {
    id: 7,
    name: "Brian Lamb",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2019",
    termEnd: "2027",
    isExOfficio: false,
  },
  {
    id: 8,
    name: "Sydney Kitson",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2021",
    termEnd: "2029",
    isExOfficio: false,
  },
  {
    id: 9,
    name: "Ken Jones",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2022",
    termEnd: "2030",
    isExOfficio: false,
  },
  {
    id: 10,
    name: "Alan Levine",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2019",
    termEnd: "2027",
    isExOfficio: false,
  },
  {
    id: 11,
    name: "Manny Díaz",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2022",
    termEnd: "2030",
    isExOfficio: false,
    notes: "Former Florida Democratic Party Chair; appointed to BOG.",
  },
  {
    id: 12,
    name: "Dori Alvarez",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2023",
    termEnd: "2031",
    isExOfficio: false,
  },
  {
    id: 13,
    name: "Craig Mateer",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2023",
    termEnd: "2031",
    isExOfficio: false,
  },
  {
    id: 14,
    name: "Danielle Hernandez",
    appointedBy: "Governor Ron DeSantis",
    termStart: "2024",
    termEnd: "2032",
    isExOfficio: false,
  },
  {
    id: 15,
    name: "Governor Ron DeSantis",
    role: "Governor of Florida (Ex-Officio)",
    termStart: "Jan 2019",
    termEnd: "Jan 2027",
    isExOfficio: true,
    notes: "Serves as ex-officio member; typically represented by designee.",
  },
  {
    id: 16,
    name: "Commissioner of Education",
    role: "Commissioner of Education (Ex-Officio)",
    termStart: "—",
    termEnd: "—",
    isExOfficio: true,
    notes: "Serves as ex-officio member per Florida Constitution.",
  },
  {
    id: 17,
    name: "Student Advisory Council Chair",
    role: "Student Advisory Council (Ex-Officio)",
    termStart: "—",
    termEnd: "—",
    isExOfficio: true,
    notes: "Student representative; rotates annually.",
  },
];
