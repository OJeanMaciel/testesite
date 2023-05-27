import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {

    return (
        <>
            <header className="header">

                <a href="#" className="logo">
                    <img src={logo} />
                </a>

                <nav className="navbar">
                    <a href="#home">Home</a>
                    <a href="#atuacao">Atuação</a>
                    <a href="#about">Contato</a>
                    <a href="#location">Localização</a>
                </nav>

                <div className="icons">
                    <div className="fas fa-search" id="search-btn"></div>
                    <div className="fas fa-shopping-cart" id="cart-btn"></div>
                    <div className="fas fa-bars" id="menu-btn"></div>
                </div>

            </header>
        </>
    )
}

export default Navbar;