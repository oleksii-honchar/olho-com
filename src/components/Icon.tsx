import React, { ReactElement } from "react";
import PropTypes, { InferProps } from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconName, SizeProp, FlipProp, RotateProp,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPaperPlane, faCopyright, faCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faPaperPlane, faCopyright, faFacebook, faLinkedin, faGithub);

const iconDefinitions = {
  'paper-plane': faPaperPlane,
  'copyright': faCopyright,
  'facebook': faFacebook,
  'linkedin': faLinkedin,
  'github': faGithub,
  'circle': faCircle
}

export function IconStack(props: InferProps<typeof IconStack.propTypes>): ReactElement {
  let className = `fa-layers fa-fw`;
  className += props.size ? ` fa-${props.size}` : "";

  return (
    <span className={className}>
      {props.children}
    </span>
  );
}

IconStack.propTypes = {
  size: PropTypes.oneOf(["lg", "2x", "3x", "4x", "5x"]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export function Icon(props: InferProps<typeof Icon.propTypes>): ReactElement {
  return <FontAwesomeIcon
    color={props.color as string}
    flip={props.flip as FlipProp}
    icon={iconDefinitions[props.name]}
    inverse={!!props.inverse}
    rotation={props.rotation as RotateProp}
    size={props.size as SizeProp}
    spin={!!props.spin}
    transform={props.transform as string}
  />;
}

Icon.propTypes = {
  brand: PropTypes.bool,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
  flip: PropTypes.oneOf(["horizontal", "vertical", "both"]),
  fw: PropTypes.bool,
  inverse: PropTypes.bool,
  rotation: PropTypes.oneOf([90, 180, 270]),
  spin: PropTypes.bool,
  size: PropTypes.string,
  transform: PropTypes.string,
};

Icon.defaultProps = {
  className: ""
};
