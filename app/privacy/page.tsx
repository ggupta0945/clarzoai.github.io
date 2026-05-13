import type { Metadata } from "next";
import {
  LegalLayout,
  P,
  UL,
  LI,
  Lead,
  Note,
  DataTable,
} from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy & Security",
  description:
    "We take your financial data seriously. Here's exactly what we collect, how we protect it, and what we'll never do with it.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy & Security"
      intro="We take your financial data seriously. Here's exactly what we collect, how we protect it, and what we'll never do with it."
      updated="April 15, 2026"
      sections={[
        {
          id: "overview",
          label: "Overview",
          icon: "📋",
          content: (
            <>
              <P>
                Clarzo.ai (&quot;Clarzo&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;)
                operates the website clarzo.ai and associated mobile applications. This Privacy
                Policy explains how we collect, use, store, and protect your personal and financial
                information when you use our platform.
              </P>
              <P>
                By using Clarzo.ai, you agree to the collection and use of information as described
                in this policy. If you do not agree, please do not use our services.
              </P>
              <Note title="The Short Version">
                We use read-only access to aggregate your financial data. We never move your money.
                We never sell your data. We use bank-grade encryption. Your data is stored in
                India. You can delete your account and all data at any time.
              </Note>
            </>
          ),
        },
        {
          id: "data",
          label: "Data We Collect",
          icon: "📊",
          content: (
            <>
              <P>
                We collect information to provide you with a unified view of your financial life.
                Here&apos;s exactly what we collect and why:
              </P>
              <DataTable
                headers={["Data Type", "What We Collect", "Why"]}
                rows={[
                  ["Account Information", "Name, email, phone number, date of birth", "Account creation, identity verification, communication"],
                  ["Financial Data", "Holdings from CDSL, CAMS, brokers; bank transactions; FD/PPF/NPS details; real estate & gold values", "Portfolio aggregation, insights, and goal tracking"],
                  ["Uploaded Documents", "CSV files, demat statements, screenshots of holdings", "Parsing and aggregating portfolio data you provide"],
                  ["Usage Data", "Pages visited, features used, session duration", "Improving our product and user experience"],
                  ["Device Information", "Browser type, operating system, IP address", "Security, fraud prevention, and troubleshooting"],
                  ["Communication Data", "ClarzoGPT/ClarzoGPT conversations", "Providing AI-powered responses, improving answer quality"],
                ]}
              />
              <Note title="What We Don't Collect">
                We never collect your bank passwords, trading PINs, transaction passwords, or any
                credentials that would allow us to make transactions on your behalf. All financial
                data access is read-only.
              </Note>
            </>
          ),
        },
        {
          id: "use",
          label: "How We Use Your Data",
          icon: "⚙️",
          content: (
            <>
              <P>We use your information solely to provide and improve our services:</P>
              <UL>
                <LI label="Portfolio Aggregation">Combining your financial data from multiple sources into a single dashboard</LI>
                <LI label="AI Insights">Generating personalized insights about your portfolio performance, risk, and allocation</LI>
                <LI label="ClarzoGPT">Answering your questions about your portfolio using your actual financial data</LI>
                <LI label="Goal Tracking">Mapping your investments against your financial goals</LI>
                <LI label="Rebalancing Suggestions">Educational recommendations based on your risk profile and allocation</LI>
                <LI label="Spending Analysis">Categorizing bank transactions to show spending patterns</LI>
                <LI label="Notifications">Sending alerts about SIP expirations, portfolio drift, and important updates</LI>
                <LI label="Product Improvement">Analyzing usage patterns to make Clarzo.ai better</LI>
              </UL>
              <P>
                We do not use your data to sell financial products, execute trades, or push
                third-party transactions. Clarzo.ai is an intelligence layer — not a transaction
                platform.
              </P>
            </>
          ),
        },
        {
          id: "sharing",
          label: "Data Sharing & Third Parties",
          icon: "🤝",
          content: (
            <>
              <P>We do not sell, rent, or trade your personal or financial data to anyone. Period.</P>
              <P>
                We may share limited data with the following categories of service providers,
                solely to operate our platform:
              </P>
              <UL>
                <LI label="Data Aggregation Partners">
                  To securely fetch your financial data from CDSL, CAMS, and broker platforms (read-only access)
                </LI>
                <LI label="Cloud Infrastructure">
                  To host and store your data securely on servers located in India
                </LI>
                <LI label="AI Processing">
                  To power ClarzoGPT and portfolio insights (your data is not used to train models for other users)
                </LI>
                <LI label="Expert Advisors">
                  Only when you explicitly choose to connect with a financial expert — and only the data you choose to share
                </LI>
              </UL>
              <P>
                All third-party providers are bound by strict data processing agreements and are
                required to maintain the same level of security we do.
              </P>
              <Note title="Legal Disclosures">
                We may disclose your data if required by law, court order, or government regulation.
                We will notify you of such requests unless legally prohibited from doing so.
              </Note>
            </>
          ),
        },
        {
          id: "security",
          label: "Security",
          icon: "🛡️",
          content: (
            <>
              <P>
                Your financial data requires the highest level of protection. Here&apos;s how we
                safeguard it:
              </P>
              <div className="grid sm:grid-cols-3 gap-4 my-5">
                {[
                  { icon: "🔒", title: "256-bit AES Encryption", text: "All data is encrypted at rest and in transit using bank-grade AES-256 encryption" },
                  { icon: "🛡️", title: "SOC 2 Type II Compliant", text: "Enterprise-grade security controls audited by independent assessors" },
                  { icon: "👁️", title: "Read-Only Access", text: "We can only view your data. We cannot and will never initiate any transaction" },
                ].map((b) => (
                  <div key={b.title} className="glass p-5">
                    <div className="text-2xl mb-2">{b.icon}</div>
                    <div className="text-sm font-semibold">{b.title}</div>
                    <div className="text-xs text-ink-muted mt-1 leading-relaxed">{b.text}</div>
                  </div>
                ))}
              </div>
              <P>Additional security measures we implement:</P>
              <UL>
                <LI label="TLS 1.3">All data transmitted between your device and our servers is encrypted with the latest transport layer security</LI>
                <LI label="Two-Factor Authentication">Optional 2FA for all accounts to prevent unauthorized access</LI>
                <LI label="Role-Based Access">Internal team access is strictly limited on a need-to-know basis</LI>
                <LI label="Regular Penetration Testing">We conduct periodic security audits and vulnerability assessments</LI>
                <LI label="Secure Data Centers">All servers are hosted in ISO 27001 certified data centers located in India</LI>
                <LI label="Automatic Session Timeout">Sessions expire after periods of inactivity</LI>
                <LI label="Anomaly Detection">Automated monitoring for suspicious account activity</LI>
              </UL>
              <Note title="Incident Response">
                In the unlikely event of a data breach, we will notify affected users within 72
                hours, provide details of what data was impacted, and outline the steps we&apos;re
                taking to resolve the issue and prevent recurrence.
              </Note>
            </>
          ),
        },
        {
          id: "cookies",
          label: "Cookies & Tracking",
          icon: "🍪",
          content: (
            <>
              <P>We use cookies and similar technologies to provide and improve our services:</P>
              <DataTable
                headers={["Cookie Type", "Purpose", "Duration"]}
                rows={[
                  ["Essential", "Authentication, session management, security", "Session / 30 days"],
                  ["Functional", "Remember preferences, dashboard layout", "1 year"],
                  ["Analytics", "Understand usage patterns, improve features", "1 year"],
                ]}
              />
              <P>
                We do not use advertising cookies or share cookie data with advertisers. You can
                control cookie preferences through your browser settings.
              </P>
            </>
          ),
        },
        {
          id: "rights",
          label: "Your Rights",
          icon: "✊",
          content: (
            <>
              <P>You have full control over your data. Here are your rights:</P>
              <UL>
                <LI label="Access">Request a complete copy of all data we hold about you</LI>
                <LI label="Correction">Update or correct any inaccurate personal information</LI>
                <LI label="Deletion">Request permanent deletion of your account and all associated data</LI>
                <LI label="Portability">Export your portfolio data in standard formats (CSV, PDF)</LI>
                <LI label="Withdrawal of Consent">Disconnect any linked accounts at any time</LI>
                <LI label="Objection">Opt out of non-essential data processing or communications</LI>
              </UL>
              <P>
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:contact@clarzo.ai" className="text-accent-deep hover:underline">
                  contact@clarzo.ai
                </a>
                . We will respond within 30 days.
              </P>
            </>
          ),
        },
        {
          id: "retention",
          label: "Data Retention",
          icon: "🗄️",
          content: (
            <>
              <P>We retain your data only as long as necessary to provide our services:</P>
              <UL>
                <LI label="Active accounts">Data is retained as long as your account is active</LI>
                <LI label="Deleted accounts">All personal and financial data is permanently deleted within 30 days of account deletion</LI>
                <LI label="Anonymized analytics">Aggregated, non-identifiable usage data may be retained for product improvement</LI>
                <LI label="Legal obligations">Certain data may be retained as required by Indian law (e.g., tax records)</LI>
              </UL>
            </>
          ),
        },
        {
          id: "contact",
          label: "Contact Us",
          icon: "📬",
          content: (
            <>
              <P>
                If you have questions about this Privacy Policy, your data, or our security
                practices, we&apos;d love to hear from you.
              </P>
              <Note title="Clarzo.ai Privacy Team">
                <div>
                  📧{" "}
                  <a href="mailto:contact@clarzo.ai" className="text-accent-deep hover:underline">
                    contact@clarzo.ai
                  </a>
                </div>
                <div className="mt-2 text-xs text-ink-muted">
                  We respond to all privacy and security inquiries within 48 hours.
                </div>
              </Note>
            </>
          ),
        },
      ]}
    />
  );
}
