/**
 * Atlas Sanctum demo dataset.
 * Deterministic, presentation-layer data powering every module surface.
 */

export type Trend = "up" | "down" | "flat";

export const modules = [
  { to: "/", label: "Living Reality", icon: "Globe2" },
  { to: "/human-stories", label: "Human Stories", icon: "HeartHandshake" },
  { to: "/capital-intelligence", label: "Capital Intelligence", icon: "BarChart3" },
  { to: "/opportunity-graph", label: "Opportunity Graph", icon: "Share2" },
  { to: "/mission-control", label: "Mission Control", icon: "Target" },
  { to: "/moral-intelligence", label: "Moral Intelligence", icon: "Scale" },
  { to: "/systems-intelligence", label: "Systems Intelligence", icon: "Workflow" },
  { to: "/collective-intelligence", label: "Collective Intelligence", icon: "Users" },
  { to: "/civilization-dashboard", label: "Civilization Dashboard", icon: "Gauge" },
  { to: "/atlas-guide", label: "Atlas Guide", icon: "Sparkles" },
] as const;

export const globalMetrics = [
  { label: "Global Wellbeing", value: "72", unit: "/100", delta: "+1.2%", trend: "up" as Trend, tone: "life" },
  { label: "Population", value: "8.05B", unit: "", delta: "+0.98%", trend: "up" as Trend, tone: "social" },
  { label: "CO₂ Concentration", value: "419", unit: "ppm", delta: "+1.2", trend: "down" as Trend, tone: "critical" },
  { label: "Global Temp (vs 1850)", value: "+1.24", unit: "°C", delta: "+0.03", trend: "down" as Trend, tone: "warning" },
  { label: "Biodiversity Intactness", value: "68", unit: "%", delta: "-2%", trend: "down" as Trend, tone: "nature" },
  { label: "Renewable Energy", value: "32.7", unit: "%", delta: "+1.8%", trend: "up" as Trend, tone: "life" },
  { label: "Food Security", value: "61", unit: "%", delta: "-3%", trend: "down" as Trend, tone: "economy" },
];

export const realityIndicators = [
  { label: "Wellbeing", value: 72, tone: "life" },
  { label: "Economy", value: 68, tone: "economy" },
  { label: "Environment", value: 61, tone: "nature" },
  { label: "Education", value: 74, tone: "knowledge" },
  { label: "Health", value: 69, tone: "critical" },
  { label: "Infrastructure", value: 56, tone: "infra" },
  { label: "Governance", value: 64, tone: "social" },
  { label: "Food Security", value: 63, tone: "spirit" },
  { label: "Social Trust", value: 71, tone: "life" },
];

export const dynamicLayers = [
  "Population Density", "Traffic Flow", "Food Systems", "Weather", "Water Availability",
  "Energy", "Infrastructure", "Conflict Zones", "Migration", "Economic Activity",
  "Healthcare", "Education", "Internet Access", "Air Quality", "Biodiversity",
  "Carbon Emissions", "Community Wellbeing", "Land Use",
];

export const aiInsights = [
  {
    text: "Food insecurity increased 12% in Ward 17 due to prolonged rainfall deficits.",
    meta: "2m ago · Nairobi, Kenya",
    tone: "critical" as const,
  },
  {
    text: "Air quality improved 18% in Delhi after pollution control measures.",
    meta: "15m ago · Delhi, India",
    tone: "life" as const,
  },
  {
    text: "Migration flow from coastal regions increased 23% due to flooding events.",
    meta: "28m ago · Southeast Asia",
    tone: "warning" as const,
  },
];

export const liveFeeds = [
  { label: "Satellite Feeds", value: "24 Active" },
  { label: "Drone Feeds", value: "16 Active" },
  { label: "IoT Sensors", value: "64 Active" },
  { label: "Weather Stations", value: "18 Active" },
  { label: "Traffic Cameras", value: "2,431 Active" },
  { label: "Community Reports", value: "432 Today" },
];

export const realtimeAlerts = [
  { title: "Flood Risk", level: "Very High", place: "Bangladesh · 2.3M people at risk", ago: "3m ago", tone: "critical" as const },
  { title: "Heatwave", level: "Warning", place: "Pakistan · 5 districts affected", ago: "9m ago", tone: "warning" as const },
  { title: "Cyclone Formation", level: "Monitor", place: "Bay of Bengal · Monitor closely", ago: "11m ago", tone: "social" as const },
  { title: "Wildfire Detected", level: "Active", place: "California, USA · 1,200 ha", ago: "18m ago", tone: "critical" as const },
];

export const regions = [
  { name: "Africa", wellbeing: 68, delta: "+2.1%" },
  { name: "Asia", wellbeing: 71, delta: "+1.8%" },
  { name: "Europe", wellbeing: 78, delta: "+0.7%" },
  { name: "North America", wellbeing: 76, delta: "+1.3%" },
  { name: "South America", wellbeing: 69, delta: "+1.5%" },
  { name: "Oceania", wellbeing: 74, delta: "+1.3%" },
];

export const timeline = [
  { day: "May 12", wellbeing: 68, economy: 61, environment: 55 },
  { day: "May 13", wellbeing: 69, economy: 62, environment: 56 },
  { day: "May 14", wellbeing: 70, economy: 61, environment: 58 },
  { day: "May 15", wellbeing: 69, economy: 64, environment: 57 },
  { day: "May 16", wellbeing: 71, economy: 66, environment: 59 },
  { day: "May 17", wellbeing: 72, economy: 67, environment: 60 },
  { day: "Now", wellbeing: 72, economy: 68, environment: 61 },
];

export type Story = {
  id: string;
  name: string;
  age: number;
  badge: string;
  role: string;
  location: string;
  story: string;
  skills: string[];
  needs: string[];
  dream: string;
  achievements: string[];
  connections: number;
  opportunities: string[];
  recommendations: number;
  tone: "life" | "social" | "knowledge";
};

export const stories: Story[] = [
  {
    id: "sarah-wanjiku",
    name: "Sarah Wanjiku",
    age: 28,
    badge: "Featured Story",
    role: "Tailor · Entrepreneur · Creative",
    location: "Single mother of 2 from Kibera, Nairobi",
    story:
      "After my husband passed away, I had to find a way to provide for my children. I taught myself sewing using YouTube videos. Now I make school uniforms and dresses for my neighbors.",
    skills: ["Sewing", "Design", "Pattern Making"],
    needs: ["Capital $350", "Industrial Machine", "Business Training"],
    dream: "To grow my fashion business and employ other young mothers in my community.",
    achievements: ["5+ years sewing", "20+ happy clients", "Trained 3 girls"],
    connections: 12,
    opportunities: ["Women Enterprise Fund", "Tailoring Training Program"],
    recommendations: 3,
    tone: "knowledge",
  },
  {
    id: "michael-otieno",
    name: "Michael Otieno",
    age: 34,
    badge: "New Story",
    role: "Mechanic · Problem Solver · Hardworking",
    location: "Father of 6 from Mathare, Nairobi",
    story:
      "I started repairing bicycles as a boy. Today I fix motorcycles and small engines. I work hard every day to make sure my children go to school and have enough to eat.",
    skills: ["Motorcycle Repair", "Engine Diagnostics", "Welding"],
    needs: ["Advanced Tools", "Shop Space", "Working Capital"],
    dream: "To open my own repair shop and give my children a better future.",
    achievements: ["Supports 6 children", "200+ repairs/month", "Trusted in community"],
    connections: 18,
    opportunities: ["Tool Grant Program", "Small Business Loan"],
    recommendations: 2,
    tone: "social",
  },
  {
    id: "grace-achieng",
    name: "Grace Achieng",
    age: 26,
    badge: "Rising Leader",
    role: "Teacher · Mentor · Leader",
    location: "Teacher from Korogocho, Nairobi",
    story:
      "I believe education can break the cycle of poverty. I teach in a public school, but many children need extra help. I started free tutoring sessions for kids after school.",
    skills: ["Teaching", "Curriculum Design", "Mentoring"],
    needs: ["Books & Materials", "Learning Space", "Computers"],
    dream: "To build a learning center where every child can discover their potential.",
    achievements: ["Helped 60+ students", "15 improved grades", "Community respect"],
    connections: 25,
    opportunities: ["Education Support Fund", "Learning Center Grant"],
    recommendations: 4,
    tone: "life",
  },
];

export const storyStats = [
  { value: "1,248", label: "Stories Shared" },
  { value: "3,456", label: "Lives Impacted" },
  { value: "782", label: "Dreams in Progress" },
  { value: "156", label: "Stories Completed" },
];

export const storyCategories = [
  { name: "Entrepreneurs", value: 38, tone: "critical" },
  { name: "Students", value: 22, tone: "infra" },
  { name: "Workers", value: 18, tone: "life" },
  { name: "Parents", value: 12, tone: "knowledge" },
  { name: "Leaders", value: 6, tone: "economy" },
  { name: "Other", value: 4, tone: "social" },
];

export const matchmaking = [
  { kind: "Funding Opportunity Match", person: "Sarah Wanjiku", offer: "Women Enterprise Fund", detail: "Up to $500 grant available", match: 95 },
  { kind: "Mentorship Opportunity", person: "Michael Otieno", offer: "Experienced mechanic", detail: "mentor in your area", match: 92 },
  { kind: "Resource Opportunity", person: "Grace Achieng", offer: "Book donation program", detail: "500+ books available", match: 98 },
  { kind: "Collaboration Opportunity", person: "All 3 candidates", offer: "Community Center Project", detail: "Work together for bigger impact", match: 90 },
];

export const capitals = [
  { id: "human", name: "Human Capital", score: 82, tone: "life", insight: "Human Capital is our strongest asset. Invest in retention and skill development." },
  { id: "knowledge", name: "Knowledge Capital", score: 76, tone: "knowledge", insight: "Education access is improving, but a practical skills gap remains." },
  { id: "economic", name: "Economic Capital", score: 71, tone: "economy", insight: "Economic diversification will reduce vulnerability and increase resilience." },
  { id: "natural", name: "Natural Capital", score: 78, tone: "nature", insight: "Forest cover declining 2.1% annually. Urgent restoration needed." },
  { id: "infrastructure", name: "Infrastructure Capital", score: 69, tone: "infra", insight: "Transport infrastructure is a key bottleneck for economic growth." },
  { id: "social", name: "Social Capital", score: 75, tone: "social", insight: "Social trust is high — leverage for community-driven initiatives." },
  { id: "spiritual", name: "Spiritual & Cultural Capital", score: 73, tone: "spirit", insight: "Cultural heritage is our identity. Preserve while embracing innovation." },
];

export const capitalHeadline = [
  { label: "Overall Capital Score", value: "75/100", note: "Good" },
  { label: "Total Assets Mapped", value: "128,450", note: "+8.4%" },
  { label: "Risk Exposure", value: "Medium", note: "-6%" },
  { label: "Growth Potential", value: "High", note: "+12%" },
  { label: "Hidden Opportunities", value: "247", note: "+15%" },
  { label: "Resilience Index", value: "72/100", note: "+5%" },
];

export const humanCapitalBreakdown = [
  { label: "Healthcare Workers", value: 12540, pct: 42 },
  { label: "Teachers", value: 18230, pct: 61 },
  { label: "Engineers", value: 4890, pct: 22 },
  { label: "Farmers", value: 28410, pct: 74 },
  { label: "Students", value: 156300, pct: 96 },
  { label: "Entrepreneurs", value: 9120, pct: 34 },
  { label: "Artists", value: 3210, pct: 18 },
  { label: "Craftsmen", value: 7980, pct: 30 },
];

export const capitalRisk = [
  { name: "Human", risk: "Medium", growth: "High" },
  { name: "Knowledge", risk: "Low", growth: "High" },
  { name: "Economic", risk: "Medium", growth: "Medium" },
  { name: "Natural", risk: "High", growth: "High" },
  { name: "Infrastructure", risk: "Medium", growth: "Medium" },
  { name: "Social", risk: "Low", growth: "High" },
  { name: "Spiritual & Cultural", risk: "Low", growth: "Medium" },
];

export const capitalConnections = [
  { pair: "Human ↔ Social", strength: 0.82 },
  { pair: "Knowledge ↔ Economic", strength: 0.78 },
  { pair: "Natural ↔ Economic", strength: 0.74 },
  { pair: "Social ↔ Spiritual", strength: 0.71 },
  { pair: "Infrastructure ↔ Economic", strength: 0.69 },
];

export const capitalEvolution = [
  { year: "2020", human: 68, knowledge: 62, economic: 58, natural: 71, infrastructure: 55, social: 66, spiritual: 68 },
  { year: "2021", human: 71, knowledge: 66, economic: 61, natural: 72, infrastructure: 58, social: 68, spiritual: 69 },
  { year: "2022", human: 74, knowledge: 69, economic: 65, natural: 74, infrastructure: 62, social: 70, spiritual: 70 },
  { year: "2023", human: 79, knowledge: 73, economic: 68, natural: 76, infrastructure: 66, social: 73, spiritual: 72 },
  { year: "2024", human: 82, knowledge: 76, economic: 71, natural: 78, infrastructure: 69, social: 75, spiritual: 73 },
];

export const graphHeadline = [
  { label: "Total Opportunities", value: "1,248", note: "+18%" },
  { label: "Strong Connections", value: "362", note: "+24%" },
  { label: "Potential Impact", value: "High", note: "+19%" },
  { label: "Resources Connected", value: "5,842", note: "" },
  { label: "Funding Gaps", value: "$2.4M", note: "" },
  { label: "People Involved", value: "12,450", note: "+16%" },
];

export const graphNodes = [
  { id: "kitchens", label: "Unused School Kitchens", count: 12, tone: "life", x: 48, y: 12 },
  { id: "donors", label: "Food Donors", tone: "nature", x: 20, y: 20 },
  { id: "transport", label: "Transport Providers", tone: "social", x: 76, y: 18 },
  { id: "cold", label: "Cold Storage Facilities", tone: "nature", x: 10, y: 36 },
  { id: "feeding", label: "School Feeding Program", count: 8, tone: "life", x: 48, y: 36 },
  { id: "logistics", label: "Youth Logistics Groups", count: 16, tone: "social", x: 76, y: 36 },
  { id: "farmers", label: "Local Farmers", tone: "life", x: 28, y: 40 },
  { id: "irrigation", label: "Irrigation Projects", tone: "nature", x: 8, y: 56 },
  { id: "coops", label: "Women's Cooperatives", count: 27, tone: "knowledge", x: 24, y: 62 },
  { id: "nutrition", label: "Improved Nutrition", count: 15, tone: "economy", x: 48, y: 60 },
  { id: "education", label: "Better Education", count: 23, tone: "knowledge", x: 74, y: 62 },
  { id: "growth", label: "Economic Growth", tone: "spirit", x: 48, y: 84 },
  { id: "market", label: "Market Access", tone: "life", x: 22, y: 84 },
  { id: "digital", label: "Digital Platforms", tone: "social", x: 74, y: 84 },
];

export const graphEdges: [string, string][] = [
  ["donors", "kitchens"], ["cold", "farmers"], ["farmers", "feeding"], ["kitchens", "feeding"],
  ["feeding", "logistics"], ["transport", "logistics"], ["feeding", "nutrition"], ["coops", "nutrition"],
  ["irrigation", "farmers"], ["logistics", "education"], ["nutrition", "education"], ["nutrition", "growth"],
  ["market", "growth"], ["digital", "growth"], ["coops", "market"], ["education", "digital"],
];

export const graphIntelligence = [
  { label: "Missing Connections", note: "High impact links not yet connected", value: "48" },
  { label: "Unused Assets", note: "Resources with low or no utilization", value: "76" },
  { label: "Duplicate Efforts", note: "Similar initiatives in the same area", value: "23" },
  { label: "Potential Partnerships", note: "Organizations that should connect", value: "35" },
  { label: "Funding Gaps", note: "Estimated funding needed", value: "$2.4M" },
];

export const impactPathway = [
  { step: "Unused School Kitchens", note: "12 available", tone: "life" },
  { step: "School Feeding Program", note: "8 schools", tone: "life" },
  { step: "Local Farmers", note: "34 suppliers", tone: "nature" },
  { step: "Youth Logistics Groups", note: "16 active", tone: "social" },
  { step: "Women's Cooperatives", note: "27 groups", tone: "knowledge" },
  { step: "Improved Nutrition", note: "+42% nutrition", tone: "economy" },
  { step: "Better Education", note: "+28% attendance", tone: "knowledge" },
  { step: "Economic Growth", note: "+$1.2M / year", tone: "spirit" },
];

export const topOpportunities = [
  { name: "Connect farmers to school feeding", level: "Very High", impact: 96 },
  { name: "Expand youth logistics network", level: "High", impact: 89 },
  { name: "Link co-ops to microfinance", level: "High", impact: 87 },
  { name: "Digital marketplace for local produce", level: "Medium", impact: 74 },
  { name: "Solar cold storage for smallholders", level: "Medium", impact: 71 },
];

export const missions = [
  { id: "restore-river", name: "Restore River", progress: 78, tone: "social" },
  { id: "school-dropout", name: "Reduce School Dropout", progress: 62, tone: "knowledge" },
  { id: "community-health", name: "Community Health", progress: 84, tone: "critical" },
  { id: "youth-employment", name: "Youth Employment", progress: 71, tone: "knowledge" },
  { id: "tree-restoration", name: "Tree Restoration", progress: 65, tone: "life" },
  { id: "women-entrepreneurship", name: "Women's Entrepreneurship", progress: 68, tone: "spirit" },
  { id: "clean-energy", name: "Clean Energy", progress: 59, tone: "economy" },
];

export const activeMission = {
  title: "Mission: Restore River Mathare",
  status: "In Progress",
  goal:
    "Restore 10km of Mathare River by removing waste, replanting riparian vegetation, and improving community waste systems.",
  stats: [
    { label: "Progress", value: "78%" },
    { label: "Impact Target", value: "120,000", note: "Lives" },
    { label: "Timeline", value: "8 / 12", note: "Months" },
    { label: "Budget", value: "$420,000", note: "of $540,000" },
    { label: "Volunteers", value: "256", note: "Active" },
  ],
  milestones: [
    { name: "Baseline Assessment", status: "Completed", progress: 100, due: "Jan 10" },
    { name: "Community Mobilization", status: "Completed", progress: 100, due: "Feb 02" },
    { name: "Waste Cleanup (Phase 1)", status: "Completed", progress: 100, due: "Mar 15" },
    { name: "Waste Cleanup (Phase 2)", status: "In Progress", progress: 70, due: "May 30" },
    { name: "Riparian Tree Planting", status: "In Progress", progress: 40, due: "Jul 15" },
    { name: "Waste Management System", status: "Pending", progress: 0, due: "Aug 30" },
    { name: "Water Quality Monitoring", status: "Pending", progress: 0, due: "Sep 30" },
    { name: "Community Conservation Education", status: "Pending", progress: 0, due: "Oct 30" },
  ],
  activity: [
    { text: "125 volunteers joined cleanup drive", ago: "2h ago" },
    { text: "3,200 saplings planted on 2km stretch", ago: "5h ago" },
    { text: "Water quality improved by 18% in monitored points", ago: "1d ago" },
    { text: "New partner onboarded: Green Africa Foundation", ago: "2d ago" },
  ],
  recommendations: [
    { text: "Increase community education sessions in high-risk dumping areas.", tag: "High Impact" },
    { text: "Partner with local schools for youth river ambassadors program.", tag: "High Impact" },
    { text: "Consider additional waste traps near Kariobangi informal settlement.", tag: "Medium Impact" },
  ],
};

export const missionPortfolio = [
  { name: "On Track", value: 18, tone: "life" },
  { name: "At Risk", value: 3, tone: "warning" },
  { name: "Delayed", value: 3, tone: "critical" },
  { name: "Completed", value: 12, tone: "infra" },
];

export const missionImpact = [
  { value: "2.4M+", label: "Lives Impacted" },
  { value: "1.8M+", label: "Trees Planted" },
  { value: "450+", label: "Jobs Created" },
  { value: "320K+", label: "People Educated" },
];

export const ethicalCriteria = [
  { name: "Economic Benefit", note: "Contribution to local and national economy", score: 4.2, impact: "High Positive", tone: "life" },
  { name: "Ecological Cost", note: "Impact on environment and ecosystems", score: 2.1, impact: "Moderate Negative", tone: "critical" },
  { name: "Human Dignity", note: "Upholds rights, health, and working conditions", score: 4.8, impact: "Very Positive", tone: "life" },
  { name: "Future Generations", note: "Long-term sustainability and legacy", score: 4.0, impact: "High Positive", tone: "life" },
  { name: "Fairness & Inclusion", note: "Equitable distribution of benefits and burdens", score: 4.7, impact: "Very Positive", tone: "life" },
  { name: "Community Consent", note: "Free, Prior and Informed Consent (FPIC)", score: 4.1, impact: "Positive", tone: "social" },
];

export const ethicalFramework = [
  "Universal Human Dignity", "Stewardship of Creation", "Justice & Fairness",
  "Intergenerational Equity", "Community Participation", "Transparency & Accountability",
];

export const safeguards = [
  "Implement advanced waste treatment systems",
  "Use renewable energy sources (solar + grid)",
  "Regular environmental monitoring and reporting",
  "Community oversight committee established",
  "Skills training priority for local youth and women",
  "Health impact assessments every 6 months",
];

export const riskMitigation = [
  { name: "Environmental Risk", level: "Medium" },
  { name: "Social Risk", level: "Low" },
  { name: "Economic Risk", level: "Low" },
  { name: "Governance Risk", level: "Medium" },
  { name: "Health Risk", level: "Low" },
];

export const aiReasoning = [
  { title: "Strong economic and social benefits", note: "Significant job creation, skills development, and local economic stimulation will improve livelihoods.", tone: "life" },
  { title: "Environmental concerns are manageable", note: "Potential pollution and resource use risks can be mitigated through clean technology and strict environmental standards.", tone: "warning" },
  { title: "Dignity and rights upheld", note: "Commitment to fair wages, safe working conditions, and worker rights strongly aligns with human dignity principles.", tone: "economy" },
  { title: "Positive long-term legacy", note: "Investment in green infrastructure and community development supports future generations.", tone: "life" },
  { title: "Community engaged and supportive", note: "78% of community members support the project with conditions addressed in safeguards.", tone: "economy" },
];

export const moralAlternatives = [
  { name: "Option 1 (Recommended)", detail: "Build with Safeguards", score: 75, impact: "High Impact" },
  { name: "Option 2", detail: "Smaller Scale Facility", score: 62, impact: "Medium Impact" },
  { name: "Option 3", detail: "Alternative Location", score: 68, impact: "Medium Impact" },
];

export const systemHeadline = [
  { label: "System Health", value: "68/100", note: "Moderate" },
  { label: "Interconnectedness", value: "74/100", note: "Strong" },
  { label: "Resilience Score", value: "63/100", note: "Moderate" },
  { label: "Fragility Points", value: "12", note: "High Risk" },
  { label: "Leverage Points", value: "8", note: "High Impact" },
  { label: "Systems Stability", value: "61%", note: "Stable" },
];

export const systemNodes = [
  { id: "food", label: "Food Security", tone: "life", x: 50, y: 8 },
  { id: "education", label: "Education Access", tone: "infra", x: 50, y: 22 },
  { id: "health", label: "Health Outcomes", tone: "life", x: 50, y: 36 },
  { id: "employment", label: "Employment", tone: "economy", x: 50, y: 50 },
  { id: "crime", label: "Crime & Violence", tone: "critical", x: 50, y: 64 },
  { id: "migration", label: "Migration", tone: "knowledge", x: 50, y: 78 },
  { id: "governance", label: "Governance", tone: "infra", x: 50, y: 92 },
  { id: "climate", label: "Climate & Environment", tone: "nature", x: 12, y: 18 },
  { id: "infrastructure", label: "Infrastructure", tone: "social", x: 10, y: 40 },
  { id: "technology", label: "Technology", tone: "economy", x: 10, y: 62 },
  { id: "socialcapital", label: "Social Capital", tone: "social", x: 12, y: 82 },
  { id: "population", label: "Population Dynamics", tone: "social", x: 88, y: 18 },
  { id: "culture", label: "Cultural Norms", tone: "knowledge", x: 90, y: 40 },
  { id: "policy", label: "Policy & Regulation", tone: "infra", x: 90, y: 62 },
  { id: "economy", label: "Economic Conditions", tone: "economy", x: 88, y: 82 },
];

export const systemEdges: [string, string][] = [
  ["food", "health"], ["education", "employment"], ["health", "employment"], ["employment", "crime"],
  ["crime", "migration"], ["migration", "governance"], ["climate", "food"], ["infrastructure", "health"],
  ["technology", "employment"], ["socialcapital", "governance"], ["population", "food"], ["culture", "education"],
  ["policy", "governance"], ["economy", "employment"], ["governance", "policy"], ["education", "health"],
];

export const forecastImpact = [
  { indicator: "Education Access", baseline: 68, scenario: 82, change: "+20%" },
  { indicator: "Health Outcomes", baseline: 61, scenario: 74, change: "+13%" },
  { indicator: "Employment Rate", baseline: 56, scenario: 67, change: "+11%" },
  { indicator: "Crime Rate", baseline: 48, scenario: 38, change: "-10%" },
  { indicator: "Migration Outflow", baseline: 22, scenario: 16, change: "-6%" },
  { indicator: "Governance Score", baseline: 52, scenario: 61, change: "+9%" },
  { indicator: "Economic Resilience", baseline: 57, scenario: 71, change: "+14%" },
];

export const leveragePoints = [
  { name: "Education Access & Quality", impact: "High", weight: 92 },
  { name: "Employment & Livelihoods", impact: "High", weight: 86 },
  { name: "Governance & Institutions", impact: "Medium", weight: 71 },
  { name: "Infrastructure & Services", impact: "Medium", weight: 64 },
  { name: "Social Capital & Trust", impact: "Medium", weight: 58 },
];

export const feedbackLoops = [
  { name: "Reinforcing Loop (R1)", chain: "Education → Employment → Income → Education", note: "Strengthens over time", tone: "life" },
  { name: "Balancing Loop (B2)", chain: "Crime → Investment → Employment → Crime", note: "Stabilizes the system", tone: "spirit" },
  { name: "Reinforcing Loop (R3)", chain: "Social Trust → Cooperation → Development → Trust", note: "Strengthens over time", tone: "social" },
];

export const perspectives = [
  { id: "citizen", label: "Citizen", items: ["Find Opportunities near you", "Volunteer in your community", "Access Resources & Services"] },
  { id: "leader", label: "Leader", items: ["Mobilize local coalitions", "Track ward-level progress", "Surface community priorities"] },
  { id: "ngo", label: "NGO", items: ["Avoid duplicate programs", "Find co-funding partners", "Report verified impact"] },
  { id: "government", label: "Government", items: ["Allocate budget by evidence", "Monitor policy outcomes", "Coordinate across agencies"] },
  { id: "investor", label: "Investor", items: ["Screen high-impact ventures", "Assess risk and resilience", "Measure blended returns"] },
];

export const flourishing = [
  { label: "Human Flourishing", value: 91, tone: "knowledge" },
  { label: "Community Trust", value: 84, tone: "social" },
  { label: "Ecological Health", value: 78, tone: "life" },
  { label: "Economic Inclusion", value: 81, tone: "economy" },
  { label: "Educational Access", value: 87, tone: "infra" },
  { label: "Health Resilience", value: 79, tone: "critical" },
  { label: "Future Readiness", value: 88, tone: "spirit" },
];

export const guideAnswer = {
  question: "Why are young people leaving this county?",
  intro: "After analyzing 128 signals, here are the key factors:",
  factors: [
    "Limited employment opportunities",
    "Lack of affordable housing",
    "Transportation challenges",
    "Skills mismatch with market needs",
    "Climate stress affecting livelihoods",
  ],
  followUp: "Would you like to explore recommended interventions?",
};

export const guidePrompts = [
  "Why are young people leaving this county?",
  "Which mission has the highest impact per dollar?",
  "Where are our biggest funding gaps this quarter?",
  "What happens if we increase education funding by 20%?",
  "Which unused assets could feed 5,000 children?",
];

export const philosophy = [
  "From Data to Understanding",
  "From Problems to Possibilities",
  "From Siloed to Connected",
  "From Aid to Agency",
  "From Short-term to Generational",
];

export const pillars = [
  { name: "Moral AI Protocols", note: "Ethical by Design" },
  { name: "DAO Governance", note: "Power to the People" },
  { name: "Regenerative Economy", note: "Value That Heals" },
  { name: "Open Standards", note: "Interoperable by Default" },
  { name: "Global Network", note: "Local Roots, Global Impact" },
];
