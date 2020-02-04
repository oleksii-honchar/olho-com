/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement, Fragment } from "react";
import { TableSpacer } from "src/components/TableSpacer";
import { useTheme } from "emotion-theming";

export function SoftSkills(): ReactElement {
  const theme: any = useTheme();

  const CellSpacer = (): ReactElement => (
    <TableSpacer color={theme.colors.sections.softSkills.spacerBackground} />
  );

  return (
    <section id="soft-skills">
      <h1>Soft skills</h1>
      <table className="table">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <h3>Strengths</h3>
              <ul>
                <li>
                  <strong>Catalyst</strong> - my objective is to act and to
                  initiate action
                </li>
                <li>
                  <strong>Coach</strong> - power to enable people’s potential
                </li>
                <li>
                  <strong>Deliverer</strong> - take responsibility, strong
                  emotional bound to all promises
                </li>
              </ul>
              <h3>Interests</h3>
              <ul>
                <li>
                  Hiking, sports, eastern philosophy, music, design, literature,
                  functional training
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
