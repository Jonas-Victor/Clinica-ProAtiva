import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faClockRotateLeft, faHeartbeat,faStethoscope,faUserNurse,faEye , faCode, faHeart,faHospital } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (



        <div className='Container'>

<div className='imagen'></div>

            <br />
            <br />
            <br />
            <span className='titulo' >Nossa Equipe</span>


            <div className='teste'>

                <div className='containerdascoisas'>
                    <div className='Imagem1'></div>
                    <div className='Texto'>
                        <span className='titulo1'> Doutora Paula Andrade </span>
                        <br />
                        <br />
                        <p className='textosize'>
                            Médica graduada pela Universidade da cidade de São Paulo 2021.
                            Pós graduanda em Mindfulness pelo IPq-USP, 2022. Em certificação internacional pela Green Flower Academy - California, 2022.
                            Pós graduada em Medicina Antroposofica pela ABMA (Associação Brasileira de Medicina Antroposofica), 2020/2021.
                            Ex presidente da liga de Medicina Integrativa da Universidade de São Paulo, 2018.
                            Atualmente atende como médica no programa de saúde da família, e atende presencialmente no RN e MG e on-line em todo Brasil.
                        </p>
                    </div>
                </div>

                <div className='containerdascoisas'>
                    <div className='Imagem2'></div>
                    <div className='Texto'>
                        <span className='titulo1'> Doutor Tulio </span>
                        <br />
                        <br />
                        <p className='textosize'>
                            Especialista em Pediatria Formado em Medicina pela UERN, o Dr. Tulio é um dedicado especialista em pediatria, trazendo consigo anos
                            de experiência e conhecimento em cuidados infantis.Sua paixão pela saúde das crianças o levou a se especializar em pediatria, onde tem
                            se empenhado em fornecer cuidados compassivos e baseados em evidências para seus pequenos pacientes.Com um compromisso contínuo com o
                            aprendizado e a atualização, o Dr. Tulio oferece orientação confiável para pais e responsáveis, garantindo que cada criança receba a
                            atenção médica especializada que merece desde os primeiros momentos de vida.
                        </p>
                    </div>
                </div>
            </div>

            <div className='teste'>

                <div className='containerdascoisas'>
                    <div className='Imagem4'></div>
                    <div className='Texto'>
                        <span className='titulo1'>Dr. Wladmir</span>
                        <br />
                        <br />
                        <p className='textosize'>
                            Apresentamos o Dr. Wladmir, um profissional altamente qualificado na área da oftalmologia. Graduado em Medicina pela UFERSA e especializado em
                            oftalmologia, ele traz consigo um profundo conhecimento e experiência no cuidado da saúde ocular. Com anos de prática clínica e um compromisso
                            inabalável com a excelência, sendo especializado em diagnosticar e tratar uma ampla gama de condições oculares, desde problemas de visão corretáveis
                            até doenças oculares complexas. Sua abordagem compassiva e habilidades técnicas avançadas o tornam uma escolha confiável para quem busca cuidados
                            oftalmológicos de alta qualidade e personalizados.
                        </p>
                    </div>
                </div>

                <div className='containerdascoisas'>
                    <div className='Imagem3'></div>
                    <div className='Texto'>
                        <span className='titulo1'>  Doutor Claudio </span>
                        <br />
                        <br />
                        <p className='textosize'>
                            O Dr. Claudio é especialista em cuidados Médicos Abrangentes para Saúde Total, um dedicado clínico geral comprometido em fornecer cuidados médicos
                            abrangentes para pacientes de todas as idades. Com sua formação em Medicina pela respeitada USP  e vasta experiência em medicina clínica, o Dr. Claudio
                            é um especialista em diagnosticar uma ampla gama de condições médicas e oferecer orientações personalizadas para promover a saúde e o bem-estar.
                        </p>
                    </div>
                </div>
            </div>

            <div className='Banner'>
                <span className='TituloBanner'> Horarios de atendimento </span>
                <div className='Elemento'>
                    <div className='clockdiv'>
                        <FontAwesomeIcon size='4x' icon={faClockRotateLeft} />
                    </div>
                    <div>
                        <p className='ConteudoBanner'>
                            Segunda a Quinta das 8 hs da manha as 19 horas da noite.
                            Sexta das 8 as 17 da tarde .Sabado das 8 as 13 da tarde
                        </p>
                    </div>
                </div>
                <button className='botaoAgendarBanner'> <FontAwesomeIcon icon={faWhatsapp} className='WatsBotao' /> Agendar Consulta</button>
            </div>


            <div className='Especialidadescontainer'>
                <p><span className='ESP'>Especialidades</span></p>
                <div className='conteudoEspecialidade'>
                    <FontAwesomeIcon className='iconEPC' size='5x' icon={faHospital} /> {/* Ícone de hospital */}
                    <p className='conteudo-ESP'>Os melhores especialistas em um só lugar</p>
                </div>
            </div>

            <div className='Containerconteudo'>
                <div className='Conteudo1'>
                    <FontAwesomeIcon className='iconEsp' icon={faHeartbeat} size="5x" />
                    <h2 className='EspGeral'>Cardiologia</h2>
                    <p>Médico especializado no tratamento dos pacientes com doenças no coração e vasos sanguíneos,
                        bem como responsável pela avaliação de risco cirúrgico e exames.</p>
                </div>

                <div className='Conteudo1'>
                <FontAwesomeIcon className='iconEsp' icon={faStethoscope} size="5x" />
                    <h2 className='EspGeral'>Clinico Geral</h2>
                    <p>Médico especializado no tratamento dos pacientes com doenças no coração e vasos sanguíneos,
                        bem como responsável pela avaliação de risco cirúrgico e exames.</p>
                </div>

                <div className='Conteudo1'>
                <FontAwesomeIcon className='iconEsp' icon={faUserNurse} size="5x" />
                    <h2 className='EspGeral'>Pediatria</h2>
                    <p>Médico especializado no tratamento dos pacientes com doenças no coração e vasos sanguíneos,
                        bem como responsável pela avaliação de risco cirúrgico e exames.</p>
                </div>

                <div className='Conteudo1'>
                <FontAwesomeIcon className='iconEsp' icon={faEye} size="5x" />
                    <h2 className='EspGeral'>Oftamologia</h2>
                    <p>Médico especializado no tratamento dos pacientes com doenças no coração e vasos sanguíneos,
                        bem como responsável pela avaliação de risco cirúrgico e exames.</p>
                </div>
            </div>



        </div>//fechamento da div container




    )
}

export default Header