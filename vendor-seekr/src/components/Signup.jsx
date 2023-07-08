import { useState } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <form method='POST' action='' onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={handleUsernameChange}
        />
      </label>
      <label>
        Password:
        <input
          type='text'
          name='password'
          placeholder='password'
          onChange={handlePasswordChange}
        />
      </label>
      <input type='submit' value='Create Account' />
    </form>
  );
};

export default Signup;
