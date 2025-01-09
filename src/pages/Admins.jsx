import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Admins ()  {
  const [users, setUsers] = useState([]);
  const navigate=useNavigate();
  
  const handleLogout = () => {
    // Supprimer l'utilisateur connecté du localStorage
    localStorage.removeItem("loggedInUser");
    navigate("/login");
  };

  const handleDeleteAllUser = () => {

  }

  // Charger les utilisateurs depuis le localStorage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Fonction pour supprimer un utilisateur
  const handleDeleteUser = (username) => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le compte de l'utilisateur "${username}" ?`
    );

    if (confirmDelete) {
      // Filtrer pour retirer l'utilisateur sélectionné
      const updatedUsers = users.filter(user => user.username !== username);

      // Mettre à jour la liste des utilisateurs dans le localStorage
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      // Mettre à jour l'état local
      setUsers(updatedUsers);

      alert(`Le compte de l'utilisateur "${username}" a été supprimé avec succès.`);
    }

  };

  // Fonction pour supprimer tous les utilisateurs
  const handleDeleteAllUsers = () => {
    const confirmDeleteAll = window.confirm(
      "Êtes-vous sûr de vouloir supprimer TOUS les comptes utilisateurs ? Cette action est irréversible."
    );

    if (confirmDeleteAll) {
      // Vider la liste des utilisateurs dans le localStorage
      localStorage.removeItem("users");

      // Mettre à jour l'état local
      setUsers([]);

      alert("Tous les comptes utilisateurs ont été supprimés avec succès.");
    }
  }

  return (
    <div>
      <h1>Bienvenue sur votre espace administrateur.</h1>
      <button onClick={handleLogout}>Se déconnecter</button>
      <button onClick={handleDeleteAllUsers}>Tout supprimer</button>
      {users.length === 0 ? (
        <p>Aucun utilisateur trouvé.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Password</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.username}>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user.username)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Admins;
