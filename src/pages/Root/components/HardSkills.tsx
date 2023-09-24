/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement, Fragment } from "react";
import { useTheme } from "@emotion/react";

import { YearsBadge } from "src/components/YearsBadge";
import { TableSpacer } from "src/components/TableSpacer";

export function HardSkills(): ReactElement {
  const theme: any = useTheme();

  const hardSkillsCss = css`
    table {
      max-width: 500px;
    }
    td {
      @media screen and (max-device-width: 375px) {
        padding: 0.1rem;
      }
      @media screen and (min-device-width: 376px) {
        padding: 0.75rem;
      }
    }
  `;
  const rustyColorCss = css`
    color: darkgray;
  `;

  const CellSpacer = (): ReactElement => <TableSpacer color={theme.colors.sections.hardSkills.spacerBackground} />;

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
                  <li>React, Redux</li>
                  <li>Angular, RxJs, Lodash, HTML, HBS, Jade</li>
                  <li>Jest, Mocha, Cucumber</li>
                  <li>Webpack, Parcel, Vite</li>
                  <li>CSS, SASS, TailWindCss</li>
                </ul>
                <h3>Backend</h3>
                <ul>
                  <li>Node.js, Fastify.js, Express.js, WebSocket, Socket.io</li>
                  <li>Go, Python, Ruby</li>
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
                  <li>AWS, GCP</li>
                  <li>Terraform, CDKTF</li>
                  <li>Docker, Nginx, Kafka, RabbitMQ</li>
                  <li>Grafana LGTM stack</li>
                </ul>

                <h3>Languages</h3>
                <ul>
                  <li>English (C1)</li>
                  <li>Spanish (A1)</li>
                  <li>Ukrainian (native)</li>
                  <li>Russian (C1)</li>
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
                <span className="alight-self-start badge badge-info">1.2021</span>
              </div>
            </td>
          </tr>
          <tr className="d-flex">
            <CellSpacer />
            <td>
              <ul className="float-left">
                <li>
                  Javascript/TypeScript <YearsBadge years={12.5} />
                </li>
                <li>
                  React, Redux <YearsBadge years={4} />
                </li>
                <li>
                  Node.js <YearsBadge years={9.5} />
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
                  <span css={rustyColorCss}>Ruby, R’o’R</span>&nbsp;
                  <YearsBadge years={2} />
                </li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
