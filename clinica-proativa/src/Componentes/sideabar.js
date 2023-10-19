import './sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function sidebar() {
    return (

        <div className='ContainerGeral'>
            <div className="Containertop">
                <div>
                    <span className='EnderecoIcon'> <FontAwesomeIcon icon={faMapMarkerAlt} /></span> <span className='Endereco'>BR-226, s/n, Pau dos Ferros - RN, 59900-000</span>
                </div >
                <div>
                    <span className='ContatoIcon'><FontAwesomeIcon icon={faWhatsapp} /></span> <span className='Contato'>(84) - 3251 - 5555</span>
                </div>
            </div>
            <div className='menu-container'>
                <ul className='menu-pricipal'>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/Exames'}>Exames</Link></li>
                    <li><Link to={'/Unidades'}>Unidades</Link></li>
                    <li><Link to={'/Login'}>Agendar</Link></li>
                    <li><Link to={'/Login'}>Logar</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default sidebar;