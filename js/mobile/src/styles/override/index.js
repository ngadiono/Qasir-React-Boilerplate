// Vendor packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import AntdMobileNavbar from './antd-mobile/navbar';

const StyleOverride = createGlobalStyle`  
  ${css`
    #qasir-app {
      ${AntdMobileNavbar}
    }
  `}
`;

export default StyleOverride;
