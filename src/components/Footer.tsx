/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement } from "react";
import * as moment from "moment";

import { Icon } from "src/components/Icon";
import { SocialLinks } from "src/components/SocialLinks";

export function Footer(): ReactElement {
  const elCss = css`
    border-top: 1px solid lightgrey;
    padding-top: 5px;
    padding-bottom: 5px;
    table {
      width: 100%;
    }
  `;

  return (
    <div css={elCss}>
      <table>
        <tbody>
          <tr>
            <td className="d-flex justify-content-between">
              <div>
                <Icon name="copyright" />
                &nbsp;
                {moment().format("YYYY")}&nbsp;
                <span className="name">Oleksii Honchar</span>
                <span className="sub-title">&nbsp;- Full-cycle Software Engineer (v2020031315)</span>
              </div>
              <SocialLinks />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
