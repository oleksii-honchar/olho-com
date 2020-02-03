import React, { ReactElement } from "react";

import { AppConfigProvider, appConfig } from "src/contexts";
import { Footer } from "src/components/Footer";
import { Navigation } from "src/components/Navigation";
import { StyleThemeProvider } from "src/components/StyleThemeProvider";
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
            <div className="col col-md-10 col-lg-10">
              <About />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-md-10 col-lg-10">
              <HardSkills />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col col-md-10 col-lg-10">
              <Footer />
            </div>
          </div>
        </div>
      </StyleThemeProvider>
    </AppConfigProvider>
  );
}
