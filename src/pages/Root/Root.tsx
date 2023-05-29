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
  return (
    <AppConfigProvider value={appConfig}>
      <StyleThemeProvider>
        <Navigation />
        <div className="container-fluid">
          <Header />
          <div className="row justify-content-center">
            <div className="col col-sm-12 col-md-9 col-lg-7">
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
