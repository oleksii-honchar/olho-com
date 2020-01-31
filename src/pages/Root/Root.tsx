// import * as React from "react";
import React, { ReactElement } from "react";

import { AppConfigProvider, appConfig } from "src/contexts";
// @ts-ignore
import * as styles from "./Root.css";

export function Root(): ReactElement {
  return (
    <AppConfigProvider value={appConfig}>
      <div>
        <h1 className={styles.title}>Hello World!</h1>
      </div>
    </AppConfigProvider>
  );
}
