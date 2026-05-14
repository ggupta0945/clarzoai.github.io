export type Company = {
  id: string;
  shortName: string;
  fullName: string;
  bseCode: string;
  price: string;
  change: string;
  changePositive: boolean;
  marketCap: string;
  about: string;
  facts: { label: string; value: string }[];
  strengths: string[];
  risks: string[];
  gptSuggestions: string[];
  gptAnswers?: { q: string; a: string; source: string }[];
};

export type Sector = {
  id: string;
  emoji: string;
  name: string;
  description: string;
  views: string;
  companiesCount: number;
  updated: string;
  trending?: boolean;
  overview?: {
    summary: string;
    tailwinds: string[];
    headwinds: string[];
  };
  companies: Company[];
};

export const TCS_GPT_ANSWERS = [
  {
    q: "What was TCS revenue growth last quarter?",
    a: "TCS reported Q3 FY26 revenue of ₹64,259 Cr, growing 5.2% YoY in constant currency terms. The growth was led by BFSI (+7.1%) and Life Sciences (+8.3%) verticals. Management maintained FY26 guidance of 6-8% CC growth.",
    source: "📄 Source: TCS Q3 FY26 Earnings Report, Jan 2026",
  },
  {
    q: "How does TCS compare to Infosys?",
    a: "TCS vs Infosys — key differences:\n\n• Revenue: TCS (₹2.41L Cr) is ~49% larger than Infosys (₹1.62L Cr)\n• Margins: TCS has higher EBIT margins (~26%) vs Infosys (~21%)\n• Growth: Infosys digital revenue growing faster at 32% vs TCS 28%\n• Valuation: TCS trades at 32x PE vs Infosys at 28x — making Infosys relatively cheaper\n• Dividend: Infosys yields 2.3% vs TCS 1.2%\n\nBoth are strong — TCS for stability, Infosys for growth-at-value.",
    source: "📄 Source: FY26 Annual Reports, Screener.in",
  },
  {
    q: "What are the risks of investing in TCS?",
    a: "Key risks for TCS investors:\n\n1. Premium valuation (32x PE) — limited margin of safety if growth disappoints\n2. BFSI sector dependence (~33% of revenue) — banking slowdown in US/Europe could hurt\n3. Attrition at 12.5% — while improving, talent costs remain elevated\n4. Currency hedging — strong rupee would reduce reported earnings\n5. Generative AI disruption — could reduce demand for traditional IT services\n\nHowever, TCS's diversified client base (1,200+ clients) and strong deal pipeline provide resilience.",
    source: "📄 Source: TCS FY26 Annual Report, Investor Presentation",
  },
  {
    q: "What is TCS dividend history?",
    a: "TCS dividend track record (last 5 years):\n\n• FY26: ₹115/share (including ₹73 special dividend)\n• FY25: ₹91/share\n• FY24: ₹75/share\n• FY23: ₹115/share (including special)\n• FY22: ₹43/share\n\nTCS has a consistent dividend policy with ~50-80% payout ratio. Additionally, TCS has conducted multiple buybacks totaling ₹72,000 Cr since 2017.",
    source: "📄 Source: TCS Annual Reports, BSE Filings",
  },
];

const IT_OVERVIEW = {
  summary:
    "India's IT sector remains a global powerhouse, contributing ~8% to GDP. Strong dollar earnings, digital adoption tailwinds, and AI integration are key growth drivers.",
  tailwinds: [
    "Strong USD revenue hedge against rupee depreciation",
    "High margins with asset-light business models",
    "Growing demand for AI/ML and cloud services",
    "Consistent dividend payers",
  ],
  headwinds: [
    "Slowing growth in traditional services",
    "Visa policy risks in US/Europe",
    "High attrition rates increasing costs",
    "Valuation premiums make entry timing important",
  ],
};

export const SECTORS: Sector[] = [
  {
    id: "it",
    emoji: "💻",
    name: "Information Technology",
    description:
      "Companies providing IT services, software products, cloud computing, and digital transformation solutions.",
    views: "4.2k views",
    companiesCount: 12,
    updated: "Updated Apr 10, 2026",
    trending: true,
    overview: IT_OVERVIEW,
    companies: [
      {
        id: "tcs",
        shortName: "TCS",
        fullName: "Tata Consultancy Services",
        bseCode: "BSE:532540",
        price: "₹4,180",
        change: "+1.8%",
        changePositive: true,
        marketCap: "₹15.2L Cr",
        about:
          "India's largest IT services company. Part of the Tata Group. Serves clients across banking, retail, manufacturing, and telecom globally.",
        facts: [
          { label: "Founded", value: "1968" },
          { label: "Employees", value: "614,000+" },
          { label: "HQ", value: "Mumbai" },
          { label: "Sector", value: "IT Services" },
          { label: "P/E Ratio", value: "32.4" },
          { label: "ROE", value: "48.2%" },
          { label: "Dividend Yield", value: "1.2%" },
          { label: "Revenue", value: "₹2.41L Cr" },
        ],
        strengths: [
          "Market leader with diversified client base",
          "Strong order book and deal pipeline",
          "Consistent dividend payouts",
          "Low debt, high cash generation",
        ],
        risks: [
          "Premium valuation limits upside",
          "Slower growth vs mid-cap IT peers",
          "Dependence on BFSI sector",
          "Attrition pressure on margins",
        ],
        gptSuggestions: [
          "What was TCS revenue growth last quarter?",
          "How does TCS compare to Infosys?",
          "What are the risks of investing in TCS?",
          "What is TCS dividend history?",
        ],
        gptAnswers: TCS_GPT_ANSWERS,
      },
      {
        id: "infosys",
        shortName: "Infosys",
        fullName: "Infosys Limited",
        bseCode: "BSE:500209",
        price: "₹1,890",
        change: "+2.1%",
        changePositive: true,
        marketCap: "₹7.8L Cr",
        about:
          "Second largest Indian IT company. Known for strong corporate governance and digital transformation capabilities.",
        facts: [
          { label: "Founded", value: "1981" },
          { label: "Employees", value: "317,000+" },
          { label: "HQ", value: "Bengaluru" },
          { label: "Sector", value: "IT Services" },
          { label: "P/E Ratio", value: "28.6" },
          { label: "ROE", value: "32.1%" },
          { label: "Dividend Yield", value: "2.3%" },
          { label: "Revenue", value: "₹1.62L Cr" },
        ],
        strengths: [
          "Strong digital revenue growth",
          "Excellent corporate governance track record",
          "Higher dividend yield than peers",
          "AI and automation investments paying off",
        ],
        risks: [
          "Management transitions can create uncertainty",
          "Lower margins than TCS",
          "Client concentration risks",
          "Growth guidance often conservative",
        ],
        gptSuggestions: [
          "What is Infosys guidance for FY27?",
          "How is Infosys positioned in AI?",
          "Infosys vs TCS — which is better?",
          "What are Infosys quarterly results?",
        ],
      },
      {
        id: "wipro",
        shortName: "Wipro",
        fullName: "Wipro Limited",
        bseCode: "BSE:507685",
        price: "₹580",
        change: "-0.4%",
        changePositive: false,
        marketCap: "₹3.0L Cr",
        about:
          "Third largest Indian IT company. Diversified across IT services, consulting, and business process services.",
        facts: [
          { label: "Founded", value: "1945" },
          { label: "Employees", value: "234,000+" },
          { label: "HQ", value: "Bengaluru" },
          { label: "Sector", value: "IT Services" },
          { label: "P/E Ratio", value: "24.1" },
          { label: "ROE", value: "15.8%" },
          { label: "Dividend Yield", value: "1.5%" },
          { label: "Revenue", value: "₹90,500 Cr" },
        ],
        strengths: [
          "Attractive valuation vs peers",
          "Turnaround under new leadership",
          "Strong consulting capabilities",
          "Growing in cloud and cybersecurity",
        ],
        risks: [
          "Slower organic growth than peers",
          "Multiple restructurings create uncertainty",
          "Lower margins than TCS/Infosys",
          "Market share loss in key verticals",
        ],
        gptSuggestions: [
          "Is Wipro a turnaround story?",
          "Wipro margins vs industry average?",
          "What is Wipro's cloud strategy?",
          "Latest Wipro quarterly results?",
        ],
      },
    ],
  },
  {
    id: "banking",
    emoji: "🏦",
    name: "Banking & Financial Services",
    description:
      "Banks, NBFCs, and financial institutions offering lending, deposits, insurance, and wealth management services.",
    views: "5.1k views",
    companiesCount: 15,
    updated: "Updated Apr 12, 2026",
    trending: true,
    companies: [
      {
        id: "hdfcbank",
        shortName: "HDFC Bank",
        fullName: "HDFC Bank Limited",
        bseCode: "BSE:500180",
        price: "₹1,720",
        change: "+0.9%",
        changePositive: true,
        marketCap: "₹13.1L Cr",
        about:
          "India's largest private sector bank by market cap. Known for consistent growth, strong asset quality, and technology-driven banking.",
        facts: [
          { label: "Founded", value: "1994" },
          { label: "Employees", value: "213,000+" },
          { label: "HQ", value: "Mumbai" },
          { label: "Sector", value: "Private Banking" },
          { label: "P/E Ratio", value: "20.2" },
          { label: "ROE", value: "16.8%" },
          { label: "Dividend Yield", value: "1.1%" },
          { label: "Revenue", value: "₹2.85L Cr" },
        ],
        strengths: [
          "Best-in-class asset quality (low NPAs)",
          "Consistent 18-20% profit growth track record",
          "Largest branch network among private banks",
          "Strong deposit franchise and CASA ratio",
        ],
        risks: [
          "Post-merger integration with HDFC Ltd ongoing",
          "Premium valuation leaves less room for error",
          "Slowing growth in unsecured retail lending",
          "Increasing competition from fintechs",
        ],
        gptSuggestions: [
          "How is HDFC Bank post-merger integration going?",
          "HDFC Bank vs ICICI Bank comparison?",
          "What are HDFC Bank NPA trends?",
          "HDFC Bank dividend yield history?",
        ],
      },
      {
        id: "icicibank",
        shortName: "ICICI Bank",
        fullName: "ICICI Bank Limited",
        bseCode: "BSE:532174",
        price: "₹1,280",
        change: "+1.5%",
        changePositive: true,
        marketCap: "₹9.0L Cr",
        about:
          "India's second largest private bank. Has undergone a remarkable turnaround under current management with focus on retail banking and digital.",
        facts: [
          { label: "Founded", value: "1994" },
          { label: "Employees", value: "145,000+" },
          { label: "HQ", value: "Mumbai" },
          { label: "Sector", value: "Private Banking" },
          { label: "P/E Ratio", value: "18.5" },
          { label: "ROE", value: "18.2%" },
          { label: "Dividend Yield", value: "0.8%" },
          { label: "Revenue", value: "₹2.10L Cr" },
        ],
        strengths: [
          "Strongest ROE improvement in the sector",
          "Aggressive digital banking initiatives",
          "Well-diversified loan book",
          "Clean-up of legacy stressed assets complete",
        ],
        risks: [
          "Retail loan growth may slow with rate hikes",
          "Insurance subsidiary performance variable",
          "Exposure to stressed sectors historically",
          "Valuation catching up to peers",
        ],
        gptSuggestions: [
          "ICICI Bank ROE trend last 5 years?",
          "How is ICICI Bank's digital strategy?",
          "ICICI Bank asset quality update?",
          "Is ICICI Bank overvalued?",
        ],
      },
      {
        id: "sbi",
        shortName: "SBI",
        fullName: "State Bank of India",
        bseCode: "BSE:500112",
        price: "₹820",
        change: "+0.6%",
        changePositive: true,
        marketCap: "₹7.3L Cr",
        about:
          "India's largest bank by total assets. Government-owned PSU bank with the most extensive branch network in the country.",
        facts: [
          { label: "Founded", value: "1955" },
          { label: "Employees", value: "230,000+" },
          { label: "HQ", value: "Mumbai" },
          { label: "Sector", value: "Public Banking" },
          { label: "P/E Ratio", value: "10.8" },
          { label: "ROE", value: "20.1%" },
          { label: "Dividend Yield", value: "1.8%" },
          { label: "Revenue", value: "₹3.50L Cr" },
        ],
        strengths: [
          "Cheapest valuation among large banks",
          "Highest ROE among PSU banks",
          "Massive branch and digital reach",
          "Subsidiary value (SBI Life, SBI Cards) unlocking",
        ],
        risks: [
          "Government ownership limits agility",
          "Historically prone to PSU lending mandates",
          "Lower margins than private peers",
          "NPAs higher than private banks",
        ],
        gptSuggestions: [
          "SBI vs HDFC Bank — which is cheaper?",
          "SBI subsidiary valuations?",
          "SBI NPA trend last 3 years?",
          "Is SBI a good dividend stock?",
        ],
      },
    ],
  },
  {
    id: "pharma",
    emoji: "💊",
    name: "Pharmaceuticals & Healthcare",
    description:
      "Pharmaceutical companies, hospitals, diagnostics, and healthcare technology providers serving domestic and global markets.",
    views: "2.8k views",
    companiesCount: 10,
    updated: "Updated Apr 8, 2026",
    companies: [
      {
        id: "sunpharma",
        shortName: "Sun Pharma",
        fullName: "Sun Pharmaceutical Industries",
        bseCode: "BSE:524715",
        price: "₹1,680",
        change: "+1.2%",
        changePositive: true,
        marketCap: "₹4.0L Cr",
        about:
          "India's largest pharmaceutical company and the world's fourth largest specialty generics company. Strong presence in US, India, and emerging markets.",
        facts: [
          { label: "Founded", value: "1983" },
          { label: "Employees", value: "41,000+" },
          { label: "HQ", value: "Mumbai" },
          { label: "Sector", value: "Pharmaceuticals" },
          { label: "P/E Ratio", value: "35.2" },
          { label: "ROE", value: "14.5%" },
          { label: "Dividend Yield", value: "0.8%" },
          { label: "Revenue", value: "₹48,500 Cr" },
        ],
        strengths: [
          "Market leader in Indian pharma",
          "Specialty portfolio (Ilumya, Cequa) gaining traction",
          "Strong cash flows and low debt",
          "Diversified across geographies",
        ],
        risks: [
          "US generic pricing pressure ongoing",
          "USFDA compliance remains a risk",
          "Promoter governance concerns historically",
          "High PE relative to growth rate",
        ],
        gptSuggestions: [
          "Sun Pharma specialty revenue growth?",
          "USFDA inspection status for Sun Pharma?",
          "Sun Pharma vs Dr Reddy's comparison?",
          "What is Sun Pharma's US pipeline?",
        ],
      },
    ],
  },
  {
    id: "ev",
    emoji: "⚡",
    name: "Electric Vehicles & Clean Energy",
    description:
      "Companies manufacturing EVs, EV components, batteries, solar, wind, and clean energy infrastructure.",
    views: "3.5k views",
    companiesCount: 8,
    updated: "Updated Apr 11, 2026",
    trending: true,
    companies: [],
  },
  {
    id: "fmcg",
    emoji: "🛒",
    name: "FMCG & Consumer Goods",
    description:
      "Companies producing everyday consumer products — food, beverages, personal care, household goods.",
    views: "2.1k views",
    companiesCount: 10,
    updated: "Updated Apr 5, 2026",
    companies: [],
  },
  {
    id: "realestate",
    emoji: "🏗️",
    name: "Real Estate & Infrastructure",
    description:
      "Real estate developers, construction companies, and infrastructure builders creating India's urban landscape.",
    views: "1.8k views",
    companiesCount: 8,
    updated: "Updated Apr 7, 2026",
    companies: [],
  },
];
