/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { ReactElement, Fragment } from "react";
import { TableSpacer } from "src/components/TableSpacer";
import { useTheme } from "@emotion/react";

import { jobsModel } from "src/models/jobsModel";
import { JobItem } from "./JobItem";

export function Experience(): ReactElement {
  const theme: any = useTheme();

  const { years } = jobsModel;
  const history: ReactElement[] = [];
  years.forEach((year, yIdx) => {
    const yId = `"year-${yIdx}"`;
    history.push(<h3 key={yId}>{year}</h3>);

    const jobs = jobsModel.getJobsWithinYear(year);
    jobs.forEach((job, jIdx) => {
      const jId = `${yId}"_job-${jIdx}"`;
      history.push(<JobItem key={jId} data={job} />);
    });
  });

  return (
    <section id="experience">
      <h2>Work experience</h2>
      {history}
    </section>
  );
}
