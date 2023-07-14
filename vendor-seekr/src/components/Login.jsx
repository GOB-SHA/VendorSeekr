import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleUsernameChange = (e) => {
		setUsername(e.target.value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch("/api/user/verifyuser", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ username, password }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data)
				if (data.response === 'success') window.location.replace("/");
			});
	};
	return (
		<form method="POST" onSubmit={handleSubmit}>
			<label>
				Username:
				<input
					placeholder="username"
					type="text"
					name="username"
					onChange={handleUsernameChange}
				/>
			</label>
			<label>
				Password:
				<input
					placeholder="password"
					type="password"
					name="password"
					onChange={handlePasswordChange}
				/>
			</label>
			<input type="submit" value="Log in" />
		</form>
	);
};

export default Login;
