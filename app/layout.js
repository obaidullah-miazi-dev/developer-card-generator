import { Inter, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-great-vibes',
});

export const metadata = {
  title: "Developer Card Generator Bangladesh",
  description:
    "Create and download your own developer ID card instantly. Enter your name and photo to generate a premium digital Bangladesh developer card.",
  keywords: ["developer card", "digital bangladesh", "developer id", "dev card generator"],
  openGraph: {
    title: "Developer Card Generator Bangladesh",
    description: "Create your personalized developer ID card instantly.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn" className={`${inter.variable} ${greatVibes.variable} h-full`}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
