import React, { Component, Suspense, useState } from 'react';
import { Row, Col } from 'antd/es/grid';
import { useTranslation } from "react-i18next";
import { Button, LoadingPlaceholder } from "@qasir/components";

import "antd/es/grid/style/index.css";

const Dashboard = () => {
  // Use `useTranslation` hooks only in functional component,
  // for more flexible use (e.g. class and function component)
  // use `withTranslation` HOC.
  const [lang, setLang] = useState('id');
  const { t, i18n } = useTranslation();
  // i18n.changeLanguage('id');

  const setLangId = () => {
    setLang('id');
    i18n.changeLanguage('id');
  }

  const setLangEn = () => {
    setLang('en-US');
    i18n.changeLanguage('en-US');
  }

  return (
    <Row>
      <Col md={24} lg={24}>
        <Button type="link" onClick={() => setLangId()}>id-ID</Button>
        <Button type="link" onClick={() => setLangEn()}>en-US</Button>
        {t('welcome_to_qasir_dashboard')}
      </Col>
    </Row>
  );
}

class Index extends Component {
  render() {
    return (
      <Suspense fallback={<LoadingPlaceholder />}>
        <Dashboard />
      </Suspense>
    );
  }
}

export default Index;
