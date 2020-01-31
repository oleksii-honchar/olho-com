import * as React from "react";

import { AppConfigProvider, appConfig } from "src/contexts";

export const Root = () => {
  return (
    <AppConfigProvider value={appConfig}>
      <div>
        <h1>Hello World!</h1>
      </div>
    </AppConfigProvider>
  );
};
