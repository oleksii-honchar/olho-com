/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
    <div className="row justify-content-center">
      <div className="col col-md-12 col-lg-12" css={elCss}>
        <table>
          <tbody>
            <tr>
              <td>
                <Icon name="copyright" />
                &nbsp;
                {moment().format("YYYY")}&nbsp;
                <span className="name">Oleksii Honchar</span>
                <span className="sub-title">
                  &nbsp;- Full-cycle Software Engineer
                </span>
              </td>

              <td>
                <SocialLinks />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
