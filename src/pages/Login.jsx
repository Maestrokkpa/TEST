import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Utilisé pour rediriger l'utilisateur après connexion

  const handleLogin = (e) => {
    e.preventDefault();

    // Récupérer les utilisateurs depuis localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Vérifier si les identifiants sont corrects
    const validUser = storedUsers.find(
      (user) => user.username === username && user.password === password
    );

    if (!validUser) {
      setError("Nom d'utilisateur ou mot de passe incorrect !");
      return;
    }

    // Sauvegarder l'utilisateur connecté dans localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(validUser));

     // Récupérer les données de l'utilisateur connecté
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Réinitialiser les champs et rediriger
    setUsername("");
    setPassword("");
    setError("");
    if(loggedInUser.role=="user"){
      navigate("/users"); // Redirige vers la page users après connexion
    }
    if(loggedInUser.role=="admin"){
      navigate("/admins"); // Redirige vers la page users après connexion
    }
  };

  return (
    <main id="login">
      <h1>Connexion</h1>
      <form onSubmit={handleLogin} className="auth"> 
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
          <label>Nom d'utilisateur :</label>
        </div> 
        <div> <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Entrer votre Username"
          />
        </div>
        <div>
          <label>Mot de passe :</label>
        </div>
        <div>  <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Entrer votre mot de passe"
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <p>
				Pas encore inscrit ?{" "}
				<Link to={"/register"}>Inscrivez-vous</Link>
			</p>
    </main>
  );
};

export default Login;
