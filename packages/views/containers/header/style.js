import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 98px;
  background: #f2f4f7;
  width: 100%;
  display: block;
  @media (max-width: 767.98px) {
    background: #fff;
  }
`;

export const Account = styled.div`
  float: right;
  width: 512px;
  display: flex;

  .ant-dropdown-trigger {
    display: flex;
    text-align: right;
    text-decoration: none !important;
    margin-right: 32px;
    margin-top: 32px;

    &:hover {
      text-decoration: none;
    }
    div {
      @media (max-width: 767.98px) {
        display: none;
      }
      margin-right: 16px;

      h3 {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: right;
        color: #474955;
      }
      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        text-align: right;
        color: #737580;
      }
    }
    img {
      height: 42px;
      width: 42px;
    }
    .anticon {
      @media (max-width: 767.98px) {
        display: none;
      }
      color: #737580;
      line-height: 42px;
      margin-left: 12px;
    }
  }

  .ant-select {
    margin-top: 32px;
    margin-right: 32px;
  }
`;

export const ButtonHummber = styled.a`
  text-decoration: none;
  top: 18px;
  margin-left: 16px;
  position: relative;

  img {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
