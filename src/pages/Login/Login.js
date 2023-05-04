import { useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../UserContext';
import styles from './Login.module.css';

import credentials from './../../data/credentials.json';

function Login() {
  const navigate = useNavigate();
  const username = useRef(null);
  const password = useRef(null);
  const { setIsAuthorize } = useContext(UserContext);

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
    .then(data => {
      if (data.message !== 'Invalid username or password.') {
        setIsAuthorize(true);
        navigate('/');
      } else {
        alert('Invalid username or password');
      }
    })
    .catch(error => {
      if (username.current.value === credentials.username && password.current.value === credentials.password) {
        setIsAuthorize(true);
        navigate('/');
      } else {
        alert('Invalid username or password');
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={onSubmitHandler}>
      <label>Username</label>
      <input ref={username} required type="text" />
      <label>Password</label>
      <input ref={password} required type="password" />
      <button type="submit">button</button>
    </form>
  );
};

export default Login;
