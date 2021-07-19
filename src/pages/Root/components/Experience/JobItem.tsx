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
    //td:nth-of-type(2) {
    //  @media screen and (min-device-width: 376px) and (max-device-width: 768px) {
    //    min-width: 140px;
    //  }
    //
    //  @media screen and (min-device-width: 768px) {
    //    min-width: 200px;
    //  }
    //
    //  text-align: end;
    //  font-weight: bolder;
    //  border-right: 1px darkgray;
    //}

    //td:nth-of-type(3) {
    //  padding-left: 15px;
    //}
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
      <tr className="d-flex">
        <CellSpacer />
        <td>
          <dl className="row">
            <dt className="col-sm-3">Customer</dt>
            <dd className="col-sm-9">{props.data.customer}</dd>

            <dt className="col-sm-3">Period</dt>
            <dd className="col-sm-9 d-flex align-items-center">
              {props.data.period}&nbsp;
              <DurationBadge data={props.data.duration} />
            </dd>

            <dt className="col-sm-3">Role</dt>
            <dd className="col-sm-9">{props.data.roleDescription}</dd>

            <dt className="col-sm-3">Specialization</dt>
            <dd className="col-sm-9" dangerouslySetInnerHTML={{ __html: props.data.specialization}}></dd>

            <dt className="col-sm-3">Experience scope</dt>
            <dd className="col-sm-9">{experienceScope}</dd>

            <dt className="col-sm-3">Tools</dt>
            <dd className="col-sm-9">{props.data.tools}</dd>
          </dl>
        </td>
      </tr>
      </tbody>
    </table>
  );
}

JobItem.propTypes = {
  id: PropTypes.string,
  data: PropTypes.any
};
