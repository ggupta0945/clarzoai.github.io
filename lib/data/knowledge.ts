export const ARTICLES = [
  {
    emoji: "📈",
    category: "Mutual Funds",
    title: "SIP vs Lump Sum: Which Strategy Actually Wins in Indian Markets?",
    excerpt:
      "We analyzed 20 years of Nifty data to settle the debate once and for all. Spoiler: the answer depends on your timing, discipline, and risk tolerance — not on what Twitter tells you.",
    readTime: "8 min read",
  },
  {
    emoji: "📋",
    category: "Tax Planning",
    title: "New Tax Regime vs Old: A Complete Guide for Salaried Employees (FY 2026-27)",
    excerpt:
      "The new tax regime got sweeter — but is it right for you? We break down every deduction, exemption, and edge case with real salary scenarios from ₹8L to ₹30L.",
    readTime: "12 min read",
  },
  {
    emoji: "🧮",
    category: "Investing 101",
    title: "What is CAGR and Why Your Returns Are Probably Lower Than You Think",
    excerpt:
      "Your mutual fund shows 45% returns — but that's absolute, not annualized. Learn the difference between CAGR, absolute returns, and XIRR, and why it matters for every investment decision.",
    readTime: "6 min read",
  },
  {
    emoji: "⚖️",
    category: "Portfolio Strategy",
    title: "The Rebalancing Playbook: When, Why, and How to Adjust Your Portfolio",
    excerpt:
      "Your portfolio drifts every day. Equity rallies push your allocation out of balance. Here's a practical framework for when to rebalance, how much to shift, and what most investors get wrong.",
    readTime: "10 min read",
  },
  {
    emoji: "🛡️",
    category: "Insurance",
    title: "Term Insurance in India: How Much Cover Do You Actually Need?",
    excerpt:
      'Everyone says "buy term insurance" but nobody tells you how to calculate the right cover. We use real math — accounting for inflation, debt, dependents, and lifestyle — to give you a formula.',
    readTime: "9 min read",
  },
  {
    emoji: "🏦",
    category: "Investing 101",
    title: "Emergency Fund: How Many Months of Expenses Should You Really Keep?",
    excerpt:
      "3 months? 6 months? 12 months? The right answer depends on your job stability, EMIs, insurance, and family situation. Here's how to calculate your exact number.",
    readTime: "7 min read",
  },
  {
    emoji: "📊",
    category: "Mutual Funds",
    title: "Index Funds vs Active Funds: The India-Specific Data Nobody Talks About",
    excerpt:
      "In the US, index funds win. But India is a different market — with higher alpha potential and different market inefficiencies. Here's what 10 years of data actually shows.",
    readTime: "11 min read",
  },
  {
    emoji: "🥇",
    category: "Portfolio Strategy",
    title: "Gold in Your Portfolio: How Much is Too Much?",
    excerpt:
      "Gold hit all-time highs. Should you buy more? We look at gold's historical role in Indian portfolios — as an inflation hedge, crisis insurance, and the one asset that doesn't correlate with equity.",
    readTime: "8 min read",
  },
  {
    emoji: "🔢",
    category: "Investing 101",
    title: "Understanding P/E Ratio: A Beginner's Guide to Stock Valuation",
    excerpt:
      "Price-to-Earnings ratio is the most quoted metric in investing — and the most misunderstood. Here's what P/E actually tells you, what it doesn't, and how to use it without getting fooled.",
    readTime: "7 min read",
  },
] as const;

export const FEATURED_ARTICLE = {
  category: "Portfolio Strategy",
  title: "Asset Allocation 101: Why Your Portfolio Needs More Than Just Stocks",
  excerpt:
    "Most Indian investors put 80%+ into equities and hope for the best. That's not investing — that's gambling with extra steps. Here's how to build a portfolio that survives market crashes and still grows wealth over decades. We break down the ideal mix of equity, debt, gold, and alternatives for different age groups and risk profiles.",
} as const;

export const FILTER_CATEGORIES = [
  "All",
  "Investing 101",
  "Mutual Funds",
  "Tax Planning",
  "Portfolio Strategy",
  "Insurance",
  "Resources",
  "Calculators",
] as const;

export const RESOURCES = [
  {
    icon: "📊",
    type: "Spreadsheet",
    size: "245 KB",
    title: "Monthly Budget Planner (Excel)",
    description:
      "A ready-to-use spreadsheet to track income, expenses, savings rate, and investment allocation. Pre-built formulas and charts included.",
  },
  {
    icon: "✅",
    type: "PDF Guide",
    size: "180 KB",
    title: "Mutual Fund Comparison Checklist",
    description:
      "A printable checklist to evaluate and compare mutual funds — covering expense ratio, AUM, manager tenure, category rank, risk metrics, and exit load.",
  },
  {
    icon: "📋",
    type: "PDF Guide",
    size: "320 KB",
    title: "Tax-Saving Investment Guide (FY 2026-27)",
    description:
      "Complete guide to Section 80C, 80D, 80CCD, NPS, ELSS, and all tax-saving instruments with comparison tables and recommended strategy by salary bracket.",
  },
  {
    icon: "🩺",
    type: "Spreadsheet",
    size: "190 KB",
    title: "Portfolio Health Check Template",
    description:
      "A self-assessment template to evaluate your portfolio's diversification, risk level, goal alignment, and rebalancing needs. Works for any portfolio size.",
  },
  {
    icon: "🧮",
    type: "Calculator",
    size: "150 KB",
    title: "Retirement Corpus Calculator",
    description:
      "Calculate exactly how much you need for retirement based on your current age, lifestyle, inflation, and expected returns. Includes SIP projections.",
  },
  {
    icon: "🛡️",
    type: "Spreadsheet",
    size: "210 KB",
    title: "Insurance Needs Analyzer",
    description:
      "Figure out the right term insurance cover, health insurance sum, and critical illness cover based on your income, debts, dependents, and existing policies.",
  },
] as const;

export const CALCULATORS_INDEX = [
  {
    emoji: "🏠",
    title: "EMI Calculator",
    slug: "emi",
    description:
      "Calculate your monthly EMI for home loans, car loans, or personal loans. Adjust principal, interest rate, and tenure to see how your payments change.",
  },
  {
    emoji: "📋",
    title: "Income Tax Calculator",
    slug: "tax",
    description:
      "Estimate your tax liability under both Old and New tax regimes for FY 2026-27. Input salary, deductions, HRA, and see which regime saves you more.",
  },
  {
    emoji: "📈",
    title: "SIP Calculator",
    slug: "sip",
    description:
      "See how your monthly SIP grows over time. Adjust amount, expected return, and tenure to project your corpus with the power of compounding.",
  },
  {
    emoji: "💰",
    title: "Lump Sum Returns Calculator",
    slug: "lumpsum",
    description:
      "Calculate the future value of a one-time investment based on amount, expected CAGR, and investment horizon.",
  },
  {
    emoji: "🏖️",
    title: "Retirement Calculator",
    slug: "retirement",
    description:
      "How much do you need to retire comfortably? Factor in your current age, monthly expenses, inflation, and expected returns to find your magic number.",
  },
  {
    emoji: "🏛️",
    title: "PPF Calculator",
    slug: "ppf",
    description:
      "Project your Public Provident Fund maturity value over 15 years. See yearly breakdowns of deposits, interest earned, and total corpus.",
  },
  {
    emoji: "🏦",
    title: "FD Calculator",
    slug: "fd",
    description:
      "Calculate fixed deposit maturity amount with quarterly/annual compounding. Compare across tenures and interest rates.",
  },
  {
    emoji: "🎁",
    title: "Gratuity Calculator",
    slug: "gratuity",
    description:
      "Estimate your gratuity payout based on last drawn salary, years of service, and the applicable formula under the Payment of Gratuity Act.",
  },
] as const;
