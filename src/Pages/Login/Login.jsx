import { Link } from 'react-router-dom';
import './Login.css';
import Logo from '../../Images/Logo.png';
import Container from '../../Components/Container/Container';
import Googlelogin from '../../Components/GoogleLogin/googlelogin';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/authentication'; // Importe seu auth do arquivo de configuração Firebase

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const [mensagemSucesso, setMensagemSucesso] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Evita o recarregamento da página
    setMensagemErro(''); // Limpa a mensagem de erro anterior
    setMensagemSucesso(''); // Limpa a mensagem de sucesso anterior

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log('Usuário logado:', user);
      setMensagemSucesso('Login realizado com sucesso!');
      // Redirecionar o usuário ou executar outra ação após o login
    } catch (error) {
      console.error('Erro ao fazer login:', error.message);
      setMensagemErro('Erro ao fazer login: ' + error.message);
    }
  };

  return (
    <>
      <Container>
        <div className="login-form">
          <div className='background-logo'>
            <img src={Logo} alt="Logo NextGen" className="logo" />
          </div>
          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                id="username"
                placeholder="E-mail"
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                placeholder="Senha"
                autoComplete='off'
                onChange={(e) => setSenha(e.target.value)}
              />
              <span className="icon">
                <i className="material-icons">key</i>
              </span>
            </div>
            <button type="submit" className="btn">
              Entrar
            </button>
            {mensagemSucesso && <p className="formSucesso">{mensagemSucesso}</p>}
            {mensagemErro && <p className="formErro">{mensagemErro}</p>}
          </form>
          <div className="center">
            <Googlelogin />
          </div>
          <p className='p-cadastro'>
            Novo no NextGen? <br />
            <Link to="/cadastro" onClick={() => console.log("Link clicado")}><strong className='logup'>Cadastre-se</strong></Link>
          </p>
        </div>
      </Container>
    </>
  );
}

export default Login;
