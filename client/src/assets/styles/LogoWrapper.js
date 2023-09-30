import { styled } from 'styled-components';

const Wrapper = styled.div`
  .logo-section {
    position: absolute;
    top: 0;
    left: 0;
    margin: 3rem 2rem;
    display: flex;
    align-items: center;
  }

  .logo-section img {
    filter: invert(44%) sepia(79%) saturate(2586%) hue-rotate(90deg)
      brightness(104%) contrast(109%);
    display: inline;
  }

  .logo-section span {
    font-size: 1.5rem;
    margin-left: 1rem;
    user-select: none;
  }
`;

export default Wrapper;
