import { useState } from "react";

const Signup = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    fetch("api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        username,
        password,
        email,
        phone,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.response === "success") {
          console.log("Welcome!");
        } else {
          alert("Please enter a username that ISN'T taken!");
        }
      });
  };

  return (
    <>
      <form method="POST" action="" onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            onChange={handleFNameChange}
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            onChange={handleLNameChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </label>
        <label>
          {" "}
          Phone:
          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={handlePhoneChange}
          />
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={handleUsernameChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="password"
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          Create Account
        </button>
      </form>
    </>
  );
};

export default Signup;
