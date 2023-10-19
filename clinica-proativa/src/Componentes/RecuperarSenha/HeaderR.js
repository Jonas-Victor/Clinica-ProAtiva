import './HeaderR.css'
import Logo from '../../images/Login/Logo.png'
import { Link } from 'react-router-dom';

function HeaderR() {
    return (
        <div id="Container-Login">

            <div className="Img-Fundo"></div>

            <div className="Login-div">
                <img src={Logo} />

                <h1 className='Login'>Recuperar Senha </h1>
                <form class="login-form">
                <label className='RecuperarLabel'>Insira seu email para recuperar a sua senha. : </label>
                <input className='Email' type="text" id="username" name="username" required  placeholder='E-mail'/>
                <div className='LogSec'>
                    <p className='Pgf'>Um e-mail de recuperação de senha será enviado para o endereço de e-mail associado à sua conta.</p>
                </div>  
                <button type="submit" className='Button-Entrar'>Enviar</button>
                </form>
                <div className='aaa'>
                <span className='VoltarR'><Link  to={'/Login'} > &lt;Voltar</Link></span>
                </div>
            </div>
          

        </div>
    )
}
export default HeaderR;