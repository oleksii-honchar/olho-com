/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";
import { ThemeProvider } from "emotion-theming";
import Color from 'color';

export function StyleThemeProvider(
  props: InferProps<typeof StyleThemeProvider.propTypes>
): ReactElement {

  const colorSystem = {
    primary: {
      main: '#38567b',
      dark: '#022d4f',
      light: '#6682aa',
    }
  };

  const theme = {
    colorSystem,
    colors: {
      link: {
        default: colorSystem.primary.light,
        hover: colorSystem.primary.main
      },
      navbar: {
        backgroundColor: Color(colorSystem.primary.dark).darken(.3).string()
      }
    }
  };

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

StyleThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
