/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";

export function Header(): ReactElement {
  const headerCss = css`
    background-image: url("/assets/images/bg-02-flipped.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% bottom;
    border: none;

    .col {
      min-height: 260px;
    }

    .white-shadow {
      text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
        #fff 0px 0px 10px, #fff 0px 0px 10px, #fff 0px 0px 10px,
        #fff 0px 0px 10px, #fff 0px 0px 10px, #fff 0px 0px 10px;
    }

    a {
      @include transition(color 0.2s, border-color 0.5s);
    }
    .avatar {
      padding: 10px;
      position: absolute;
      & > img {
        border: 4px solid white;
        width: 100%;
        max-width: 200px;
        height: 100%;
        border-radius: 100%;
        outline: none;
      }
    }
  `;

  return (
    <div className="row justify-content-center" css={headerCss}>
      <div className="col col-md-9 col-lg-9 d-flex align-items-center">
        <div className="avatar">
          <img src="/assets/images/userpic-02.jpg" />
        </div>
        <div
          className="d-flex flex-column justify-content-center"
          css={css`
            margin: auto;
          `}
        >
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
      </div>
    </div>
  );
}
