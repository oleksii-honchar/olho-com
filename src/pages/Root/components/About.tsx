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
        Hello! My name is Alex. I’m an GettingThingDone IT guy with a long story
        about software development and team management in different domains, processes
        and technologies. Long time ago I started as an intern within one successful
        gaming startup. Year after year I was constantly learning, coding and accepting
        the challenges. Until once I’ve discovered myself helping others to conquer their
        peaks.  Already 5+ years I’m practicing team management, leading and coaching for
        teams from 2 up to 40 people.
      </p>
      <p>
        Driven by business needs I choose the best solution and architecture for quick
        and long wins. Constructive and consistent approach helps me to conquer uncertainty.
        Ready to take responsibility, execute and delegate for best performance.
      </p>
      <p>
        I’m excited to drive and join development process using agile
        practices for task management and DevOps. Among all personal qualities I
        would like to notice high personal standards and attention to details.
      </p>
      <p>I&apos;m glad to cooperate!</p>
    </section>
  );
}
