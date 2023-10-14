"use client";
import { createContext, useState } from "react";

export const appContext = createContext<any>(null);
export const AppProvider = ({ children }: any) => {
  const [theme, setTheme] = useState("eua");

  return (
    <appContext.Provider value={{ theme, setTheme }}>
      {children}
    </appContext.Provider>
  );
};
