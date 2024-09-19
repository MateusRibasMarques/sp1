import { Link } from 'react-router-dom';
import './Login.css'
import Logo from '../../Images/Logo.png'
import Container from '../../Components/Container/Container';
import Googlelogin from '../../Components/GoogleLogin/googlelogin';
function Login() {

  return (
    <>
      <Container>
        <div className="login-form">
          <div className='background-logo'>
            <img src={Logo} alt="Logo NextGen" className="logo" />
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" id="username" placeholder="Usuário" autoComplete='off' />
              <span className="icon">
                <i className="fas fa-user"></i>
              </span>
            </div>
            <div className="input-group">
              <input type="password" id="password" placeholder="Senha" />
              <span className="icon">
                <i className="material-icons" >key</i>
              </span>
            </div>
            <button type="submit" className="btn">
              Entrar
            </button>
          </form>
          <div className="center">
            <Googlelogin></Googlelogin>
          </div>

          <p className='p-cadastro'>Novo no NextGen? <br />
            <Link to="/cadastro" onClick={() => console.log("Link clicado")}><strong className='logup' >Cadastre-se</strong></Link></p>
        </div>
      </Container>

    </>
  )
}

export default Login
