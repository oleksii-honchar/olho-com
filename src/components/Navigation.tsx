/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";

import { SocialLinks } from "src/components/SocialLinks";
import { NavigationContainer } from "src/components/NavigationContainer";

export function Navigation(): ReactElement {
  return (
    <NavigationContainer>
      <div className="col col-3 d-flex flex-column justify-content-center">
        <div className="avatar">
          <img src="/assets/images/userpic-02.jpg" />
        </div>
      </div>
      <div className="col col-6 d-flex flex-column justify-content-center">
        <h1
          className="align-self-center white-shadow"
          css={css`
            font-size: 4rem;
          `}
        >
          Oleksii Honchar
        </h1>
        <h5
          className="align-self-center white-shadow"
          css={css`
            font-size: 1.5rem;
          `}
        >
          Full-cycle Software Engineer
        </h5>
      </div>
      <div className="col col3 align-items-end">
        <div
          className="align-self-end-end"
          css={css`
            padding-top: 5px;
          `}
        >
          <SocialLinks />
        </div>
      </div>
    </NavigationContainer>
  );
}
