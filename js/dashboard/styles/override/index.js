// Vendor packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import AntdInput from './antd/input';
import NProgress from './nprogress';

const StyleOverride = createGlobalStyle`  
  ${css`
    .qsr {
      ${AntdInput}
    }
    ${NProgress}
  `}
`;

export default StyleOverride;
