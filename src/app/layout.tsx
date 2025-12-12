import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hanghabit.com"),
  title: "Hang Habit - Dead Hang Tracker for iOS & Apple Watch",
  description:
    "Decompress your spine. Decompress your life. One minute a day keeps the back pain away.",
  alternates: {
    canonical: "https://hanghabit.com",
  },
  openGraph: {
    title: "Hang Habit",
    description: "Decompress your spine. Decompress your life.",
    url: "https://hanghabit.com",
    images: [
      {
        url: "/og-hang-habit.png",
        width: 1200,
        height: 630,
        alt: "Hang Habit - Decompress your spine. Decompress your life.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hang Habit",
    description: "Decompress your spine. Decompress your life.",
    images: ["/og-hang-habit.png"],
  },
  other: {
    "theme-color": "#0c1220",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://hanghabit.com/#website",
      url: "https://hanghabit.com",
      name: "Hang Habit",
      description: "Dead Hang Tracker for iOS & Apple Watch",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://hanghabit.com/#app",
      name: "Hang Habit",
      description: "Decompress your spine. Decompress your life. One minute a day keeps the back pain away.",
      applicationCategory: "HealthApplication",
      operatingSystem: "iOS, watchOS",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
