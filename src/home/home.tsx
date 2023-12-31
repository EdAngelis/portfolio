"use client";
import "../i18n";
import React from "react";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import { appContext } from "@/context";
import { useTranslation } from "react-i18next";
import { projectList } from "./projects-list";
import Header from "../sessions/header/header";
import Footer from "../sessions/footer/footer";
import ProjectCard from "@/components/project-card/project-card";
import InfiniteSlider from "@/components/infinite-slider/infinite-slider";
import Typewriter from "@/components/typing/typing";
import {
  HomeContainer,
  JobsContainer,
  CertsContainer,
  ProjectsContainer,
  LayoutContainer,
  AboutMe,
} from "../styles";

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
        <main className={`layout-container`}>
          <HomeContainer theme={theme}>
            <div className="background"></div>
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
                <div className="data">
                  <h2>{t("FULLSTACK")}</h2>
                  <span>{t("DEGREE")}</span>
                  <div className="links">
                    <a href="https://www.linkedin.com/in/ed-angelis-ribeiro-2797b57a/">
                      LINKEDIN
                    </a>
                    <a href="https://github.com/EdAngelis">GITHUB</a>
                  </div>
                  <div className="typewriter-wrapper">
                    <Typewriter
                      text={[
                        {
                          typeText: `${t("TYPING.TEXT.1")}`,
                          static: `${t("TYPING.CLEAN-CODE")}`,
                        },
                        {
                          typeText: `${t("TYPING.TEXT.2")}`,
                          static: `${t("TYPING.CLEAN-CODE")}`,
                        },
                        {
                          typeText: `${t("TYPING.TEXT.3")}`,
                          static: `${t("TYPING.CLEAN-CODE")}`,
                        },
                        {
                          static: `${t("TYPING.AGILE")}`,
                          typeText: `${t("TYPING.TEXT.4")}`,
                        },
                        {
                          static: `${t("TYPING.AGILE")}`,
                          typeText: `${t("TYPING.TEXT.5")}`,
                        },
                        {
                          static: `${t("TYPING.AGILE")}`,
                          typeText: `${t("TYPING.TEXT.6")}`,
                        },
                        {
                          static: `${t("TYPING.AGILE")}`,
                          typeText: `${t("TYPING.TEXT.7")}`,
                        },
                      ]}
                      delay={150}
                      infinite={true}
                    />
                  </div>
                </div>
              </div>
            </section>
          </HomeContainer>
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <JobsContainer
                className={`${inView ? "animate" : ""}`}
                theme={theme}
              >
                <div id="jobs-section"></div>
                <section ref={ref} className={`jobs-section`}>
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
            )}
          </InView>
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <ProjectsContainer
                className={`${inView ? "animate" : ""}`}
                ref={ref}
                theme={theme}
              >
                <div id="projects"></div>
                <section className="projects">
                  <div className="top">
                    <h1>{t("PROJECTS")}</h1>
                    <p>{t("PROJECTS-DESCRIPTION")}</p>
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
            )}
          </InView>

          <CertsContainer theme={theme}>
            <div id="certifications"></div>
            <section className="certifications">
              <InfiniteSlider />
            </section>
          </CertsContainer>
          <InView threshold={0.1} triggerOnce>
            {({ inView, ref }) => (
              <AboutMe
                ref={ref}
                className={`${inView ? "animate" : ""}`}
                theme={theme}
              >
                <div id="about-me"></div>
                <section className="about-me">
                  <div className="picture">
                    <Image src={"/avatar.png"} alt="avatar" fill={true} />
                  </div>
                  <div className="text">
                    <h1>{t("ABOUT-ME")}</h1>
                    <h2 className="title">{t("ABOUT-SECTION.TITLE")}</h2>
                    <p>{t("ABOUT-SECTION.DESCRIPTION.P1")}</p>
                    <p>{t("ABOUT-SECTION.DESCRIPTION.P2")}</p>
                    <p>{t("ABOUT-SECTION.DESCRIPTION.P3")}</p>
                  </div>
                </section>
              </AboutMe>
            )}
          </InView>
        </main>
        <Footer />
      </LayoutContainer>
    </>
  );
}
