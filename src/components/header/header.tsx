"use client";

import { useState, useContext } from "react";
import { appContext } from "@/context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { HeaderContainer } from "./header.style";

import "../../i18n";

export default function Header() {
  const { i18n, t } = useTranslation();
  const [flag, setFlag] = useState("bra");
  const { theme, setTheme } = useContext(appContext);

  const toggleFlag = () => {
    if (i18n.language === "en") {
      i18n.changeLanguage("pt");
    } else {
      i18n.changeLanguage("en");
    }

    if (flag === "bra") {
      setFlag("eua");
      setTheme("eua");
    } else {
      setTheme("bra");
      setFlag("bra");
    }
  };
  return (
    <HeaderContainer theme={theme}>
      <header className="header">
        <h1 className="h1">Ed Angelis R Ribeiro.</h1>
        <div className={`language ${flag}`} onClick={() => toggleFlag()}>
          <Image
            className="image"
            src={flag === "bra" ? "/brasil.png" : "/eua-flag.png"}
            width={40}
            height={50}
            alt="brasil-flag"
            image-fit="contain"
          />
        </div>
        <nav>
          <ul className="ul">
            <li className="li">
              <a className="a" href="#jobs-section">
                {t("MENU.EXPERIENCES")}
              </a>
            </li>
            <li className="li">
              <a className="a" href="#certifications">
                {t("MENU.CERTIFICATIONS")}
              </a>
            </li>
            <li className="li">
              <a className="a" href="#projects">
                {t("MENU.PROJECTS")}
              </a>
            </li>
            <li className="li">
              <a className="a" href="#footer">
                {t("MENU.CONTACT")}
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </HeaderContainer>
  );
}
