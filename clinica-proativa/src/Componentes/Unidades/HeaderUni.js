import './HeaderUni.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faMapMarkerAlt, faPhone, faClock } from '@fortawesome/free-solid-svg-icons';


function HeaderUni() {
    return (
        <div className='ContainerUni'>
            <div className='imgUni'></div>

            <div className='containerConteudo'>
                <span className='ConteudoUni'>Fazemos exames para iluminar o caminho da sua saúde. </span> <hr />
                <span className='ConteudoUni'>Nossa busca pela precisão é impulsionada por seu bem-estar.</span><hr />
                <span className='ConteudoUni'>Descubra conosco o poder dos detalhes que fazem toda a diferença.</span>

                <div>
                    <input className='pesquisaUni' type="text" id="pesquisa" name="pesquisa" required placeholder='o que voçe esta pocurando?' />
                    <FontAwesomeIcon className='i' size='2x' icon={faSearch} />
                </div>
            </div>



<div className='ContainerDasUPA'>
                <h1 className='TituloUni'>Unidades</h1>

            <div className='Unidades1'>
                <div className='Imgunidae1'></div>
                <div className='InformacoesUni'>
                    <span className='Cidades'>Pau dos Ferros - RN</span><hr />
                    <div className='uni1'>
                        <span className='EnderecoUni'><FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Endereço</span>
                        <p>BR-226, s/n, Pau dos Ferros - RN, 59900-000</p>
                    </div>
                    <div className='uni2'>
                        <span className='PhoneUni'><FontAwesomeIcon icon={faPhone} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} />Contato</span>
                        <p>(84) 996109219</p>
                    </div>
                    <div className='uni3'>
                        <span className='ClockUni'><FontAwesomeIcon icon={faClock} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Horario de Funcionamento</span>
                        <p>Segunda à sexta das 08:00 às 18:00</p>
                    </div>
                </div>

            </div>



            <div className='Unidades'>
                <div className='Imgunidae2'></div>
                <div className='InformacoesUni'>
                    <span className='Cidades'>Pau dos Ferros - RN</span><hr />
                    <div className='uni1'>
                        <span className='EnderecoUni'>  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Endereço</span>
                        <p>Rua João Raulino Da Costa Chico - Cajá, Pau dos Ferros - RN, 59900-000</p>
                    </div>
                    <div className='uni2'>
                        <span className='PhoneUni'><FontAwesomeIcon icon={faPhone} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} />Contato</span>
                        <p>(84) 996109219</p>
                    </div>
                    <div className='uni3'>
                        <span className='ClockUni'><FontAwesomeIcon icon={faClock} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Horario de Funcionamento</span>
                        <p>Segunda à sexta das 08:00 às 18:00</p>
                    </div>
                </div>
            </div>

            <div className='Unidades'>
                <div className='Imgunidae3'></div>
                <div className='InformacoesUni'>
                    <span className='Cidades'>Mossoró - RN</span><hr />
                    <div className='uni1'>
                        <span className='EnderecoUni'>  <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Endereço</span>
                        <p>R. Chico Pedro, 160-240 - Alto de São Manoel, Mossoró - RN, 59631-220</p>
                    </div>
                    <div className='uni2'>
                        <span className='PhoneUni'><FontAwesomeIcon icon={faPhone} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} />Contato</span>
                        <p>(84) 996109219</p>
                    </div>
                    <div className='uni3'>
                        <span className='ClockUni'><FontAwesomeIcon icon={faClock} style={{ color: 'red', fontSize: '20px', marginRight: '15px' }} /> Horario de Funcionamento</span>
                        <p>Segunda à sexta das 08:00 às 18:00</p>
                    </div>
                </div>

            </div>

            </div>



        </div>
    )
}
export default HeaderUni