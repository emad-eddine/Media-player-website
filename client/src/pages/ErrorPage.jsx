import Wrapper from '../assets/styles/ErrorPageWrapper';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from "../assets/images/not_found.svg"


function ErrorPage() {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <img src={errorImg} className="error-img" />
        <h1>It's seems like we cant find the page you're looking for!</h1>
        <Link to="/" className="linkBtn">
          Go Back!
        </Link>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <h1>Something went Wrong!!</h1>
      </Wrapper>
    );
  }
}
export default ErrorPage;
