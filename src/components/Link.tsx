import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

export function Link(
  props: InferProps<typeof Link.propTypes>
): ReactElement {
  const href = `javascript:window.open('${props.href}', '_system')`;
  return <a href={href}>{props.children}</a>;
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  href: PropTypes.string.isRequired
};
