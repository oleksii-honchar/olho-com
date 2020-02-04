/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement, Fragment } from "react";
import { TableSpacer } from "src/components/TableSpacer";
import { useTheme } from "emotion-theming";

export function Education(): ReactElement {
  const theme: any = useTheme();

  const CellSpacer = (): ReactElement => (
    <TableSpacer color={theme.colors.sections.education.spacerBackground} />
  );

  return (
    <section id="education">
      <h1>Education</h1>
      <table className="table">
        <tbody>
          <tr>
            <CellSpacer />
            <td>1996 - 2001</td>
            <td>
              <span>
                Ukraine, Lugansk. East-Ukrainian National University named Dalia
              </span>
              <dl>
                <div className="d-flex">
                  <dt>Education:&nbsp;</dt>
                  <dd>High</dd>
                </div>
                <div className="d-flex">
                  <dt>Grade:&nbsp;</dt>
                  <dd>MA with distinction</dd>
                </div>
                <div className="d-flex">
                  <dt>Speciality:&nbsp;</dt>
                  <dd>
                    Engineer of hydraulic and pneumatic machines and apparatus
                  </dd>
                </div>
              </dl>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table">
        <tbody>
          <tr>
            <CellSpacer />
            <td>1993 - 1996</td>
            <td>
              <span>Ukraine, Lugansk. Physics and Mathematics Lyceum № 24</span>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
