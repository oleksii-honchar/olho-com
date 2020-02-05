/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
  const rootCss = css`
    section {
      @media screen and (max-device-width: 375px) {
        font-size: 1rem !important;
      };
    
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        font-size: 1.2rem !important;
      };
    
      @media screen and (min-device-width: 768px) {
        font-size: 1.4rem !important;
      };
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
