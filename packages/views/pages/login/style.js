import styled, { createGlobalStyle } from 'styled-components';
import { fontPrimary } from '@qasir/styles/font';

export const LoginCardImg = styled.img`
  width: 28%;
  right: 0;
  position: absolute;
  top: 40px;
`;
export const LoginCardImgTitle = styled.img`
  width: 90%;
  margin: auto;
  display: block;
  margin-bottom: 35px;
`;

export const GlobalStyleLogin = createGlobalStyle`
    body{
        background-color : #f3f4f9;
        font-family      : ${fontPrimary} !important;
    }
    input {
        width            : 100% !important;
        height           : 48px !important;
        border-radius    : 4px !important;
        background-color : #ffffff !important;
        border           : 0px !important;
        font-size        : 14px !important;
        font-weight      : 600 !important;
        font-style       : normal !important;
        font-stretch     : normal !important;
        line-height      : normal !important;
        letter-spacing   : normal !important;
        color            : #737580 !important;
        margin-bottom    : 5px !important;
    }
    .ant-input:focus {
        border-color : #737580 !important;
        box-shadow   : 0 0 0 2px rgba(245, 34, 45, 0.2) !important;
    }
    .ant-form{
        width    : 400px;
        position : fixed;
        right    : 0;
        left     : 0;
        top      : 20%;
        padding  : 10px !important;
        margin   : auto !important;
        @media screen and (max-width: 500px) {
            width: 300px !important;
        }
    }
`;
