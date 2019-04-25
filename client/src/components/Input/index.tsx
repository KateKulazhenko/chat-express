import * as React from 'react';

import TextField from '@material-ui/core/TextField';

interface TypeProps {
  label: string;
  placeholder: string;
  input: any;
  meta: {
    touched: any;
    invalid: any;
    error: any;
  }
}

const CustomInput: React.FunctionComponent<TypeProps> = ({ label, placeholder, input, meta: { touched, invalid, error }}) => {
  return <div>
    <TextField 
      label={label}
      placeholder={placeholder}
      error={touched && invalid}
      helper={touched && error}
      {...input}
    />
    </div>
}

export default CustomInput;