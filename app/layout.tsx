import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
});

// SEO — aparece no Google e no preview de links (WhatsApp, LinkedIn, etc.)
export const metadata: Metadata = {
  title: "Eduardo Melo — Dev Fullstack",
  description:
    "Dev Fullstack. Transformo processos manuais em sistemas que a empresa realmente usa. Automação, IA e biometria facial.",
  keywords: ["desenvolvedor fullstack", "React", "Next.js", "automação", "Petrolina"],
  openGraph: {
    title: "Eduardo Melo — Dev Fullstack",
    description:
      "Transformo processos manuais em sistemas. Automação, IA e biometria facial.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
