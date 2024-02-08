import { type Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import clsx from "clsx";

import { Providers } from "@/app/providers";
import { Layout } from "@/components/Layout";

import "@/styles/tailwind.css";
import { SITE_CONFIG } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: "../fonts/lexend.woff2",
  display: "swap",
  variable: "--font-lexend",
});

export const metadata: Metadata = {
  title: {
    template: SITE_CONFIG.metadata.title.template,
    default: SITE_CONFIG.metadata.title.default,
  },
  description: SITE_CONFIG.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={clsx("h-full antialiased", inter.variable, lexend.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full bg-white dark:bg-slate-900">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
