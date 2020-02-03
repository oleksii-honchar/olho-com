/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React, { ReactElement, Fragment } from "react";

import { YearsBadge } from "src/components/YearsBadge";

export function HardSkills(): ReactElement {
  const colorColCss = css`
    width: 20px;
    background: antiquewhite;
  `;

  const hardSkillsCss = css`
    table,
    tr,
    td {
      border: none;
    }
  `;

  const rustyColorCss = css`
    color: darkgray;
  `;

  return (
    <section css={hardSkillsCss} id="hard-skills">
      <h1>Hard skills</h1>
      <table className="table">
        <tbody>
          <tr>
            <td css={colorColCss}></td>
            <td
              css={css`
                width: 50%;
              `}
            >
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
            <td css={colorColCss}></td>
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
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td css={colorColCss}></td>
            <td>
              <div className="d-flex">
                <h3 className="">Technological experience</h3>&nbsp;
                <span
                  className="alight-self-start badge badge-info"
                  css={css`
                    height: 75%;
                  `}
                >
                  1.2020
                </span>
              </div>
            </td>
          </tr>
          <tr>
            <td css={colorColCss}></td>
            <td>
              <ul>
                <li>
                  Javascript/TypeScript <YearsBadge years={11} />
                </li>
                <li>
                  Angular <YearsBadge years={3} />
                </li>
                <li>
                  React, Redux <YearsBadge years={3} />
                </li>
                <li>
                  Node.js, Express.js <YearsBadge years={8} />
                </li>
              </ul>
            </td>
            <td
              css={css`
                width: 20px;
              `}
            ></td>
            <td>
              <ul>
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
