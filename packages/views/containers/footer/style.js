import styled from 'styled-components';

export const WrapperFooter = styled.section`
  background-color: white;
  padding: 8px 11px;
  font-size: 12px;
  border-top: 1px solid #DDD;
  border-bottom: 1px solid #DDD;
  color: #999;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  span {
    &:nth-child(2) {
      float: right;
    }
  }
`;
