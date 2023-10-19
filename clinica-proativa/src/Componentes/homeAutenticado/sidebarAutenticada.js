import React, { useState } from 'react';
import './sidebarAutenticada.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function SidebarAutenticada() {
    const [sairVisivel, setSairVisivel] = useState(false);

    // Função para alternar a visibilidade da opção "Sair"
    const toggleSair = () => {
        setSairVisivel(!sairVisivel);
    };

    return (
        <div className='ContainerGeral'>
            <div className="Containertop">
                <div>
                    <span className='EnderecoIcon'> <FontAwesomeIcon icon={faMapMarkerAlt} /></span> <span className='Endereco'>BR-226, s/n, Pau dos Ferros - RN, 59900-000</span>
                </div>
                <div>
                    <span className='ContatoIcon'><FontAwesomeIcon icon={faWhatsapp} /></span> <span className='Contato'>(84) - 3251 - 5555</span>
                </div>
            </div>
            <div className='menu-containerA'>
                <ul className='menu-pricipalA'>

                    <li><Link to={'/HomeAutenticado'}>Home</Link></li>
                    <li><Link to={'/ExamesAutenticado'}>Exames</Link></li>              
                    <li><Link to={'/UnidadesAutenticado'}>Unidades</Link></li>
                    <li><Link to={'/Agendar'}>Agendar</Link></li>
                    <li className='usuario-link' ><Link >usuario</Link>
                        <div className='Sub-menu-1'>
                        <li><Link  Link to={'/MeusExames'}>Meus Exames</Link></li>
                        <li><Link to={'/MeusAgendamentos'}>Meus Agendamentos</Link></li>
                        <li><Link to={'/Login'}>Sair</Link></li>
                        </div>        
                    </li>


                </ul>
            </div>
        </div>
    );
}

export default SidebarAutenticada;
