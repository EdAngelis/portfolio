import React from "react";
import { FooterContainer } from "./footer.style";
import { appContext } from "@/context";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { theme } = useContext(appContext);
  const { t } = useTranslation();

  return (
    <FooterContainer theme={theme}>
      <footer id="footer">
        <h2>{t("CONTACT")}</h2>
        <div>
          <a href="mailto:ed4ngelis@hotmail.com">ed4ngelis@hotmail.com</a>
          <div>
            <a href="tel:+5582996173595" className="tel">
              +55 82996173595
            </a>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
}
