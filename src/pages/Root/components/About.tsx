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
        Hello! My name is Alex. I&apos;m a GettingThingDone IT guy with a long story about software development and team
        management in different domains, processes and technologies. Long time ago I started as an intern within one
        successful gaming startup. Year after year I was constantly learning, coding and accepting the challenges. Until
        once I&apos;ve discovered myself helping others to conquer their peaks. I&apos;m leading and coaching teams from
        2 up to 40 people for more than 5 years. And I love it!
      </p>
      <p>
        My experience covers such areas as: finance, e-commerce, healthcare, advertising. The scale of projects was from
        start-up to marketplace. My role also was quite diverse. Usually it was a mix of team managing, process setup,
        requirement clarification and actual development.
      </p>
      <p>
        I would describe myself as a highly autonomous and collaborative problem solver. I&apos;m strong in putting
        things together and making it work. I&apos;m good at seeing and revealing people&apos;s potential. Appreciate
        responsibility, diligence, good teamwork and desire to grow.
      </p>
      <p>
        I&apos;m looking for a promising business idea or product where I can apply my entire skill set to achieve the
        best possible result.
      </p>
    </section>
  );
}
