/** @jsx jsx */
import { css, jsx } from "@emotion/core";
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
        Hello! My name is Alex. I’m a professional full-cycle software engineer
        with 10+ years of experience in web technologies. And I have a solid
        background of desktop integration for different industries since
        2000-th. Since 2010th I took part in creating business solutions for 3
        startups, including medical social platform and e-commerce data flow
        hub. I have a lot of experience in business analysis and building
        development strategy according to business model and needs.
      </p>
      <p>
        Driven by business needs I choose the best solution and architecture for
        quick and long wins. Constructive and consistent approach helps me to
        conquer uncertainty. I love to be a part of a team of professionals.
        Ready to take responsibility, execute and delegate for best performance.
      </p>
      <p>
        I’m excited to drive and join development process using agile
        practices for task management and devops. Among all personal qualities I
        would like to notice high personal standards and attention to details.
      </p>
      <p>I&apos;ll be glad cooperation!</p>
    </section>
  );
}
