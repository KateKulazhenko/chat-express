import * as React from 'react';

import SignForm from '../views/SignUpForm/SignUpForm';

class AuthContainer extends React.Component<any> {
  private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    console.log(e, 'click');
  }

  public render(): React.ReactNode {
    const props = {
      handleSubmit: this.handleSubmit
    }

    return <div>
      <SignForm {...props} />
    </div>
  }
}

export default AuthContainer;