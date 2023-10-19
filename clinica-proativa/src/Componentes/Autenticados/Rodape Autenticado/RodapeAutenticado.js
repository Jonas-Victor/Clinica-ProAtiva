import './RodapeAutenticado.css'
import { Link } from 'react-router-dom';

function Rodape(){
    return(
            <div className='containerGeralRodape'>
            <div className='Container-Rodape'>
                <p>Quem Somos ?</p>
                <p>2023- Clinica Proativa</p>
                <p>BR-226, s/n, Pau dos Ferros - RN, 59900-000</p>
            </div>
            <div className='divbotao'>
            <button className='botaoRodape'><Link to={'/ContatoAutenticado'}>Contato</Link></button>
            </div>


            </div>
    )
}

export default Rodape;

