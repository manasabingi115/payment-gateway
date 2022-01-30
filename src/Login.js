import React from 'react';
import PaymentGateway from './PaymentGateway';

export default function Login() {
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  function Payment() {
    return (
      <div className="payment-block">
        <PaymentGateway />
        <br />
        <p onClick={() => setIsLoginPage(true)}>logout</p>
      </div>
    );
  }

  function Submit(e) {
    e.preventDefault();
    setIsLoginPage(false);
    alert('Logged in succefully');
  }
  function LoginPage() {
    return (
      <div id="login">
        <form id="login-form" onSubmit={Submit}>
          <input id="email" placeholder="E-mail" type="email" required></input>
          <br />
          <br />
          <input
            id="password"
            placeholder="Password"
            type="password"
            required
          ></input>
          <br />
          <br />
          <button type="submit" id="submit">
            Login
          </button>
          <br />
        </form>
      </div>
    );
  }
  return <div>{isLoginPage ? <LoginPage /> : <Payment />}</div>;
}
