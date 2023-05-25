/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";

type DurationBadgeProps = {
  data: number;
};
export const DurationBadge = (props: DurationBadgeProps) => <span className="badge badge-success">{props.data}</span>;
