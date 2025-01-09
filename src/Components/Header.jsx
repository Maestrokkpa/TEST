import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
       <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/list">Liste</NavLink></li>
          <li><NavLink to="/register">Inscription</NavLink></li>
          <li><NavLink to="/login">Connexion</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header