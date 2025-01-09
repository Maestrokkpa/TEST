import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Section Navigation */}
                <div className="footer-section">
                    <h4>Navigation</h4>
                    <nav>
                          <ul>
                            <li><NavLink to="/">Accueil</NavLink></li>
                            <li><NavLink to="/list">Liste</NavLink></li>
                            <li><NavLink to="/register">Inscription</NavLink></li>
                            <li><NavLink to="/login">Connexion</NavLink></li>
                          </ul>
                    </nav>
                </div>

                {/* Section Réseaux Sociaux */}
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <ul className="social-links">
                        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>

                {/* Section Informations légales */}
                <div className="footer-section">
                    <h4>Legal</h4>
                    <ul>
                        <li><NavLink to="/privacy-policy" end>Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms-of-service" end>Terms of Service</NavLink></li>
                        <li>&copy; {new Date().getFullYear()} Your Company Name</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
