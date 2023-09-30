import Wrapper from '../assets/styles/RegisterPageWrapper';
import { Form, Link } from 'react-router-dom';
import FormRow from '../components/FormRow';
import Logo from './../components/Logo';



function LoginPage() {
  return (
   <Wrapper>
      <div className="register-container effect1">
        <Logo className="register-logo" />
        <h3 className="register-title">Login</h3>
        <Form method="post" className="register-form">
          <FormRow type="email" name="email" label="Email" />
          <FormRow type="password" name="password" label="Password" />
 
        <button className='form-btn' type="submit">Submit</button>
        
        <h6>new member! <Link to="/register">Register</Link></h6>
        
        </Form>
      </div>
    </Wrapper>
  )
}
export default LoginPage