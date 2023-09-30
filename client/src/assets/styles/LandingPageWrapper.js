import { styled } from 'styled-components';
import image from '../images/landing_img.jpg';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100% 100vh;
  background-blend-mode: lighten;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .main-section {
    margin-top: -10rem;
    outline: 0;
  }
  .title {
    font-size: 2.5rem;
    margin-left: 1rem;
    padding: 2rem 0;
    user-select: none;
  }

  .action-section {
    width: 100vw;
    text-align: start;
  }
  .action-section * {
    margin: 4rem 1rem;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0.5em 1.5em;
    color: var(--white-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .register-btn {
    background-color: var(--green-color);
  }
  .login-btn {
    background-color: var(--dark-color-200);
  }

  .register-btn:hover,
  .login-btn:hover {
    background-color: #0056b3; /* Hover color */
    transform: scale(1.05); /* Slight scaling on hover */
  }
`;

export default Wrapper;
