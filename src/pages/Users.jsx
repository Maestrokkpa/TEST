import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const navigate = useNavigate();

  // Récupérer les données de l'utilisateur connecté
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

  // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
  if (!loggedInUser) {
    navigate("/login");
    return null;
  }

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const handleLogout = () => {
    // Supprimer l'utilisateur connecté du localStorage
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible."
    );

    if (confirmDelete) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = users.filter(user => user.username !== loggedInUser.username);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.removeItem("loggedInUser");
      navigate("/login");
      alert("Votre compte a été supprimé avec succès.");
    }
  };

  const handleChangePassword = () => {
    // Récupérer la liste des utilisateurs
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = users.find(user => user.username === loggedInUser.username);

    if (!currentUser) {
      alert("Utilisateur introuvable.");
      return;
    }

    // Vérifier si le mot de passe actuel est correct
    if (currentUser.password !== currentPassword) {
      alert("Le mot de passe actuel est incorrect.");
      return;
    }

    // Vérifier si le nouveau mot de passe est différent de l'ancien
    if (currentPassword === newPassword) {
      alert("Le nouveau mot de passe doit être différent de l'ancien.");
      return;
    }

    // Mettre à jour le mot de passe
    const updatedUsers = users.map(user =>
      user.username === loggedInUser.username
        ? { ...user, password: newPassword }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ ...loggedInUser, password: newPassword })
    );

    alert("Votre mot de passe a été modifié avec succès.");
    setShowPasswordForm(false);
    setCurrentPassword("");
    setNewPassword("");
  };

  return (
    <div>
      <h1>Chers {loggedInUser.username}, bienvenue sur votre espace utilisateur !</h1>
      <button onClick={handleLogout}>Se déconnecter</button>
      <button onClick={handleDeleteAccount}>
        Supprimer mon compte
      </button>

      <button
        onClick={() => setShowPasswordForm(!showPasswordForm)}
      >
        {showPasswordForm ? "Annuler" : "Modifier mon mot de passe"}
      </button>

      {showPasswordForm && (
        <div>
          <p>Veuillez saisir votre mot de passe actuel et le nouveau mot de passe :</p>
          <input
            type="password"
            placeholder="Mot de passe actuel"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Nouveau mot de passe"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            style={{ display: "block", marginBottom: "10px" }}
          />
          <button onClick={handleChangePassword} >
            Confirmer la modification
          </button>
        </div>
      )}
    </div>
  );
};

export default Users;
