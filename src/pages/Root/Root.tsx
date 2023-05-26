/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement } from "react";

import { AppConfigProvider, appConfig } from "src/contexts";
import { Footer } from "src/components/Footer";
import { Navigation } from "src/components/Navigation";
import { StyleThemeProvider } from "src/contexts/StyleThemeProvider";
import { SoftSkills } from "src/pages/Root/components/SoftSkills";
import { Education } from "src/pages/Root/components/Education";
import { Experience } from "src/pages/Root/components/Experience/index";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { HardSkills } from "./components/HardSkills";

export function Root(): ReactElement {
  const headers0 = css`
    h1 {
      font-size: 1.3rem;
    }

    h2 {
      font-size: 1.2rem;
    }

    h3 {
      font-size: 1.1rem;
    }

    h4 {
      font-size: 1rem;
    }

    h5 {
      font-size: 1rem;
    }

    h6 {
      font-size: 1rem;
    }
  `;
  const headers1 = css`
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    h4 {
      font-size: 1.2rem;
    }

    h5 {
      font-size: 1.1rem;
    }

    h6 {
      font-size: 1rem;
    }
  `;
  const rootCss = css`
    section {
      @media screen and (max-device-width: 375px) {
        ${headers0}
      }

      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        ${headers0}
      }

      @media screen and (min-device-width: 768px) {
        ${headers1}
      }

      @media screen and (min-device-width: 1200px) {
        ${headers1}
      }

      @media screen and (min-device-width: 1600px) {
        ${headers1}
      }
    }
  `;
  return (
    <AppConfigProvider value={appConfig}>
      <StyleThemeProvider>
        <Navigation />
        <div className="container-fluid" css={rootCss}>
          <Header />
          <div className="row justify-content-center">
            <div className="col col-sm-12 col-md-10 col-lg-9">
              <About />
              <HardSkills />
              <SoftSkills />
              <Education />
              <Experience />
              <Footer />
            </div>
          </div>
        </div>
      </StyleThemeProvider>
    </AppConfigProvider>
  );
}
