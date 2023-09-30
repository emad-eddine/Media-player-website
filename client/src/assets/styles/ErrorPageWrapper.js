import { styled } from 'styled-components';

const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-color);
  text-align: center;

  .error-img {
    width: 30%;
    height: 30%;
    margin-top: 5rem;
  }

  h1 {
    margin-top: 1.5rem;
  }
  .linkBtn {
    text-decoration: none;
    color: var(--white-text-color);
    font-size: 2rem;
  }
  .linkBtn:hover {
    color: var(--yellow-color);
  }
`;

export default Wrapper;
