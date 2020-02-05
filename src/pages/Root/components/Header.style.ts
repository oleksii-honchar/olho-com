/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const headerCss = css`
  background-image: url("images/bg-02-flipped.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% bottom;
  border: none;

  @media screen and (max-device-width: 768px) {
    height: 140px;
    .col {
      height: 140px;
    }
  }

  @media screen and (min-device-width: 769px) {
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
    @media screen and (max-device-width: 768px) {
      position: unset;
    }

    @media screen and (min-device-width: 769px) {
      position: absolute;
    }

    & > img {
      border: 4px solid white;
      height: 100%;
      border-radius: 100%;
      outline: none;

      @media screen and (max-device-width: 768px) {
        width: 100px;
      }

      @media screen and (min-device-width: 769px) and (max-device-width: 1200px) {
        width: 140px;
      }

      @media screen and (min-device-width: 1201px) {
        width: 200px;
      }
    }
  }

  .full-name {
    @media screen and (max-device-width: 375px) { font-size: 1.8rem; }
    @media screen and (min-device-width: 376px) and (max-device-width: 768px) { font-size: 2rem; }
    @media screen and (min-device-width: 769px) and (max-device-width: 1200px) { font-size: 2.5rem; }
    @media screen and (min-device-width: 1201px) { font-size: 3.6rem; }
  }
  
  .full-title {
    @media screen and (max-device-width: 375px) { font-size: 0.8rem; }
    @media screen and (min-device-width: 376px) and (max-device-width: 768px) { font-size: 1rem;}
    @media screen and (min-device-width: 769px) and (max-device-width: 1200px) { font-size: 1.25rem; }
    @media screen and (min-device-width: 1201px) { font-size: 1.5rem; }
  }

  .full-name-container {
    @media screen and (max-device-width: 768px) { margin: auto;}

    @media screen and (min-device-width: 769px) { margin: auto; }
  }
`;