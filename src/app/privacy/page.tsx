import Link from "next/link";

export const metadata = {
  title: "Privacy Policy - Hang Habit",
  description: "Privacy policy for the Hang Habit iOS and watchOS app.",
};

export default function Privacy() {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-colors"
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

      <main className="px-6 pb-12">
        <div className="max-w-2xl">
          <h1
            className="text-3xl font-bold mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Privacy Policy
          </h1>

          <div className="space-y-6" style={{ color: "var(--text-secondary)" }}>
            <p className="leading-relaxed">
              Hang Habit is designed with your privacy in mind. We believe your
              health and fitness data belongs to you alone.
            </p>

            <section>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Data Storage
              </h2>
              <p className="leading-relaxed">
                All your data is stored locally on your device. Your hang
                session data, personal records, and settings never leave your
                iPhone or Apple Watch unless you explicitly choose to back them
                up via iCloud.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                No Analytics or Tracking
              </h2>
              <p className="leading-relaxed">
                Hang Habit does not integrate with any third-party analytics,
                advertising, or tracking services. We don&apos;t collect crash
                reports, usage statistics, or any other data about how you use
                the app.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                HealthKit Integration
              </h2>
              <p className="leading-relaxed">
                If you grant permission, Hang Habit can save your sessions to
                Apple Health as workouts. This data is handled entirely by
                Apple&apos;s HealthKit framework and is subject to Apple&apos;s
                privacy policies. We never access or store this data on any
                external servers.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                No Account Required
              </h2>
              <p className="leading-relaxed">
                Hang Habit does not require you to create an account or provide
                any personal information to use the app.
              </p>
            </section>

            <section>
              <h2
                className="text-lg font-semibold mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Contact
              </h2>
              <p className="leading-relaxed">
                If you have any questions about this privacy policy, please
                contact us at{" "}
                <a
                  href="mailto:hello@hanghabit.com"
                  style={{ color: "var(--accent-teal)" }}
                  className="hover:underline"
                >
                  hello@hanghabit.com
                </a>
              </p>
            </section>

            <p
              className="text-sm pt-4"
              style={{ color: "var(--text-muted)" }}
            >
              Last updated: December 2024
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
