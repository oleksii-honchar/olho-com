import * as React from "react";
import { ReactElement } from "react";

import { Footer } from "./Footer";

export function About(): ReactElement {
  return (
    <div className="container-fluid page-content">
      <div className="row">
        <div className="col-xs-12 cold-md-12">
          <h1>About</h1>
        </div>
        <div className="col-xs-12 cold-md-12">
          <p>
            Hi! My name is Alex Potter and I&apos;ve always wanted to be a
            programmer. Since 1998 I cultivated this skill, constantly expanding
            the horizons of my knowledge and experience. I love to write
            beautiful, scalable, and simple code. Prefer to take on difficult,
            complex tasks that require non-trivial visual and architectural
            solutions.
          </p>
          <p>
            I enjoy working in a team, but in solo I feel myself well too. My
            passion for organizing and ordering information in the mind-maps
            allows to control large amounts of structural information. And I am
            easily able to find a common language with the customer and
            transform words and ideas in logic and relationships.
          </p>
          <p>I&apos;ll be glad cooperation!</p>
          <h3>What else?</h3>
          <p>
            Check my <a href="#">CV</a> and then{" "}
            <a href="http://telegram.me/tuiteraz">hire me</a> =8)
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
