import React from 'react';
import PaymentGateway from './PaymentGateway';

export default function Login() {
  const [isLoginPage, setIsLoginPage] = React.useState(true);
  function PaymentGateWay() {
    return (
      <div>
        <p onClick={() => setIsLoginPage(true)}>logout</p>
        <PaymentGateway />
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
          <br />
        </form>
      </div>
    );
  }
  return <div>{isLoginPage ? <LoginPage /> : <PaymentGateway />}</div>;
}
