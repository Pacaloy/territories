import { useRef } from 'react';
import styles from './Login.module.css';

function Login() {
  const username = useRef(null);
  const password = useRef(null);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    fetch('https://netzwelt-devtest.azurewebsites.net/Account/SignIn', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username.current.value,
        password: password.current.value,
      }),
    })
    .then(res => res.json())
    .then(data => console.log(data));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Username</label>
      <input ref={username} required type="text" />
      <label>Password</label>
      <input ref={password} required type="password" />
      <button type="submit">button</button>
    </form>
  );
};

export default Login;
