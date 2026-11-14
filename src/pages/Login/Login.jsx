import Nav from '../../components/Nav/Nav'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';
import './Login.css';

export default function Login() {
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Dados enviados:', { usuario, senha });
        // Adicione aqui a sua lógica de autenticação
    };

    return (
        <div className="main-login">
            {/* Lado Esquerdo: Título e Ilustração */}
            <div className="left-login">

            </div>

            {/* Lado Direito: Cartão de Formulário */}
            <div className="right-login">
                <form className="card-login" onSubmit={handleSubmit}>
                    <h1>LOGIN</h1>

                    <div className="textfield">
                        <label htmlFor="usuario">Usuário</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Nome cadastrado ou E-mail"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            required
                        />
                    </div>

                    <div className="textfield">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Digite sua senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn-login">
                        ENTRAR
                    </button>
                </form>
            </div>
        </div>
    );
}