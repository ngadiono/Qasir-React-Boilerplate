import React, { Component, Suspense, useState } from 'react';
import { Row, Col } from 'antd/es/grid';
import { useTranslation } from "react-i18next";
import { Button, LoadingPlaceholder } from "@qasir/components";

import "antd/es/grid/style/index.css";

const Dashboard = () => {
  // Use `useTranslation` hooks only in functional component,
  // for more flexible use (e.g. class and function component)
  // use `withTranslation` HOC.
  const { t } = useTranslation();

  return (
    <Suspense fallback={<LoadingPlaceholder />}>
      <Row>
        <Col md={24} lg={24}>
          {t('welcome_to_qasir_dashboard')}
        </Col>
      </Row>
    </Suspense>
  );
}

class Index extends Component {
  render() {
    return (
      <Dashboard />
    );
  }
}

export default Index;
