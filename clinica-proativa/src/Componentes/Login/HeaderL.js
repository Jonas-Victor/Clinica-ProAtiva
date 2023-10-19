import './HeaderL.css'
import Logo from '../../images/Login/Logo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

function HeaderL() {
 

  async function login() {
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
  
    try {
      const response = await axios.post('http://localhost:3333/sessions', {
        email: email.toString(),
        password: password.toString(),
      });
  
      if (response.data.token) {
        return response.data.token;
      } else {
        throw new Error('Token não encontrado na resposta do backend ou ocorreu um erro.');
      }
    } catch (error) {
      throw new Error('Erro na chamada do backend: ' + error.message);
    }
  }
  
  async function entrar(event) {
    const emailInput = document.getElementById('email'); // Substitua 'email' pelo ID real do elemento de entrada de email
    const passwordInput = document.getElementById('password'); // Substitua 'password' pelo ID real do elemento de entrada de senha
    event.preventDefault();
     try {
      const response = await axios.post('http://localhost:3333/sessions', {
        email: emailInput.value.toString(),
        password: passwordInput.value.toString(),
      });
      
      if (response.data.token) {
        // Armazene o token no Local Storage
        localStorage.setItem('token', response.data.token);

        // Redirecione para a página 'HomeAutenticado'
        window.location.href = '/Agendar'; // Use navigate para redirecionar
      } else {
        // Trate casos em que não há token retornado ou houve um erro
        console.error('Token não encontrado na resposta do backend ou ocorreu um erro.');
        alert('Erro ao fazer login. Verifique suas credenciais.');
      }
    } catch (error) {
      // Lida com erros, por exemplo, mostrando uma mensagem de erro
      console.error('Erro na chamada do backend:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

/*
let email = document.querySelector('#email')
let password = document.querySelector('#password')



  async function entrar(event) {
   // Faça uma chamada de backend usando o Axios
   event.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:3333/sessions', {
        email: email.toString(),
        password: password.toString(),
      });
      // Faça algo com a resposta do backend
  
      if (response.data.token) {
        // Armazene o token no Local Storage
       localStorage.setItem('token', response.data.token);
        console.log(response.data.token);
  
        // Redirecione para a página 'HomeAutenticado'
        alert(response.data.token);
        alert(response.data.token);
        window.location.href = '/Agendar';
      } else {
        // Trate casos em que não há token retornado ou houve um erro
        console.error('Token não encontrado na resposta do backend ou ocorreu um erro.');
        alert('Erro ao fazer login. Verifique suas credenciais.');
      }
    } catch (error) {
      // Lida com erros, por exemplo, mostrando uma mensagem de erro
      console.error('Erro na chamada do backend:', error);
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
  }

*/











    return (
        <div id="Container-Login">

            <div className="Img-Fundo"></div>

            <div className="Login-div">

                <img src={Logo} />

                <h1 className='Login'>Login</h1>
                <form className="login-form">
                <input className='Email' type="text" id="email" name="email" required placeholder='E-mail'/>
                <input className='Senha' type="password" id="password" name="password" required placeholder='Senha'/>
                <button onClick={entrar} type="submit" className='Button-Entrar'>Logar</button>
                </form>

                <div className='LogSec'>
                <span className='Cadastrar'><Link to={'/Cadastrar'}>Cadastrar-se</Link> </span>
                <span className='RecuperarSenha'><Link to={'/Recuperar'}>Esqueceu sua senha ?</Link> </span>
                </div>  

                <span className='VoltarL'><Link  to={'/'} > &lt;Voltar</Link></span>

            </div>

        </div>
    )
}
export default HeaderL;