// Vendor packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import AntdNavbar from './antd/navbar';

const StyleOverride = createGlobalStyle`  
  ${css`
    #qasir-app {
      ${AntdNavbar}
    }
  `}
`;

export default StyleOverride;
