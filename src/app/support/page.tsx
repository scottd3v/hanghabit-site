import Link from "next/link";

export const metadata = {
  title: "Support - Hang Habit",
  description: "Get help and support for the Hang Habit app.",
};

const faqs = [
  {
    question: "How do I start a dead hang session?",
    answer:
      "Open the app on your Apple Watch, then tap the Start button. The timer will begin when you're ready. Tap again to stop when you release the bar.",
  },
  {
    question: "Is my data backed up?",
    answer:
      "Your data is stored locally on your device and included in your iCloud backup if you have iCloud Backup enabled for your iPhone.",
  },
  {
    question: "Can I sync between devices?",
    answer:
      "Currently, data is stored locally on each device. Your iPhone and Apple Watch share data through the Watch connectivity framework.",
  },
  {
    question: "How do I delete my data?",
    answer:
      "You can clear all data from the Settings screen within the app, or by uninstalling and reinstalling the app.",
  },
  {
    question: "I denied Health data access. How do I fix it?",
    answer:
      "If you declined to share Health data when first prompted, the app won't ask again. The only way to fix this is to uninstall the app and reinstall it. On the fresh install, you'll get the Health permissions prompt again.",
  },
];

export default function Support() {
  return (
    <div style={{ background: "var(--bg)" }} className="min-h-screen">
      {/* Header */}
      <header className="px-6 md:px-10 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
          style={{ color: "var(--text-secondary)" }}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="text-sm font-medium">Hang Habit</span>
        </Link>
      </header>

      <main className="px-6 md:px-10 pb-16">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Support</h1>
          <p className="mb-10" style={{ color: "var(--text-secondary)" }}>
            How can we help?
          </p>

          {/* Contact Card */}
          <a href="mailto:hello@hanghabit.com" className="block mb-12">
            <div
              className="surface p-5 flex items-center gap-4 transition-all hover:border-[rgba(218,185,130,0.3)]"
              style={{ borderColor: "var(--border)" }}
            >
              <span className="text-3xl">✉️</span>
              <div>
                <h3 className="font-semibold text-white">Email Support</h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  hello@hanghabit.com
                </p>
              </div>
            </div>
          </a>

          {/* FAQ Section */}
          <h2 className="text-2xl font-semibold mb-6 text-white">
            Frequently Asked Questions
          </h2>

          <div
            className="surface p-6 md:p-8 space-y-8"
          >
            {faqs.map((faq, i) => (
              <div key={i}>
                <h3 className="text-lg font-medium mb-2 text-white">
                  {faq.question}
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
