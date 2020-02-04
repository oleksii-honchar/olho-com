/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { useTheme } from "emotion-theming";
import PropTypes, { InferProps } from "prop-types";

import { TableSpacer } from "src/components/TableSpacer";
import { Job } from "src/models/jobData";
import { DurationBadge } from "src/components/DurationBadge";

export function JobItem(
  props: InferProps<typeof JobItem.propTypes>
): ReactElement {
  const theme: any = useTheme();

  const jobItemCss = css`
    td:nth-of-type(2) {
      @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
        width: 140px;
      }

      @media screen and (min-device-width: 768px) {
        width: 200px;
      }

      text-align: end;
      font-weight: bolder;
      border-right: 1px darkgray;
    }

    td:nth-of-type(3) {
      padding-left: 15px;
    }
  `;

  const CellSpacer = (): ReactElement => (
    <TableSpacer color={theme.colors.sections.experience.spacerBackground} />
  );

  let experienceScope = props.data.experienceScope.split("{new-line}");
  if (experienceScope.length > 1) {
    const el: ReactElement[] = [];
    for (let idx = 1; idx <= experienceScope.length - 1; idx++) {
      el.push(
        <span key={(idx - 1).toString()}>{experienceScope[idx - 1]}</span>
      );
      el.push(<br key={(new Date().getTime() - 10).toString()} />);
      el.push(<br key={(new Date().getTime() + 10).toString()} />);
      el.push(<span key={idx.toString()}>{experienceScope[idx]}</span>);
    }
    experienceScope = el;
  }

  return (
    <table className="table table-sm" css={jobItemCss}>
      <tbody>
        <tr>
          <CellSpacer />
          <td>Customer</td>
          <td>{props.data.customer}</td>
        </tr>
        <tr>
          <CellSpacer />
          <td>Period</td>
          <td className="d-flex align-items-center">
            {props.data.period}&nbsp;
            <DurationBadge data={props.data.duration} />
          </td>
        </tr>
        <tr>
          <CellSpacer />
          <td>Role</td>
          <td>{props.data.roleDescription}</td>
        </tr>
        <tr>
          <CellSpacer />
          <td>Specialization</td>
          <td>{props.data.specialization}</td>
        </tr>
        <tr>
          <CellSpacer />
          <td>Experience scope</td>
          <td>{experienceScope}</td>
        </tr>
        <tr>
          <CellSpacer />
          <td>Tools</td>
          <td>{props.data.tools}</td>
        </tr>
      </tbody>
    </table>
  );
}

JobItem.propTypes = {
  id: PropTypes.string,
  data: PropTypes.any
};
