/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

const avatarDimension = 200;

const navCss = css`
  background-image: url('/assets/images/bg-02-flipped.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% bottom;
  border: none;

  &.navbar {
    border-radius: 0px;
  }

  .white-shadow {
    text-shadow: #FFF 0px 0px 5px, #FFF 0px 0px 10px, #FFF 0px 0px 15px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 10px, #FFF 0px 0px 10px;
  }

  a {
    @include transition(color .2s, border-color .5s)
  }
  .avatar {
    padding: 10px;
    & > img {
      border: 4px solid white;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      outline: none;
    }
  }  
`;

export function NavigationContainer(
  props: InferProps<typeof NavigationContainer.propTypes>
): ReactElement {
  return(
      <div className="container-fluid d-flex justify-content-center" css={navCss}>
        <div className="row w-75">
          {props.children}
        </div>
      </div>
  )
}

NavigationContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
