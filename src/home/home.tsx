"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function Home() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="pt">Portuguese</option>
      </select>
      <div>{`${t("title")} Interpolate`}</div>
    </>
  );
}
