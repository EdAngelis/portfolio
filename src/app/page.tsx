"use client";

import { AppProvider } from "../context";
import Home from "../home/home";
import Header from "../sessions/header/header";
import Footer from "../sessions/footer/footer";

export default function Page() {
  return (
    <AppProvider>
      <Header />
      <Home />
      <Footer />
    </AppProvider>
  );
}
