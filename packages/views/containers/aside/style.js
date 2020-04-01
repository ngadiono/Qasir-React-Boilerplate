import styled from 'styled-components';
import { fontPrimary } from '@qasir/styles/font';

export const ListMenu = styled.div`
  .ant-menu-submenu-inline > .ant-menu-submenu-title .ant-menu-submenu-arrow {
    right: 26px;
  }
  .ant-menu {
    background: #f2f4f7 !important;
    @media (max-width: 767.98px) {
      background: #fff !important;
    }
  }
  > .ant-menu-inline {
    border-right: 0px !important;
    margin-top: 45px;

    .ant-menu-item {
      width: auto;
      height: 40px;
      line-height: 40px;
      background: transparent;
      padding-right: 0px;
      margin-top: 0px;

      > a {
        padding: 0px !important;
        line-height: 40px !important;
        &:hover {
          color: #474955 !important;
        }
      }
      &:after {
        border-right: 8px solid #f04b32;
        left: 0px;
        right: unset;
      }
    }
    .ant-menu-item-selected {
      > a {
        color: #474955 !important;
        font-weight: 600;
      }
    }
    .ant-menu-submenu {
      .ant-menu-submenu-title {
        margin-top: 0px;
        margin-bottom: 8px;
        width: auto;
        /* padding-left    : 42px !important; */
      }
      .ant-menu {
        .ant-menu-item {
          font-weight: 500;
          height: 32px !important;
          line-height: 32px !important;
          padding-left: 63px !important;
          &:hover {
            color: #474955 !important;
          }
        }
        .ant-menu-item-selected {
          color: #474955 !important;
          font-weight: 600;
        }
      }
    }
    .ant-menu-submenu-selected {
      color: #474955 !important;
      font-weight: 600;
    }
    .ant-menu-submenu-active {
      color: #474955 !important;
      font-weight: 600;
      .ant-menu-submenu-title {
        @media (max-width: 767.98px) {
          width: auto !important;
        }
        &:hover {
          color: #474955 !important;
        }
        .ant-menu-submenu-arrow {
          right: 26px !important;
          &::after {
            background: linear-gradient(to right, #474955, #474955) !important;
          }
          &::before {
            background: linear-gradient(to right, #474955, #474955) !important;
          }
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  font-family: ${fontPrimary};
  background: #f2f4f7;
  width: 240px;
  height: 100%;
  position: fixed;
  top: 0px;
  z-index: 1000;
  @media (max-width: 767.98px) {
    display: none;
    background: #fff;
  }
`;

export const Icons = styled.img`
  height: 24px;
  padding-right: 12px;
  position: relative;
  top: 7px;
`;
export const LinkMenu = styled.a`
  color: #474955;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding: 1.05em 1em;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  display: block;
`;

export const LogoWrapper = styled.div`
  margin-bottom: 0px;
`;
export const LogoHref = styled.a`
  display: block;
  width: 100%;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 88px;
  cursor: pointer;
`;
export const LogoImg = styled.img`
  display: block;
  width: auto;
  height: 32px;
`;
