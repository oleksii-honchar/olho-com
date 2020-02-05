/** @jsx jsx */
import { jsx } from "@emotion/core";
import React, { ReactElement } from "react";

import { headerCss} from "./Header.style"

export function Header(): ReactElement {
  return (
    <div className="row justify-content-center" css={headerCss}>
      <div className="col col-sm-12 col-md-10 col-lg-9 d-flex align-items-center">
        <div className="avatar">
          <img src="images/userpic-02.jpg" />
        </div>
        <div className="d-flex flex-column justify-content-center full-name-container">
          <h1 className="align-self-center white-shadow full-name">
            Oleksii Honchar
          </h1>
          <h5 className="align-self-center white-shadow full-title">
            Full-cycle Software Engineer
          </h5>
        </div>
      </div>
    </div>
  );
}
