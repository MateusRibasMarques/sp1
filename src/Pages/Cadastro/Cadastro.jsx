import { Link } from 'react-router-dom';
import './Cadastro.css'
import Logo from '../../Images/Logo.png'
import Container from '../../Components/Container/Container';

function Cadastro() {

  return (
    <>
      <Container>
        <div className="login-form">
          <div className='background-logo'>
            <img src={Logo} alt="Logo NextGen" className="logo" />
          </div>
          <form>
            <div className="input-group">
              <input type="text" id="e-mail" placeholder="E-mail" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="text" id="cpf" placeholder="CPF" maxlength="11" pattern="[0-9]*" autoComplete='off' inputmode="numeric"

                oninput="this.value = this.value.replace(/[^0-9]/g, '');" title="Insira seu CPF com até 11 dígitos numéricos" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="text" id="name" placeholder="Nome Completo" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="date" id="data" placeholder="Data de Nascimento" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="number" id="number" placeholder="Telefone Celular" maxlength="11" pattern="[0-9]*" inputmode="numeric" title="Insira seu telefone com até 11 dígitos numéricos" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>

            <div className="input-group">
              <div className="gender-options">
                <div className="gender-option">
                  <label>
                    <input type="checkbox" name="gender" value="male" />
                    Masculino
                  </label>
                </div>
                <div className="gender-option">
                  <label>
                    <input type="checkbox" name="gender" value="female" />
                    Feminino
                  </label>
                </div>
                <div className="gender-option">
                  <label>
                    <input type="checkbox" name="gender" value="other" />
                    Outro
                  </label>
                </div>
              </div>

            </div>

            <div className="input-group">
              <input type="text" id="senha" placeholder="Senha" minlength="6" required />
              <span className="icon">
                <i className="material-icons">key</i>
              </span>
            </div>

            <button type="submit" className="btn">
              Cadastrar
            </button>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Cadastro