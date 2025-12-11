import Link from "next/link";

export const metadata = {
  title: "Support - Hang Habit",
  description: "Get help and support for the Hang Habit app.",
};

export default function Support() {
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
            className="text-3xl font-bold mb-2"
            style={{ color: "var(--text-primary)" }}
          >
            Support
          </h1>
          <p className="mb-8" style={{ color: "var(--text-secondary)" }}>
            How can we help?
          </p>

          {/* Contact */}
          <div className="mb-10">
            <a href="mailto:hello@hanghabit.com">
              <div className="glass p-4 flex items-center gap-4">
                <span className="text-2xl">&#x2709;&#xFE0F;</span>
                <div>
                  <h3
                    className="font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Email Support
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    hello@hanghabit.com
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* FAQ Section */}
          <h2
            className="text-xl font-semibold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            Frequently Asked Questions
          </h2>

          <div className="glass p-6 space-y-6">
            <div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                How do I start a dead hang session?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Open the app on your Apple Watch, then tap the Start button. The
                timer will begin when you&apos;re ready. Tap again to stop when
                you release the bar.
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Is my data backed up?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Your data is stored locally on your device and included in your
                iCloud backup if you have iCloud Backup enabled for your iPhone.
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                Can I sync between devices?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Currently, data is stored locally on each device. Your iPhone
                and Apple Watch share data through the Watch connectivity
                framework.
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                How do I delete my data?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                You can clear all data from the Settings screen within the app,
                or by uninstalling and reinstalling the app.
              </p>
            </div>

            <div>
              <h3
                className="text-lg font-medium mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                I denied Health data access. How do I fix it?
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                If you declined to share Health data when first prompted, the
                app won&apos;t ask again. The only way to fix this is to
                uninstall the app and reinstall it. On the fresh install,
                you&apos;ll get the Health permissions prompt again.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
