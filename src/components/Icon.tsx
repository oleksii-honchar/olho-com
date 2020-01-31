import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";

export function Icon(props: InferProps<typeof Icon.propTypes>): ReactElement {
  let className = `fa ${props.className} fa-${props.name}`;
  className += props.inverse ? " fa-inverse" : "";
  className += props.fw ? " fa-fw" : "";
  className += props.spin ? " fa-spin" : "";
  className += props.flip ? ` fa-flip-${props.flip}` : "";
  className += props.size ? ` fa-size-${props.size}` : "";
  className += props.rotate ? ` fa-rotate-${props.rotate}` : "";

  return <i className={className} />;
}

Icon.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  inverse: PropTypes.bool,
  fw: PropTypes.bool,
  spin: PropTypes.bool,
  flip: PropTypes.oneOf(["horizontal", "vertical"]),
  size: PropTypes.oneOf(["lg", "2x", "3x", "4x", "5x"]),
  rotate: PropTypes.oneOf(["45", "90", "135", "180", "225", "270", "315"])
};

Icon.defaultProps = {
  className: ""
};
