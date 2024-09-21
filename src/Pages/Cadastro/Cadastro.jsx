import { auth, db } from '../../firebase/authentication';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import Container from '../../Components/Container/Container';
import Logo from "../../Images/logo.png"


export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [numero, setNumero] = useState('')

  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');


  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Validação do e-mail
    if (!isValidEmail(email)) {
      setMensagemErro('Formato de e-mail inválido. Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log('Usuário criado:', user);

      await setDoc(doc(db, 'usuarios', user.uid), {
        email,
        cpf,
        nome,
        numero,
        senha
      });

      setMensagemSucesso('Usuário cadastrado com sucesso! Aguarde...');
      setMensagemErro('');
    } catch (error) {
      if (error instanceof Error) {
        console.error('Erro ao cadastrar:', error.message);
        setMensagemErro('Erro ao cadastrar o usuário: ' + error.message);
      } else {
        console.error('Erro desconhecido:', error);
        setMensagemErro('Erro desconhecido.');
      }
      setMensagemSucesso('');
    }
  };




  return (
    <>
      <Container>
        <div className="login-form">
          <div className='background-logo'>
            <img src={Logo} alt="Logo NextGen" className="logo" />
          </div>
          <form onSubmit={handleSignUp}>
            <div className="input-group">
              <input
                type="email"
                id="e-mail"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />

              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="text" id="cpf" placeholder="CPF" maxlength="11" onChange={(e) => setCpf(e.target.value)} pattern="[0-9]*" autoComplete='off' inputmode="numeric"
                oninput="this.value = this.value.replace(/[^0-9]/g, '');" title="Insira seu CPF com até 11 dígitos numéricos" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="text" id="name" value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome Completo" autoComplete='off' />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>

            <div className="input-group">
              <input id="number" placeholder="Celular" autoComplete='off' onChange={(e) => setNumero(e.target.value)}
                maxlength="11" pattern="[0-9]*" inputmode="numeric" title="Insira seu telefone com até 11 dígitos numéricos" />
              <span className="icon">
                <i className=""></i>
              </span>
            </div>
            <div className="input-group">
              <input type="password" id="senha" placeholder="Senha" minlength="6" autoComplete='off'
                onChange={(e) => setSenha(e.target.value)} required />
              <span className="icon">
                <i className="material-icons">key</i>
              </span>
            </div>

            <button type="submit" className="btn">
              Cadastrar
            </button>
            {mensagemSucesso && (
              <p className="formSucesso">{mensagemSucesso}</p>
            )}

            {mensagemErro && (
              <p className="formErro">{mensagemErro}</p>
            )}
          </form>
        </div>
      </Container>
    </>
  )
}
