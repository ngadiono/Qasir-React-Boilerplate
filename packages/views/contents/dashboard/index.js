import React, { Component, Suspense, useState } from 'react';
import { Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';

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
};

class Index extends Component {
  render() {
    return <Dashboard />;
  }
}

export default Index;
