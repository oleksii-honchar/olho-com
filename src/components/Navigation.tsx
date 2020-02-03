/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { useTheme } from 'emotion-theming'

export function Navigation(): ReactElement {
  const theme: any = useTheme();
  const navCss = css`
    background-color: ${theme.colors.navbar.backgroundColor} !important;
  `;

  return (
    <nav
      className="navbar navbar-expand-l navbar-dark bg-dark sticky-top"
      css={navCss}
    >
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            src="/assets/images/maze.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </a>
      </div>
    </nav>
  );
}
