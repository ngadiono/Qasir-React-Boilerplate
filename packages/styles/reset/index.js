import { css, createGlobalStyle } from 'styled-components';

export const StyleReset = css`
  /* http://meyerweb.com/eric/tools/css/reset/
   v4.0 | 20180602
   License: none (public domain)
*/
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    vertical-align: baseline;
  }
  /* main for dekstop */
  main {
    margin-left: 240px !important;
  }

  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section {
    display: block;
  }
  /* HTML5 hidden-attribute fix for newer browsers */
  *[hidden] {
    display: none;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  body {
    background: #f2f4f7 !important;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif !important;
  }
  .ant-layout {
    background: #f2f4f7;
    font-family: 'Montserrat', sans-serif !important;
    .ant-layout-content {
      margin-left: 250px;
      margin-top: 35px;
    }
  }

  .table-striped {
    .ant-table-content {
      .ant-table-body {
        table {
          border-radius: 4px !important;
          border-left: 1px solid #eef0f2;
          border-right: 1px solid #eef0f2;
          border-bottom: 1px solid #eef0f2;
          .ant-table-thead {
            > tr {
              > th {
                font-family: Montserrat;
                font-style: normal;
                font-weight: 600;
                font-size: 14px;
                line-height: 17px;
                background: #f2f4f7 !important;
                color: #474955;
                text-align: center;
              }
            }
          }
          .ant-table-tbody {
            > tr {
              opacity: 0.3;
              > td {
                border: 0px !important;
              }
            }
            > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected)
              > td {
              background: #03a9f4;
              opacity: 0.1;
            }
          }
          tbody tr:nth-of-type(odd) {
            background: #f2f4f7 !important;
          }
        }
      }
    }
  }

  .content-wrapper {
    background: #fff;
    border-top-left-radius: 50px;
    padding: 40px;
  }

  .ant-pagination-item-active {
    border-color :#e34225!important a {
      color: #e34225 !important;
    }
  }
`;

export const Reset = createGlobalStyle`${StyleReset}`;

export default StyleReset;
