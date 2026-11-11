export default function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">

                <div className="footer-about">
                    <h3>MinhaApp</h3>
                    <p>
                        Facilitando sua experiência
                        através da tecnologia.
                    </p>
                </div>

                <div className="footer-links">
                    <h3>Links úteis</h3>
                    <a href="/">Home</a>
                    <a href="/sobre">Sobre</a>
                    <a href="/contato">Contato</a>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © 2026 MinhaApp. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    )
}