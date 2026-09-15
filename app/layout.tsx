import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Serenity Spa — Skin & Body Therapies in Miami",
  description:
    "Serenity Spa is a quiet studio for expert facials, massage and aromatherapy rituals in Miami. Book your visit online or by phone.",
  metadataBase: new URL("https://serenityspa.example"),
  openGraph: {
    title: "Serenity Spa — Skin & Body Therapies in Miami",
    description:
      "Expert facials, massage and aromatherapy rituals in a calm, light-filled studio. Book your visit.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${lora.variable} ${raleway.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
