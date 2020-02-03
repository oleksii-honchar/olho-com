/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { useTheme } from "emotion-theming";
import PropTypes, { InferProps } from "prop-types";

export function TableSpacer(
  props: InferProps<typeof TableSpacer.propTypes>
): ReactElement {
  const theme: any = useTheme();
  return (
    <td
      css={css`
        width: ${theme.sizes.tableSpacerWidth};
        background: ${props.color};
        padding: 0 !important;
      `}
    ></td>
  );
}

TableSpacer.propTypes = {
  color: PropTypes.string
};
