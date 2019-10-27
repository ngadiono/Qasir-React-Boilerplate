import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > img {
    width: 32%;
    margin-bottom: 30px;
  }
  h3 {
    color: #f04b32;
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: 1.2;
  }
  p {
    margin-bottom: 30px;
  }
  button {
    -webkit-appearance: none;
    border: 0;
    border-radius: 8px;
    padding: 0 24px;
    color: #fff;
    background: #f04b32;
    height: 40px;
    line-height: 40px;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    font-weight: bold;
    display: inline-block;
    height: 40px;
    width: 240px;
  }
`;
