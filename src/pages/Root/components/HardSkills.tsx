/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement, Fragment } from "react";
import { useTheme } from "emotion-theming";

import { YearsBadge } from "src/components/YearsBadge";
import { TableSpacer } from "src/components/TableSpacer";

export function HardSkills(): ReactElement {
  const theme: any = useTheme();

  const hardSkillsCss = css`
    table {
      max-width: 500px;
    }
    td {
      @media screen and (max-device-width: 375px) { padding: 0.1rem; }
      @media screen and (min-device-width: 376px) { padding: 0.75rem; }
    }  
  `;
  const rustyColorCss = css`
    color: darkgray;
  `;

  const CellSpacer = (): ReactElement => (
    <TableSpacer color={theme.colors.sections.hardSkills.spacerBackground} />
  );

  return (
    <section id="hard-skills" css={hardSkillsCss}>
      <h2>Hard skills</h2>
      <div className="clearfix">
      <table className="table float-left">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <h3>Frontend</h3>
              <ul>
                <li>JavaScript / TypesScript</li>
                <li>Angular, RxJs, Lodash, HTML, HBS, Jade</li>
                <li>React, Redux</li>
                <li>Jest, Mocha, Jasmine, Cucumber</li>
                <li>Webpack/Gulp</li>
                <li>CSS,SASS, Styled, Styl, LESS, Twitter-Bootstrap</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js, Express.js, WebSocket, Socket.io, Ruby</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      <table className="table float-left">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <h3>Database</h3>
              <ul>
                <li>PostgreSQL, MongoDB, Redis, Couchbase</li>
              </ul>

              <h3>Cloud/Ops</h3>
              <ul>
                <li>AWS, Google Cloud</li>
                <li>Docker, Nginx, Kafka, RabbitMQ</li>
              </ul>

              <h3>Languages</h3>
              <ul>
                <li>Russian/Ukrainian - fluently</li>
                <li>English - advanced</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
      <table className="table">
        <tbody>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <div className="d-flex align-items-center">
                <h3 className="">Technological experience</h3>&nbsp;
                <span className="alight-self-start badge badge-info">
                  6.2020
                </span>
              </div>
            </td>
          </tr>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <ul className="float-left">
                <li>
                  Javascript/TypeScript <YearsBadge years={12} />
                </li>
                <li>
                  Angular <YearsBadge years={3} />
                </li>
                <li>
                  React, Redux <YearsBadge years={4} />
                </li>
                <li>
                  Node.js, Express.js <YearsBadge years={9} />
                </li>
                <li>
                  PostgreSQL <YearsBadge years={1} />
                </li>
              </ul>
              <ul className="float-left">
                <li>
                  MongoDB(Mongoose) <YearsBadge years={5.5} />
                </li>
                <li>
                  <span css={rustyColorCss}>Require.js +CoffeScript</span>
                  &nbsp;
                  <YearsBadge years={4.5} />
                </li>
                <li>
                  <span css={rustyColorCss}>Ruby, R’o’R</span>&nbsp;
                  <YearsBadge years={2} />
                </li>
                <li>
                  <span css={rustyColorCss}>1c</span>&nbsp;
                  <YearsBadge years={11} />
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
