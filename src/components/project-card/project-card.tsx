import React from "react";
import Image from "next/image";
import { Container } from "./project-card.style";
import { useTranslation } from "react-i18next";
import { IProjectCard } from "../../types/project-card.type";

export default function ProjectCard({
  title,
  description,
  technologies,
  webRepo,
  apiRepo,
  appRepo,
  figmaUrl,
  liveLink,
  theme,
  image,
  data,
}: IProjectCard) {
  const { t } = useTranslation();

  return (
    <Container theme={theme}>
      <div className="container">
        <Image fill={true} src={image} alt={title} />
        <div className="card">
          <div className="card-content">
            <span className="title">
              {title}
              <span className="data">{data}</span>
            </span>
            <span className="description">{description}</span>
            <span className="technologies">{technologies}</span>
            {webRepo && (
              <span className="links">
                <a href={webRepo}>{t("PROJECT-CARD.WEB-LINK")}</a>
              </span>
            )}
            {apiRepo && (
              <span className="links">
                <a href={webRepo}>{t("PROJECT-CARD.API-LINK")}</a>
              </span>
            )}
            {appRepo && (
              <span className="links">
                <a href={webRepo}>{t("PROJECT-CARD.APP-LINK")}</a>
              </span>
            )}
            {figmaUrl && (
              <span className="links">
                <a href={webRepo}>{t("PROJECT-CARD.FIGMA-LINK")}</a>
              </span>
            )}
            <span className="links">
              <a href={liveLink}>{t("PROJECT-CARD.LIVE-LINK")}</a>
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
