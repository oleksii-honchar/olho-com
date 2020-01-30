import * as React from "react";
import * as ReactDOM from "react-dom";

import { LoggerService } from "@ciklum/logan"; // eslint-disable-line no-alert

import { Root } from "src/pages/Root";

LoggerService.setGlobalTitle(process.env.PKG_NAME);

window.config = { logLevel: process.env.LOG_LEVEL };
const logger = new LoggerService();

logger.setTitle("index");

function startApp() {
  logger.info("Starting app...");

  ReactDOM.render(<Root />, document.querySelector("#app-root"));
}

startApp();
