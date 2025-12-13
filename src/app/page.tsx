"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

// Typewriter component for poem lines
function TypewriterLine({
  text,
  delay = 0,
  speed = 30,
  className = "",
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (displayedText.length < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [started, displayedText, text, speed, onComplete]);

  return (
    <p className={className} style={{ minHeight: "1.6em" }}>
      {displayedText}
      {started && displayedText.length < text.length && (
        <span className="typewriter-cursor">|</span>
      )}
    </p>
  );
}

// Zone data for the showcase
const zones = [
  { num: 1, name: "Grip", color: "var(--zone-1-grip)" },
  { num: 2, name: "Hold", color: "var(--zone-2-hold)" },
  { num: 3, name: "Hang", color: "var(--zone-3-hang)" },
  { num: 4, name: "Flow", color: "var(--zone-4-flow)" },
  { num: 5, name: "Forge", color: "var(--zone-5-forge)" },
  { num: 6, name: "Fire", color: "var(--zone-6-fire)" },
  { num: 7, name: "Legend", color: "var(--zone-7-legend)" },
];

// Features data
const features = [
  {
    icon: "⌚",
    title: "Just Grab and Hang",
    description:
      "Watch detects when you're hanging and starts automatically. No buttons to press while your hands are busy.",
  },
  {
    icon: "🫀",
    title: "Haptic Coaching",
    description:
      "Four modes to keep you going: Pulse, Breathing, Transitions Only, and PR Coach that builds as you approach your record.",
  },
  {
    icon: "🧱",
    title: "Build Your Wall",
    description:
      "Every minute is a brick. Watch your progress stack up day by day, week by week.",
  },
  {
    icon: "🏆",
    title: "PR Celebration",
    description:
      "Tension builds as you approach your record. Beat it and feel the victory. Small wins matter.",
  },
  {
    icon: "📱",
    title: "No Watch? No Problem",
    description:
      "Manual timer on iPhone with Dynamic Island support. The Watch is magic, but not required.",
  },
  {
    icon: "🔒",
    title: "Your Data Stays Yours",
    description:
      "No cloud. No account. No tracking. Everything lives on your device. Privacy by design.",
  },
];

// FAQ data
const faqs = [
  {
    question: "What is a dead hang?",
    answer:
      "A dead hang is exactly what it sounds like: hang from a bar with your arms fully extended, feet off the ground, and let gravity do its work. It decompresses your spine, strengthens your grip, and improves shoulder mobility. Simple to understand. Harder to hold.",
  },
  {
    question: "How does automatic detection work?",
    answer:
      "Your Apple Watch has accelerometers and gyroscopes. When you raise your arms overhead and hold still (like hanging from a bar), the app detects this position and starts timing. When you let go, it stops automatically. No buttons to press while your hands are busy.",
  },
  {
    question: "Do I need an Apple Watch?",
    answer:
      "No. The iPhone app has a manual timer mode. But the Watch is where the magic happens. Hands-free detection means you just grab the bar and go.",
  },
  {
    question: "What's a good goal to start?",
    answer:
      "Start with 5 minutes per week (about 43 seconds per day). Even 30 seconds is an incredible achievement. The point is consistency. Hang for 31 seconds tomorrow.",
  },
  {
    question: "Is it really free?",
    answer:
      "Yes. No ads, no subscriptions, no premium features. I built this for myself and my family. Now it's yours.",
  },
  {
    question: "What about my data?",
    answer:
      "Your data stays on your device. No cloud sync. No account required. No tracking or analytics. Privacy by design.",
  },
];

// FAQ Item component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <button className="faq-question" onClick={onClick}>
        <span>{question}</span>
        <span className="faq-icon">+</span>
      </button>
      <div className="faq-answer">{answer}</div>
    </div>
  );
}

// Zone bar component
function ZoneBar() {
  return (
    <div className="zone-bar">
      {zones.map((zone) => (
        <div
          key={zone.num}
          className="segment"
          style={{ background: zone.color }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number>(0);
  const [showPoem, setShowPoem] = useState(false);
  const [poemAnimating, setPoemAnimating] = useState(false);
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; color: string }>
  >([]);
  const [swipeY, setSwipeY] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [poemComplete, setPoemComplete] = useState(false);
  const touchStartY = useRef(0);
  const modalRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when poem is shown
  useEffect(() => {
    if (showPoem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPoem]);

  // Create particle burst
  const createParticleBurst = useCallback(() => {
    const colors = ["var(--zone-6-fire)", "var(--zone-4-flow)", "#ffffff"];
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: Date.now() + i,
      x: 50 + (Math.random() - 0.5) * 30,
      y: 50 + (Math.random() - 0.5) * 30,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
    setTimeout(() => setParticles([]), 1500);
  }, []);

  const handlePoemOpen = () => {
    setShowPoem(true);
    setPoemAnimating(true);
    setPoemComplete(false);
    createParticleBurst();
  };

  const handlePoemComplete = useCallback(() => {
    setPoemComplete(true);
  }, []);

  const handlePoemClose = useCallback(() => {
    setPoemAnimating(false);
    setSwipeY(0);
    setIsSwiping(false);
    setTimeout(() => setShowPoem(false), 300);
  }, []);

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    setIsSwiping(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSwiping) return;
    const deltaY = e.touches[0].clientY - touchStartY.current;
    if (deltaY > 0) {
      setSwipeY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    if (swipeY > 100) {
      handlePoemClose();
    } else {
      setSwipeY(0);
    }
    setIsSwiping(false);
  };

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* ===== NAVIGATION ===== */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          Hang Habit
        </Link>
        <div className="nav-links">
          <Link href="#features">Features</Link>
          <Link href="#faq">FAQ</Link>
          <span className="btn-primary-sm">Coming Soon</span>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-24 px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl">
          A little <span style={{ color: "var(--gold)" }}>hang</span> goes a
          long way.
        </h1>
        <p
          className="text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          A minute a day keeps the back pain away.
        </p>
        <span className="btn-primary cursor-default">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          Coming Soon
        </span>
        <p className="mt-4 text-sm" style={{ color: "var(--text-tertiary)" }}>
          iPhone & Apple Watch
        </p>

        {/* Device Mockups */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-16">
          <div className="phone-mockup">[iPhone Screenshot]</div>
          <div className="watch-mockup">[Watch Screenshot]</div>
        </div>
      </section>

      {/* ===== TRUTH SECTION ===== */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto text-center">
        <p className="section-label">The Truth</p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-3xl mx-auto mb-16 leading-snug">
          It looks simple. Hang from a bar. But try holding on for 60 seconds.
          Most people can&apos;t.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div
            className="surface p-8 text-left relative overflow-hidden"
            style={{
              borderTop: "3px solid transparent",
              borderImage:
                "linear-gradient(90deg, var(--zone-1-grip), var(--zone-3-hang)) 1",
            }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--zone-3-hang)" }}
            >
              Harder than you think
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Your grip gives out. Your shoulders burn. Your mind tells you to
              let go. That&apos;s the point.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="surface p-8 text-left relative overflow-hidden"
            style={{
              borderTop: "3px solid transparent",
              borderImage:
                "linear-gradient(90deg, var(--zone-3-hang), var(--zone-5-forge)) 1",
            }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--zone-4-flow)" }}
            >
              Worth every second
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Decompress your spine. Build grip strength. Improve shoulder
              mobility. In one simple movement.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="surface p-8 text-left relative overflow-hidden"
            style={{
              borderTop: "3px solid transparent",
              borderImage:
                "linear-gradient(90deg, var(--zone-5-forge), var(--zone-7-legend)) 1",
            }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: "var(--zone-7-legend)" }}
            >
              Rewarding to track
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Watch your time grow. Beat your average. Chase your PR. Small wins
              compound into real change.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STORY SECTION ===== */}
      <section className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why this app exists
            </h2>
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              Me on an &apos;86 Honda Spree riding to class vs. a Prius who
              doesn&apos;t see me. The Prius won. I walked away thinking I was
              fine. My back waited until I had three kids climbing all over me
              to prove me wrong.
            </p>
            <p
              className="text-lg leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              The days I hang for a minute or more,{" "}
              <span style={{ color: "var(--gold)" }} className="font-medium">
                I feel better. I move better. I can be there for them.
              </span>
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              This app is how I stay accountable. Now it&apos;s yours too.
            </p>
          </div>
          <div
            className="h-80 lg:h-[500px] rounded-3xl flex items-center justify-center relative overflow-hidden"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
            }}
          >
            <span style={{ color: "var(--text-tertiary)" }}>
              [Photo placeholder]
            </span>
            {/* Zone gradient at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg,
                  var(--zone-1-grip),
                  var(--zone-2-hold),
                  var(--zone-3-hang),
                  var(--zone-4-flow),
                  var(--zone-5-forge),
                  var(--zone-6-fire),
                  var(--zone-7-legend)
                )`,
              }}
            />
          </div>
        </div>
      </section>

      {/* ===== ZONES SHOWCASE ===== */}
      <section className="py-24 md:py-32 px-6 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Progress you can feel
        </h2>
        <p
          className="text-lg mb-12 max-w-2xl mx-auto"
          style={{ color: "var(--text-secondary)" }}
        >
          One hang won&apos;t fix your back. But one hang a day, stacked over
          weeks? That&apos;s compound interest. And healthy habits have a way of
          spreading. One good choice makes the next one easier. Seven zones from
          first grip to legend status. Watch the streak build.
        </p>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8">
          {zones.map((zone) => (
            <div
              key={zone.num}
              className="zone-block"
              style={{ background: zone.color }}
            >
              <span className="zone-num">{zone.num}</span>
              <span className="zone-name">{zone.name}</span>
            </div>
          ))}
        </div>

        <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
          <span style={{ color: "var(--gold)" }}>Gold is earned.</span> Reach
          Zone 4 and you&apos;ve hit the sweet spot.
        </p>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        id="features"
        className="py-24 md:py-32 px-6 md:px-10 max-w-6xl mx-auto text-center"
      >
        <p className="section-label">Built for Busy People</p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16">
          No gym. No equipment. Just you.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div key={i} className="feature-card">
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CHALLENGE ===== */}
      <section className="py-24 md:py-32 px-6 md:px-10">
        <div
          className="max-w-5xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
          }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 leading-snug">
            Can&apos;t find something to hang on?
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            That&apos;s a heck of an excuse, but I&apos;m not buying it. A tree.
            A basketball hoop. A door frame. A ledge. A playground. There&apos;s
            always something. Your health is your wealth.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mt-12">
            <div className="text-center">
              <div
                className="text-5xl font-bold"
                style={{ color: "var(--zone-3-hang)" }}
              >
                30s
              </div>
              <div
                className="text-sm mt-2"
                style={{ color: "var(--text-tertiary)" }}
              >
                is incredible
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-5xl font-bold"
                style={{ color: "var(--zone-5-forge)" }}
              >
                60s
              </div>
              <div
                className="text-sm mt-2"
                style={{ color: "var(--text-tertiary)" }}
              >
                is a real challenge
              </div>
            </div>
            <div className="text-center">
              <div
                className="text-5xl font-bold"
                style={{ color: "var(--zone-7-legend)" }}
              >
                2min
              </div>
              <div
                className="text-sm mt-2"
                style={{ color: "var(--text-tertiary)" }}
              >
                you&apos;re a legend
              </div>
            </div>
          </div>

          {/* Zone gradient at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background: `linear-gradient(90deg,
                var(--zone-1-grip),
                var(--zone-2-hold),
                var(--zone-3-hang),
                var(--zone-4-flow),
                var(--zone-5-forge),
                var(--zone-6-fire),
                var(--zone-7-legend)
              )`,
            }}
          />
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section
        id="faq"
        className="py-24 md:py-32 px-6 md:px-10 max-w-3xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Frequently Asked
        </h2>

        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq.question}
            answer={faq.answer}
            isOpen={openFAQ === i}
            onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)}
          />
        ))}
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-32 md:py-40 px-6 md:px-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to hang?
        </h2>
        <p
          className="text-lg md:text-xl mb-10"
          style={{ color: "var(--text-secondary)" }}
        >
          Decompress your spine. Decompress your life.
        </p>
        <span className="btn-primary cursor-default">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
          </svg>
          Coming Soon
        </span>
      </section>

      {/* ===== FOOTER ===== */}
      <footer
        className="px-6 md:px-10 py-10 max-w-6xl mx-auto"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="mb-8">
          <ZoneBar />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div>
            <p
              className="text-sm"
              style={{ color: "var(--text-tertiary)" }}
            >
              © 2025 Hang Habit
            </p>
            <p
              className="text-sm italic mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              Decompress your spine. Decompress your life.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-tertiary)" }}
            >
              Privacy
            </Link>
            <Link
              href="/support"
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--text-tertiary)" }}
            >
              Support
            </Link>
          </div>
        </div>

        {/* Software Seuss Easter Egg */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={handlePoemOpen}
            className="software-seuss-wrapper"
            aria-label="Reveal poem"
            type="button"
          >
            <div className="sparkles">
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
              <div className="sparkle" />
            </div>
            <Image
              src="/softwareseus.svg"
              alt="Software Seuss"
              width={100}
              height={77}
              className="software-seuss"
            />
          </button>
        </div>
      </footer>

      {/* ===== POEM EASTER EGG MODAL ===== */}
      {showPoem && (
        <div
          className={`poem-overlay ${poemAnimating ? "poem-overlay-visible" : ""}`}
          onClick={handlePoemClose}
          style={{ opacity: Math.max(0.3, 1 - swipeY / 300) }}
        >
          {/* Particle burst on open */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="burst-particle"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                backgroundColor: particle.color,
              }}
            />
          ))}

          <div
            ref={modalRef}
            className={`poem-container ${poemAnimating ? "poem-container-visible" : ""} ${poemComplete ? "poem-complete" : ""}`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              transform: `translateY(${swipeY}px) scale(${1 - swipeY / 1000})`,
              transition: isSwiping ? "none" : undefined,
            }}
          >
            {/* Swipe indicator */}
            <div className="swipe-indicator" />

            {/* Close button */}
            <button
              onClick={handlePoemClose}
              className="poem-close"
              aria-label="Close poem"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Family illustration */}
            <Image
              src="/family.svg"
              alt="Dad hanging with kids"
              width={120}
              height={90}
              className="mx-auto mb-4 opacity-70"
            />

            {/* Poem content with typewriter effect */}
            <div className="poem-content">
              <p
                className="text-xs uppercase tracking-widest mb-4 text-center"
                style={{ color: "var(--text-tertiary)" }}
              >
                For My Kids
              </p>

              <div className="poem-stanza poem-stanza-1">
                <TypewriterLine
                  text="A five and a four and a baby makes three."
                  delay={300}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="They climb and they pull and they hang onto me."
                  delay={1800}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="So I hang every day, decompress head to toe,"
                  delay={3400}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="So I'm ready to play wherever they go."
                  delay={4900}
                  speed={25}
                  className="poem-line"
                />
              </div>

              <div className="poem-stanza poem-stanza-2">
                <TypewriterLine
                  text="A bar, a branch, a doorframe will do."
                  delay={6500}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="A playground, a beam, there's always a view."
                  delay={7800}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="You can hang in the morning, you can hang in the night."
                  delay={9300}
                  speed={25}
                  className="poem-line"
                />
                <TypewriterLine
                  text="You can hang for a minute and you'll feel just right."
                  delay={11200}
                  speed={25}
                  className="poem-line"
                  onComplete={handlePoemComplete}
                />
              </div>

              {/* Tagline appears after poem completes */}
              <p
                className={`poem-tagline ${poemComplete ? "poem-tagline-visible" : ""}`}
              >
                I hang for them so I can hang with them.
              </p>
            </div>

            {/* Swipe to close hint */}
            <p className="poem-hint">swipe down or tap outside to close</p>
          </div>
        </div>
      )}
    </div>
  );
}
