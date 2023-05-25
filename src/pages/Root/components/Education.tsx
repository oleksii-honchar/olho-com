/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement, Fragment } from "react";
import { TableSpacer } from "src/components/TableSpacer";
import { useTheme } from "@emotion/react";

export function Education(): ReactElement {
  const theme: any = useTheme();

  const educationCss = css`
    td {
      @media screen and (max-device-width: 375px) {
        padding: 0.1rem;
      }
      @media screen and (min-device-width: 376px) {
        padding: 0.75rem;
      }
    }
  `;

  const CellSpacer = (): ReactElement => <TableSpacer color={theme.colors.sections.education.spacerBackground} />;

  return (
    <section id="education" css={educationCss}>
      <h2>Education</h2>
      <table className="table">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td
              css={css`
                min-width: 110px;
              `}
            >
              1996 - 2001
            </td>
            <td>
              <span>Ukraine, Lugansk. East-Ukrainian National University named Dalia</span>
              <div className="d-flex">
                <dl className="row">
                  <dt className="col-sm-3">Education</dt>
                  <dd className="col-sm-9">High</dd>
                  <dt className="col-sm-3">Grade</dt>
                  <dd className="col-sm-9">MA with distinction</dd>
                  <dt className="col-sm-3">Speciality</dt>
                  <dd className="col-sm-9">Engineer of hydraulic and pneumatic machines and apparatus</dd>
                </dl>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td
              css={css`
                min-width: 110px;
              `}
            >
              1993 - 1996
            </td>
            <td>
              <span>Ukraine, Lugansk. Physics and Mathematics Lyceum № 24</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
