import React from "react";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto, Indie_Flower, Irish_Grover } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const neutral = Roboto({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-neutral",
});

const title = Irish_Grover({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
  variable: "--font-title",
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
        ${neutral.variable} 
        ${display.variable} 
        ${title.variable}`}
      >
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
