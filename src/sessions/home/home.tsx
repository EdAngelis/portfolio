"use client";

import React from "react";
import { appContext } from "@/context";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { HomeContainer } from "./home.style";
import "../../i18n";

export default function Home() {
  const { theme } = React.useContext(appContext);
  const { t } = useTranslation();
  const [animate, setAnimate] = React.useState<boolean>(false);

  React.useEffect(() => {
    setAnimate(true);
  }, [theme]);

  return (
    <>
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
      </main>
    </>
  );
}
