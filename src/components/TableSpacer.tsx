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
        background: ${props.color};
        padding: 0 !important;
        @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
          width: 10px;
        }

        @media screen and (min-device-width: 768px) {
          width: ${theme.sizes.tableSpacerWidth};
        }
      `}
    ></td>
  );
}

TableSpacer.propTypes = {
  color: PropTypes.string
};
