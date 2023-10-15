"use client";

import React from "react";
import { appContext } from "@/context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { HomeContainer } from "./home.style";
import { JobsContainer } from "./jobs.style";
import { CertsContainer } from "./certs.style";
import { ProjectsContainer } from "./projects.style";
import { LayoutContainer } from "./layout.style";
import "../i18n";

export default function Home() {
  const { theme } = React.useContext(appContext);
  const { t } = useTranslation();
  const [animate, setAnimate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAnimate(true);
  }, [theme]);

  return (
    <>
      <LayoutContainer
        active={animate}
        onAnimationEnd={() => setAnimate(false)}
      >
        <main className={`container ${animate ? "animate" : "animate"}`}>
          <HomeContainer theme={theme}>
            <section className="home" id="home">
              <div className="container-skills">
                <div className="technology javascript">
                  <p>javascript</p>
                </div>
                <div className="technology typescript">
                  <p>typescript</p>
                </div>
                <div className="technology node">
                  <p>node</p>
                </div>
                <div className="technology react">
                  <p>react</p>
                </div>
                <div className="technology vue">
                  <p>vue</p>
                </div>
                <div className="technology angular">
                  <p>angular</p>
                </div>
                <div className="technology mongoDb">
                  <p>mongodb</p>
                </div>
                <div className="technology mySql">
                  <p>mySql</p>
                </div>
                <div className="technology aws">
                  <p>aws</p>
                </div>
                <div className="technology docker">
                  <p>docker</p>
                </div>
                <div className="technology git">
                  <p>git</p>
                </div>
                <div className="technology github">
                  <p>github</p>
                </div>
                <div className="technology flutter">
                  <p>flutter</p>
                </div>
                <div className="bar vue-bar"></div>
                <div className="bar react-bar"></div>
                <div className="bar angular-bar"></div>
                <div className="bar node-bar"></div>
                <div className="bar mongoDb-bar"></div>
                <div className="bar mySql-bar"></div>
                <div className="bar aws-bar"></div>
                <div className="bar docker-bar"></div>
                <div className="bar git-bar"></div>
                <div className="bar github-bar"></div>
                <div className="bar javascript-bar"></div>
                <div className="bar typescript-bar"></div>
                <div className="bar flutter-bar"></div>
              </div>
              <div className="personal-data">
                <div className="avatar">
                  <Image
                    src={"/avatar.png"}
                    width={300}
                    height={300}
                    alt="Ed Angelis"
                  />
                </div>
                <h2>{t("FULLSTACK")}</h2>
                <a>{t("DEGREE")}</a>
                <div className="links">
                  <a href="https://www.linkedin.com/in/ed-angelis-ribeiro-2797b57a/">
                    LINKEDIN
                  </a>
                  <a href="https://github.com/EdAngelis">GITHUB</a>
                </div>
              </div>
            </section>
          </HomeContainer>
          <JobsContainer theme={theme}>
            <section className="jobs-section" id="jobs-section">
              <h1>{t("EXPERIENCES")}</h1>
              <div className="experiences">
                <div className="job1">
                  <span className="job1-date">{`08/2021 - ${t(
                    "MARKETING-BUSINESS"
                  )}`}</span>
                  <span className="job1-company">Blanko</span>
                  <span className="job1-role">{t("FULLSTACK")}</span>
                  <span className="job1-technologies">
                    node - MySql - NextJs - javascript
                  </span>
                </div>
                <div className="job2">
                  <span className="job2-date">{`07/2022 - ${t(
                    "IOT-PLATFORM"
                  )}`}</span>
                  <span className="job2-company">Manusis4</span>
                  <span className="job2-role">{t("FULLSTACK")}</span>
                  <span className="job2-technologies">
                    node - mongoDb - React/Angular - javascript/Typescript
                  </span>
                </div>
              </div>
            </section>
          </JobsContainer>
          <ProjectsContainer theme={theme}>
            <section className="projects" id="projects">
              <h1>{t("PROJECTS")}</h1>
              <a href="https://play.google.com/store/apps/details?id=com.rfgames.PlayLinguageVocabulary&pli=1">
                Unity Game - Play Language - Apps on Google Play
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.deasolucoes.orange_painel">
                Flutter app - FoodTech - Apps on Google Play
              </a>
              <a href="https://my-home-front.vercel.app/">
                Web App - Envio de lista de compra
              </a>
            </section>
          </ProjectsContainer>
          <CertsContainer theme={theme}>
            <section className="certifications" id="certifications">
              <div>
                <Image
                  className="img"
                  src={"/ai.png"}
                  alt="Ai Certification"
                  width={100}
                  height={100}
                />
              </div>
              <Image
                className="img"
                src={"/big-data.png"}
                alt="big-data Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/ciencia-de-dados.png"}
                alt="science data"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/docker.png"}
                alt="docker Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/english.png"}
                alt="english Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/flexbox.png"}
                alt="flexbox Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/grid-layout.png"}
                alt="grid layout Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/lambda.png"}
                alt="lambda Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/python.png"}
                alt="python Certification"
                width={100}
                height={100}
              />
              <Image
                className="img"
                src={"/typescript.png"}
                alt="typescript Certification"
                width={100}
                height={100}
              />
            </section>
          </CertsContainer>
        </main>
      </LayoutContainer>
    </>
  );
}
