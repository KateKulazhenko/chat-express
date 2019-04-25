import * as React from 'react';
import { reduxForm, InjectedFormProps, Field } from 'redux-form';
import CustomInput from '../../../../components/Input';
import Auth from '../..';

interface Props {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
}

const SignUpForm: React.StatelessComponent<Props> = ({ handleSubmit }) => {
  return <div>
    <form onSubmit={handleSubmit}>
      <Field name="lastName" component={CustomInput} label="Email" placeholder={'email@mail.com'} />
    </form>
  </div>
}

export default reduxForm<any, any>({
  form: 'auth',
})(SignUpForm);