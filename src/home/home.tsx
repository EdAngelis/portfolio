"use client";

import React from "react";
import Image from "next/image";
import { appContext } from "@/context";
import Header from "../sessions/header/header";
import Footer from "../sessions/footer/footer";
import { HomeContainer } from "../styles/home.style";
import { JobsContainer } from "../styles/jobs.style";
import { CertsContainer } from "../styles/certs.style";
import { ProjectsContainer } from "../styles/projects.style";
import { LayoutContainer } from "../styles/layout.style";
import { useTranslation } from "react-i18next";
import "../i18n";
import ProjectCard from "@/components/project-card/project-card";
import { projectList } from "./projects-list";
import InfiniteSlider from "@/components/infinite-slider/infinite-slider";

export default function Home() {
  const { theme } = React.useContext(appContext);
  const { t } = useTranslation();
  const [animate, setAnimate] = React.useState<string>("false");

  React.useEffect(() => {
    setAnimate("true");
  }, [theme]);

  return (
    <>
      <LayoutContainer
        active={animate}
        onAnimationEnd={() => setAnimate("false")}
      >
        <Header />
        <main className={`container`}>
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
            <div id="jobs-section"></div>
            <section className="jobs-section">
              <div className="top">
                <h1>{t("EXPERIENCES")}</h1>
                <p>{t("JOBS-DESCRIPTION")}</p>
              </div>
              <div className="experiences-container">
                <div className="job1 job">
                  <span className="date">{`08/2021 - ${t(
                    "MARKETING-BUSINESS"
                  )}`}</span>
                  <span className="time-line"></span>
                  <span className="role">{t("FULLSTACK")}</span>
                  <span className="company">Blanko</span>
                  <span className="technologies">
                    node - MySql - NextJs - javaScript/TypeScript
                  </span>
                </div>
                <div className="job2 job">
                  <span className="date">{`07/2022 - ${t(
                    "IOT-PLATFORM"
                  )}`}</span>
                  <span className="time-line"></span>
                  <span className="role">{t("FULLSTACK")}</span>
                  <span className="company">Manusis4</span>
                  <span className="technologies">
                    node - mongoDb - React/Angular - javascript/Typescript
                  </span>
                </div>
              </div>
            </section>
          </JobsContainer>
          <ProjectsContainer theme={theme}>
            <div id="projects"></div>
            <section className="projects">
              <div className="top">
                <h1>{t("PROJECTS")}</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit laboriosam unde ipsa commodi necessitatibus ab, minima
                  deserunt id similique temporibus quis illo veritatis at vero
                  quaerat labore magni perspiciatis optio!
                </p>
              </div>
              <div className="cards">
                {projectList.map((project, index) => (
                  <ProjectCard
                    key={index}
                    title={t(project.title)}
                    description={t(project.description)}
                    technologies={project.technologies}
                    theme={theme}
                    image={project.image}
                    webRepo={project.webRepo}
                    apiRepo={project.apiRepo}
                    appRepo={project.appRepo}
                    figmaUrl={project.figmaUrl}
                    liveLink={project.liveLink}
                    data={project.data}
                  />
                ))}
              </div>
            </section>
          </ProjectsContainer>
          <CertsContainer theme={theme}>
            <div id="certifications"></div>
            <section className="certifications" id="certifications">
              <InfiniteSlider
                items={[
                  <Image
                    key={"/big-data.png"}
                    className="img"
                    src={"/big-data.png"}
                    alt="big-data Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/ciencia-de-dados.png"}
                    src={"/ciencia-de-dados.png"}
                    alt="science data"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/docker.png"}
                    src={"/docker.png"}
                    alt="docker Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/english.png"}
                    src={"/english.png"}
                    alt="english Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/flexbox.png"}
                    src={"/flexbox.png"}
                    alt="flexbox Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/grid-layout.png"}
                    src={"/grid-layout.png"}
                    alt="grid layout Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/lambda.png"}
                    src={"/lambda.png"}
                    alt="lambda Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/python.png"}
                    src={"/python.png"}
                    alt="python Certification"
                    width={350}
                    height={250}
                  />,
                  <Image
                    className="img"
                    key={"/typescript.png"}
                    src={"/typescript.png"}
                    alt="typescript Certification"
                    width={350}
                    height={250}
                  />,
                ]}
              />
            </section>
          </CertsContainer>
        </main>
        <Footer />
      </LayoutContainer>
    </>
  );
}
