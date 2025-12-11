import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hanghabit.com"),
  title: "Hang Habit - Dead Hang Tracker for iOS & Apple Watch",
  description:
    "Decompress your spine. Decompress your life. One minute a day keeps the back pain away.",
  openGraph: {
    title: "Hang Habit",
    description: "Decompress your spine. Decompress your life.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${dmSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
