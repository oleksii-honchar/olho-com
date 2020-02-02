import React, { ReactElement } from "react";

import { AppConfigProvider, appConfig } from "src/contexts";
import { Navigation } from "src/components/Navigation";
import { Footer } from "src/components/Footer";
import { About } from "./components/About";
import { HardSkills } from "./components/HardSkills";

export function Root(): ReactElement {
  return (
    <AppConfigProvider value={appConfig}>
      <Navigation />
      <div className="container">
        <About />
        <HardSkills />
        <Footer />
      </div>
    </AppConfigProvider>
  );
}
