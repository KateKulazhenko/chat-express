import * as React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import CustomInput from '../../../../components/Input';
import Button from '@material-ui/core/Button';
import Auth from '../..';

interface Props {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const SignUpForm: React.StatelessComponent<Props> = ({ handleSubmit }) => {
  return <div>
    <form onSubmit={handleSubmit}>
      <Field name="lastName" component={CustomInput} label="Email" placeholder={'email@mail.com'} />
      <Field name="password" component={CustomInput} label="Password" placeholder={'password'} />
      <Button variant="outlined" color="primary">Sign In</Button>
    </form>
  </div>
}

export default reduxForm<any, any>({
  form: 'auth',
})(SignUpForm);