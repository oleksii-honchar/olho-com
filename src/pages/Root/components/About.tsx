/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement, Fragment } from "react";

export function About(): ReactElement {
  return (
    <section id="about">
      <h2
        css={css`
          padding-top: 10px;
        `}
      >
        About
      </h2>
      <p>
        I&apos;m a GettingThingDone IT guy with a +20y story about software development, team management and leadership in different domains, processes and technologies. 
      </p>
      <p>
        I would describe myself as a highly autonomous and collaborative problem solver. I'm strong in putting things together and making it work. Right balance between trade-offs, fast decisions, iterative experimentation, eagle-eye view and hands-on mentality are key factors of my success. I’m driven by purpose and impact.
      </p>
      <p>
        My experience covers such areas as: finance, e-commerce, healthcare, advertising, UCaaS. The scale of projects was from startup to enterprise marketplace. My role also was quite diverse. Usually it was a mix of development, team management/coaching and SDLC setup.
      </p>
    </section>
  );
}
