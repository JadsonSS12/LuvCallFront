import '../Nav/Nav.css'

function Nav(){
    return (
        <nav>

            <div className="navbar">
                <div className="nav-logo">

                    <h2>LuvCall</h2>

                </div>

                <ul className="navbar-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Sobre</a></li>
                    <li><a href="/">Contato</a></li>
                </ul>

                <div className="navbar-actions">
                    <button className="login-button">
                        Entrar
                    </button>
                </div>
            </div>

        </nav>
    )
}

export default Nav;