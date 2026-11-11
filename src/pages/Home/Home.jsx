import { Nav } from "../../components/Nav/Nav"
import Footer from "../../components/Footer/Footer"
export default function Home(){
    return(
        <div className="Home">
            <Nav />

            <main className="home-content">

                <section className="hero">
                    <h1>Bem-vindo à MinhaApp!</h1>

                    <p>
                        Uma plataforma desenvolvida para
                        facilitar sua experiência.
                    </p>

                    <button className="hero-button">
                        Começar agora
                    </button>
                </section>

                <section className="features">
                    <h2>Nossos serviços</h2>

                    <div className="features-container">

                        <div className="feature-card">
                            <h3>Facilidade</h3>
                            <p>
                                Utilize nossa plataforma
                                de maneira simples e intuitiva.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Segurança</h3>
                            <p>
                                Seus dados protegidos
                                com segurança.
                            </p>
                        </div>

                        <div className="feature-card">
                            <h3>Agilidade</h3>
                            <p>
                                Execute suas tarefas
                                de forma rápida.
                            </p>
                        </div>

                    </div>
                </section>

            </main>

            <Footer />

        </div>
    )
}