import { useState } from 'react';
import './ContatoAutenticado.css';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function ContatoAutenticado(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

function sendEmail(e){
  e.preventDefault();

  if(name === '' || email === '' || message === ''){
    alert('Preencha todos os campos')
    return;
  }

  const teamplateParams = {
    from_name: name,
    message: message,
    email:email
  }

  emailjs.send("service_3otcr08", "template_o4pa759", teamplateParams,"ks2rh1HjogQ2WJX4q")
   .then((response)=> {
    console.log("Email Enviado", response.status , response.text)
    setName('')
    setEmail('')
    setMessage('')
   },(err)=>{
    console.log("erro:" , err)
   })
}


    return(
      <div className='divcontato'>
        <div className="container">
        <h1 className="title">Contato</h1>
  
        <form className="form" onSubmit={sendEmail}>
          <input 
            className="input"
            type="text"
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          
          <input 
            className="input"
            type="text"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
  
          <textarea 
            className="textarea"
            placeholder="Digite sua mensagem..."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
  
          <input className="button" type="submit" value="Enviar" />
        </form>
       <Link target="_blank" to='https://api.whatsapp.com/send?phone=5584996109219'><span className='ContatoIconPage'> <span ><FontAwesomeIcon icon={faWhatsapp} /></span> <span className='ContatoPage'>Contato Pelo Whatsapp</span></span></Link>
      
       <span className='VoltarContato'><Link style={{ color: '#278680' }} to='/HomeAutenticado'>&lt;Voltar</Link></span>
      </div>
     
      </div>
    )
}

export default ContatoAutenticado;