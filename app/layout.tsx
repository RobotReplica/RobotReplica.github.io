import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://robotreplica.github.io"),
  title: "RobotReplica — A Shared Proving Ground for Robot Manipulation",
  description: "Find a hosted site with your robot, submit your manipulation policy, and receive a verified score on standardized real-world tasks.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: { title: "RobotReplica", description: "A shared proving ground for robot manipulation.", images: ["/og-network.png"] },
  twitter: { card: "summary_large_image", title: "RobotReplica", description: "A shared proving ground for robot manipulation.", images: ["/og-network.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
