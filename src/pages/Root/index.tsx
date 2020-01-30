import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { AppConfigProvider, appConfig } from "src/contexts";

export const Root = () => {
  return (
    <AppConfigProvider value={appConfig}>
      <Container>
        <Row>
          <Col>Hello World!</Col>
        </Row>
      </Container>
    </AppConfigProvider>
  );
};
