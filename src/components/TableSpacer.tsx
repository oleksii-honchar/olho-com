/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { useTheme } from "emotion-theming";
import PropTypes, { InferProps } from "prop-types";

export function TableSpacer(
  props: InferProps<typeof TableSpacer.propTypes>
): ReactElement {
  const theme: any = useTheme();
  const sizeCss = css`
    @media screen and (max-device-width: 375px) {
      width: ${theme.sizes.tableSpacerWidthLittle};
    }
    
    @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
      width: ${theme.sizes.tableSpacerWidthSmall};
    }

    @media screen and (min-device-width: 769px) {
      width: ${theme.sizes.tableSpacerWidth};
    }
  `;

  return (
    <td
      className="d-flex align-items-stretch"
      css={css`
        padding: 0 !important;
        ${sizeCss};
      `}
    >
      <div
        css={css`
          background: ${props.color};
          ${sizeCss};
          //border-radius: 5px;
        `}
      ></div>
    </td>
  );
}

TableSpacer.propTypes = {
  color: PropTypes.string
};

TableSpacer.defaultProps = {
  color: 'none'
};