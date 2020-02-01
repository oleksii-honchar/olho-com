/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

const avatarDimension = 200;

const navCss = css`
  background-image: url('/assets/images/bg-02-flipped.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% -140px;
  border: none;

  &.navbar {
    border-radius: 0px;
  }

  h2 {
    text-shadow: 0px 2px 2px #333;
  }

  
  a {
    @include transition(color .2s, border-color .5s)
  }
  .navbar-brand > img {
    border: 4px solid white;
    width: ${avatarDimension}px;
    height: ${avatarDimension}px;
    border-radius: ${avatarDimension + 10}px;
    outline: none;
  }
  
`;

export function NavigationContainer(
  props: InferProps<typeof NavigationContainer.propTypes>
): ReactElement {
  return(
    <nav className="navbar navbar-light bg-light" css={navCss}>
      <div className="container d-flex justify-content-center">
        <div className="row col-md-10 col-lg-10">
          {props.children}
        </div>
      </div>
    </nav>
  )
}

NavigationContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
