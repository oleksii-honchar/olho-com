/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";
import React, { ReactElement } from "react";

type YearsBadgeProps = {
  years: number;
};
export const YearsBadge = (props: YearsBadgeProps) => (
  <span className="badge badge-secondary">{props.years}y</span>
);
