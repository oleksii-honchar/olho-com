// import * as React from "react";
import React, { ReactElement } from "react";

import { AppConfigProvider, appConfig } from "src/contexts";
import { Navigation } from "src/components/Navigation";
import { Footer } from "src/components/Footer";
import { About } from "./components/About";

export function Root(): ReactElement {
  return (
    <AppConfigProvider value={appConfig}>
      <div className="container">
        <Navigation/>
        <About/>
        <Footer/>
      </div>
    </AppConfigProvider>
  );
}
