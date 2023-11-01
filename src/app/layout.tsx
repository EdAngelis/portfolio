import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import {
  Inter,
  Roboto,
  Indie_Flower,
  Irish_Grover,
  Roboto_Mono,
} from "next/font/google";
import localFont from "next/font/local";
import StyledComponentsRegistry from "./lib/registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const neutral = Roboto_Mono({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-neutral",
});

const title = localFont({
  src: [
    {
      path: "../../public/fonts/SometypeMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/SometypeMono-SemiBold.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/SometypeMono-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

const display = Indie_Flower({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Ed Angelis",
  description: "Ed Angelis' personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
        ${title.className}
        ${neutral.variable} 
        ${display.variable} 
        `}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
