/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { ReactElement } from "react";
import * as moment from "moment";

import { FooterContainer } from "./Footer.emotion";
import { Icon, IconStack } from "src/components/Icon";

export function Footer(): ReactElement {
  const socials = (
    <div className="float-right">
      <a href="http://telegram.me/tuiteraz">
        <IconStack size="2x">
          <Icon name="circle"/>
          <Icon name="paper-plane" color="white" transform="shrink-6"/>
        </IconStack>
      </a>
      <a href="https://fb.com/gonchara.net">
          <i className="fab fa-facebook"></i>
          <Icon brand name="facebook" size="2x"/>
      </a>
      <a href="https://ua.linkedin.com/in/alekseygonchar">
        <IconStack size="2x">
          <Icon name="circle" />
          <Icon brand name="linkedin" color="white" transform="shrink-6"/>
        </IconStack>
      </a>
      <a href="https://github.com/aleksey-gonchar">
        <Icon brand name="github" size="2x"/>
      </a>
    </div>
  );

  return (
    <FooterContainer className="row" >
      <div className="col-xs-12 col-md-12">
        <table>
          <tbody>
            <tr>
              <td>
                <Icon name="copyright" />
                &nbsp;
                {moment().format("YYYY")}&nbsp;
                <span className="name">Oleksii Honchar</span>
                <span className="sub-title">
                  {" "}
                  - Full-cycle Software Engineer
                </span>
              </td>
              <td>{socials}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </FooterContainer>
  );
}
