"use client";

import { AppProvider } from "../context";
import Home from "../home/home";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Page() {
  return (
    <AppProvider>
      <Header />
      <Home />
      <Footer />
    </AppProvider>
  );
}
