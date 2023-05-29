import "react-app-polyfill/ie11";
// import 'core-js';
import * as React from "react";
import * as ReactDOM from "react-dom";
// @ts-ignore
import { LoggerService } from "@ciklum/logan";

import { Root } from "src/pages/Root/Root.tsx";

window.config = { logLevel: process.env.LOG_LEVEL };

LoggerService.setGlobalTitle(process.env.PKG_NAME);

async function startApp(): Promise<T> {
  const logger = new LoggerService();
  logger.setTitle("index");

  logger.info("Starting app...");
  ReactDOM.render(<Root />, document.querySelector("#app-root"));
}

startApp();
