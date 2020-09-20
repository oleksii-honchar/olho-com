/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React, { ReactElement } from "react";
import { useTheme } from "emotion-theming";

import { Icon, IconStack } from "src/components/Icon";
import { Link } from "./Link";

export function SocialLinks(): ReactElement {
  const theme: any = useTheme();
  const elCss = css`
    a {
      color: ${theme.colors.link.default};

      &:hover {
        color: ${theme.colors.link.hover};
      }
    }

    font-size: 1rem;
  `;

  return (
    <div css={elCss}>
      <Link href="http://telegram.me/OleksiiHonchar">
        <IconStack size="2x">
          <Icon name="circle" />
          <Icon name="paper-plane" color="white" transform="shrink-6" />
        </IconStack>
      </Link>
      <Link href="https://fb.com/gonchara.net">
        <IconStack size="2x">
          <Icon name="circle" color="white" />
          <Icon brand name="facebook" />
        </IconStack>
      </Link>
      <Link href="https://www.linkedin.com/in/oleksii-honchar/">
        <IconStack size="2x">
          <Icon name="circle" />
          <Icon brand name="linkedin" color="white" transform="shrink-6" />
        </IconStack>
      </Link>
      <Link href="https://github.com/oleksii-honchar">
        <IconStack size="2x">
          <Icon name="circle" color="white" />
          <Icon brand name="github" />
        </IconStack>
      </Link>
    </div>
  );
}
