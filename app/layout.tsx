import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Victoria's Global Garden Limited | Models · Ushers · Actors",
  description:
    "Nigeria's premier event staffing agency. Professional ushers, models, and actors for corporate events, weddings, and productions. Lagos | Abuja | Kaduna.",
  keywords: "ushers Nigeria, event models Lagos, usher agency Nigeria, VGGL, Victoria's Global Garden",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
