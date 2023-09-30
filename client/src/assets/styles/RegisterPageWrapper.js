import { styled } from 'styled-components';

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: var(--dark-color);
  position: relative;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  .effect1 {
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
  }

  .register-container {
    width: 50%;
    height: fit-content;
    flex: 1;
    padding-bottom: 3rem;
    background-color: var(--background-color);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: none;
    border-top: 10px solid var(--green-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: baseline center;
    align-items: center;
    color: var(--dark-color);
  }

  .register-logo {
    position: relative;
    margin-top: 10px;
  }

  .register-form label {
    display: block;
    margin-top: 2rem;
    font-size: 1rem;
    font-weight: 500;
  }

  .register-form input {
    display: block;
    font-size: 1rem;
    font-weight: 500;
    padding: 0.4rem 0.5rem;
    margin-top: 10px;
    border: none;
    font-weight: 500;
    border-radius: 7px;
    box-shadow: 0 10px 6px -6px #777;
    background-color: var(--dark-color-300);
  }

  .form-btn {
    background-color: #007bff; /* Your chosen color */
    color: #ffffff; /* Text color */
    border: none;
    border-radius: 4px;
    padding: 12px 20px; /* Adjust padding for size */
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;

    margin-top: 2rem;
  }

  .form-btn:hover {
    background-color: #0056b3; /* Hover color */
    transform: scale(1.05); /* Slight scaling on hover */
  }

  .register-title {
    margin-top: -2rem;
  }
`;

export default Wrapper;
