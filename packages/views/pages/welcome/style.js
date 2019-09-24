import styled from 'styled-components';

const Wrapper = styled.section`
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  img {
    width: 300px;
    pointer-events: none;
    margin-bottom: 25px;
  }
  p {
      font-size: 15px;
      max-width: 550px;
      color: #a9a9a9;
      margin-top: 10px;
  }
  a {
    color: #61dafb;
    text-decoration: none;
    font-size: 15px;
    margin-top: 30px;
  }
`;

export default Wrapper;
