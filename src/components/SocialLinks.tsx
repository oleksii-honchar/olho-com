/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React, { ReactElement } from "react";
import { Icon, IconStack } from "src/components/Icon";

const elCss = css`
  a {
    color: #4e6983;
    
    &:hover {
      color: #2b445b;
    }
  }
`;

export function SocialLinks(): ReactElement {
  return (
    <div className="float-right" css={elCss}>
      <a href="http://telegram.me/tuiteraz">
        <IconStack size="2x">
          <Icon name="circle"/>
          <Icon name="paper-plane" color="white" transform="shrink-6"/>
        </IconStack>
      </a>
      <a href="https://fb.com/gonchara.net">
        <IconStack size="2x">
          <Icon name="circle" color="white"/>
          <Icon brand name="facebook"/>
        </IconStack>
      </a>
      <a href="https://ua.linkedin.com/in/alekseygonchar">
        <IconStack size="2x">
          <Icon name="circle" />
          <Icon brand name="linkedin" color="white" transform="shrink-6"/>
        </IconStack>
      </a>
      <a href="https://github.com/aleksey-gonchar">
        <IconStack size="2x">
          <Icon name="circle" color="white"/>
          <Icon brand name="github"/>
        </IconStack>
      </a>
    </div>
  )
}

