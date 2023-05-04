import styles from './Login.module.css';

function Login() {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <label>Username</label>
      <input type="text" />
      <label>Password</label>
      <input type="password" />
      <button type="submit">button</button>
    </form>
  );
};

export default Login;
