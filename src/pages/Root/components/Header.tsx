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

    @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
      height: 140px;
      .col {
        height: 140px;
      }
    }

    @media screen and (min-device-width: 768px) {
      height: 260px;
      .col {
        height: 260px;
      }
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
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        position: unset;
      }

      @media screen and (min-device-width: 768px) {
        position: absolute;
      }

      & > img {
        border: 4px solid white;
        height: 100%;
        border-radius: 100%;
        outline: none;

        @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
          width: 100px;
        }

        @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
          width: 140px;
        }

        @media screen and (min-device-width: 1200px) {
          width: 200px;
        }
      }
    }

    .full-name {
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        font-size: 2rem;
      }

      @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
        font-size: 2.5rem;
      }

      @media screen and (min-device-width: 1200px) {
        font-size: 3.6rem;
      }
    }
    .full-title {
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        font-size: 1rem;
      }

      @media screen and (min-device-width: 768px) and (max-device-width: 1200px) {
        font-size: 1.25rem;
      }

      @media screen and (min-device-width: 1200px) {
        font-size: 1.5rem;
      }
    }

    .full-name-container {
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        margin: auto;
      }

      @media screen and (min-device-width: 768px) {
        margin: auto;
      }
    }
  `;

  return (
    <div className="row justify-content-center" css={headerCss}>
      <div className="col col-sm-12 col-md-10 col-lg-9 d-flex align-items-center">
        <div className="avatar">
          <img src="/assets/images/userpic-02.jpg" />
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
