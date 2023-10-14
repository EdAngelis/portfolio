"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { HomeContainer } from "./home.style";
import { JobsContainer } from "./jobs.style";
import { CertsContainer } from "./certs.style";
import "../i18n";

export default function Home() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <HomeContainer>
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
            <h2>FullStack Developer</h2>
            <a>Bachelor`s Degree in Information Systems</a>
            <div className="links">
              <a href="https://www.linkedin.com/in/ed-angelis-ribeiro-2797b57a/">
                LINKEDIN
              </a>
              <a href="https://github.com/EdAngelis">GITHUB</a>
            </div>
          </div>
          <div className="github-chart">
            {/* <Image
              src={"http://ghchart.rshah.org/0D7CFF/EdAngelis"}
              alt="Ed Angelis's Github chart"
              width={1000}
              height={300}
            /> */}
          </div>
        </section>
      </HomeContainer>
      <JobsContainer>
        <section className="jobs-section" id="jobs-section">
          <h1>Jobs Experiences</h1>
          <div className="experiences">
            <div className="job1">
              <span className="job1-date">08/2021 - Marketing Business</span>
              <span className="job1-company">Blanko</span>
              <span className="job1-role">FullStack Developer</span>
              <span className="job1-technologies">
                node - MySql - NextJs - javascript
              </span>
            </div>
            <div className="job2">
              <span className="job2-date">07/2022 - Iot Platform</span>
              <span className="job2-company">Manusis4</span>
              <span className="job2-role">FullStack Developer</span>
              <span className="job2-technologies">
                node - mongoDb - React/Angular - javascript/Typescript
              </span>
            </div>
          </div>
        </section>
      </JobsContainer>

      <CertsContainer>
        <section className="certifications" id="certifications">
          <div>
            <Image
              src={"/ai.png"}
              alt="Ai Certification"
              width={100}
              height={100}
            />
          </div>
          <Image
            src={"/big-data.png"}
            alt="big-data Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/ciencia-de-dados.png"}
            alt="science data"
            width={100}
            height={100}
          />
          <Image
            src={"/docker.png"}
            alt="docker Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/english.png"}
            alt="english Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/flexbox.png"}
            alt="flexbox Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/grid-layout.png"}
            alt="grid layout Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/lambda.png"}
            alt="lambda Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/python.png"}
            alt="python Certification"
            width={100}
            height={100}
          />
          <Image
            src={"/typescript.png"}
            alt="typescript Certification"
            width={100}
            height={100}
          />
        </section>
      </CertsContainer>
    </>
  );
}
