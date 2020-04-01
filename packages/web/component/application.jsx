import React, { Component, Suspense } from 'react';
import { createGlobalStyle } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { LoadingPlaceholder } from '@qasir/components';
import Routes from '@qasir/routes';
import StyleReset from '@qasir/styles/reset';

const GlobalStyle = createGlobalStyle`
  ${StyleReset}`;

// const Application = () => {
//   const { i18n } = useTranslation();
//   i18n.changeLanguage('id');

//   return(
//     <Suspense fallback={<div>...</div>}>
//       <React.Fragment>
//           <GlobalStyle />
//           <Routes />
//       </React.Fragment>
//     </Suspense>
//   );
// }

class Application extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Routes />
      </React.Fragment>
    );
  }
}

export default Application;
