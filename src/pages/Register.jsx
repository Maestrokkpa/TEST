import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [isUsernameValid, setIsUsernameValid] = useState(false);
	const [isPasswordValid, setIsPasswordValid] = useState(false);

    const navigate = useNavigate();

	function handleChangeUsername(e) {
		setUsername(e.target.value);
		if (e.target.value.length < 3) {
			setIsUsernameValid(false);
		} else {
			setIsUsernameValid(true);
		}
	}

	function handleChangePassword(e) {
		setPassword(e.target.value);
		if (e.target.value.length < 4) {
			setIsPasswordValid(false);
		} else {
			setIsPasswordValid(true);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (isUsernameValid && isPasswordValid) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const newUsers = [...users, { username, password, role: "user" }];

            localStorage.setItem("users", JSON.stringify(newUsers));

            navigate("/login");
        }
	}

	return (
		<main id="register">
      <h1>Inscription</h1>
			<form onSubmit={handleSubmit} className="auth">
				<input
					type="text"
					name="username"
					value={username}
					onChange={handleChangeUsername}
					placeholder="Entrer votre Username"
				/>
				<input
					type="password"
					name="password"
					value={password}
					onChange={handleChangePassword}
					placeholder="Entrer votre mot de passe"
				/>

				<button type="submit">Créer le compte</button>
			</form>

			<p>
				Déjà inscrit ?{" "}
				<Link to={"/login"}>Connectez-vous</Link>
			</p>
			<aside className="validation password">
				<p>L&apos;username doit contenir : <span className={!isUsernameValid ? "alert" : "success"}>3 caractères minimum</span></p>
				<p>Le mot de passe doit contenir : <span className={!isPasswordValid ? "alert" : "success"}>4 caractères minimum</span> </p>
			</aside>
		
		</main>
	);
}

export default Register;
