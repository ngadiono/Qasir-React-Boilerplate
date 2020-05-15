// Vendor packages
import { createGlobalStyle, css } from 'styled-components';

// Styles
import AntdInput from './antd/input';

const StyleOverride = createGlobalStyle`  
  ${css`
    .qsr {
      ${AntdInput}
    }
  `}
`;

export default StyleOverride;
