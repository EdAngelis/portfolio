"use client";

import { AppProvider } from "../context";
import Home from "../home/home";

export default function Page() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
