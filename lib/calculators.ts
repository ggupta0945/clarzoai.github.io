// Indian financial formulas

export function calcEMI(principal: number, ratePct: number, years: number) {
  const r = ratePct / 12 / 100;
  const n = years * 12;
  if (r === 0) return { emi: principal / n, totalInterest: 0, totalAmount: principal };
  const emi = (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalAmount = emi * n;
  return { emi, totalInterest: totalAmount - principal, totalAmount };
}

export function buildAmortization(principal: number, ratePct: number, years: number) {
  const r = ratePct / 12 / 100;
  const n = years * 12;
  const { emi } = calcEMI(principal, ratePct, years);
  let balance = principal;
  const yearly: { year: number; principal: number; interest: number; balance: number }[] = [];
  for (let y = 1; y <= years; y++) {
    let yearPrincipal = 0;
    let yearInterest = 0;
    for (let m = 0; m < 12; m++) {
      const interest = balance * r;
      const principalPayment = emi - interest;
      balance -= principalPayment;
      yearPrincipal += principalPayment;
      yearInterest += interest;
    }
    yearly.push({
      year: y,
      principal: yearPrincipal,
      interest: yearInterest,
      balance: Math.max(0, balance),
    });
  }
  return yearly;
}

// Old regime slabs (₹) — FY 2026-27 (illustrative)
function oldRegimeTax(taxable: number) {
  let tax = 0;
  if (taxable <= 250000) return 0;
  if (taxable <= 500000) tax = (taxable - 250000) * 0.05;
  else if (taxable <= 1000000) tax = 12500 + (taxable - 500000) * 0.2;
  else tax = 112500 + (taxable - 1000000) * 0.3;
  tax += tax * 0.04;
  return tax;
}

// New regime slabs (₹) — FY 2026-27 (illustrative)
function newRegimeTax(income: number) {
  const STD = 75000;
  let taxable = Math.max(0, income - STD);
  let tax = 0;
  if (taxable <= 300000) tax = 0;
  else if (taxable <= 700000) tax = (taxable - 300000) * 0.05;
  else if (taxable <= 1000000) tax = 20000 + (taxable - 700000) * 0.1;
  else if (taxable <= 1200000) tax = 50000 + (taxable - 1000000) * 0.15;
  else if (taxable <= 1500000) tax = 80000 + (taxable - 1200000) * 0.2;
  else tax = 140000 + (taxable - 1500000) * 0.3;
  // Rebate u/s 87A under new regime if taxable income <= ₹7L
  if (taxable <= 700000) tax = 0;
  tax += tax * 0.04;
  return tax;
}

export function calcTax(income: number, deductions80c: number, deductions80d: number, hra: number) {
  const STD_OLD = 50000;
  const totalDed = Math.min(deductions80c, 150000) + deductions80d + hra + STD_OLD;
  const taxableOld = Math.max(0, income - totalDed);
  const oldTax = oldRegimeTax(taxableOld);
  const newTax = newRegimeTax(income);
  return { oldTax, newTax, saves: oldTax - newTax, better: newTax < oldTax ? "New" : "Old" };
}

export function calcSIP(monthly: number, ratePct: number, years: number) {
  const r = ratePct / 12 / 100;
  const n = years * 12;
  const maturity = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  return { maturity, invested, gained: maturity - invested };
}

export function calcLumpSum(principal: number, cagrPct: number, years: number) {
  const future = principal * Math.pow(1 + cagrPct / 100, years);
  return { future, invested: principal, returns: future - principal };
}

export function calcRetirement(
  currentAge: number,
  retireAge: number,
  monthlyExpenses: number,
  inflationPct: number,
  postReturnPct: number
) {
  const years = Math.max(0, retireAge - currentAge);
  const monthlyAtRetire = monthlyExpenses * Math.pow(1 + inflationPct / 100, years);
  const yearlyAtRetire = monthlyAtRetire * 12;
  // 30-year retirement, withdraw real growth (post - inflation) -> use 4% rule approximation via real rate
  const realRate = Math.max(0.0001, (postReturnPct - inflationPct) / 100);
  const retirementYears = 30;
  const corpus = (yearlyAtRetire * (1 - Math.pow(1 + realRate, -retirementYears))) / realRate;
  return { corpus, monthlyAtRetire, years };
}

export function calcPPF(yearly: number, ratePct: number, years: number) {
  const r = ratePct / 100;
  let balance = 0;
  let deposited = 0;
  for (let i = 0; i < years; i++) {
    balance = (balance + yearly) * (1 + r);
    deposited += yearly;
  }
  return { maturity: balance, deposited, interest: balance - deposited };
}

export function calcFD(
  principal: number,
  ratePct: number,
  years: number,
  compounding: "quarterly" | "halfYearly" | "annually"
) {
  const n = compounding === "quarterly" ? 4 : compounding === "halfYearly" ? 2 : 1;
  const maturity = principal * Math.pow(1 + ratePct / 100 / n, n * years);
  return { maturity, principal, interest: maturity - principal };
}

export function calcGratuity(basicDa: number, years: number) {
  const eligible = years >= 5;
  const amount = (basicDa * 15 * years) / 26;
  const taxFree = Math.min(amount, 2000000);
  const taxable = Math.max(0, amount - 2000000);
  return { amount, taxFree, taxable, eligible };
}
