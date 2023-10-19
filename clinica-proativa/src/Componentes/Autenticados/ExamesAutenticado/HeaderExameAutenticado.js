
import './HeaderExame.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Hemograma } from '../../images/Exames/Hemograma.png';


function HeaderExame() {
    return (
        <div className='ContainerExame'>

            <div className='imgExame'></div>

            <div className='Conteudo'>
                <span className='ConteudoExame'>Fazemos exames para iluminar o caminho da sua saúde. </span> <hr />
                <span className='ConteudoExame'>Nossa busca pela precisão é impulsionada por seu bem-estar.</span><hr />
                <span className='ConteudoExame'>Descubra conosco o poder dos detalhes que fazem toda a diferença.</span>

                <div>
                    <input className='pesquisa' type="text" id="pesquisa" name="pesquisa" required placeholder='o que voçe esta pocurando?' />
                    <FontAwesomeIcon className='i' size='2x' icon={faSearch} />
                </div>
            </div>


            <div className='Titulo'>

                <h1 className='TituloExame'>Exames</h1>
                <div className='Exames'>

                    <div className='contEx'>
                        <div className='Hemogramafundo'></div>
                        <span className='SpanExame'>Hemograma</span>
                    </div>

                    <div className='contEx'>
                        <div className='Eletrocardiogramafundo'></div>
                        <span className='SpanExame'>Eletrocardiograma</span>
                    </div>

                    <div className='contEx'>
                        <div className='TesteErgometricofundo'></div>
                        <span className='SpanExame'>Teste Ergométrico</span>
                    </div>

                    <div className='contEx'>
                        <div className='Glicemiafundo'></div>
                        <span className='SpanExame'>Glicemia</span>
                    </div>

                    <div className='contEx'>
                        <div className='Tshfundo'></div>
                        <span className='SpanExame'>TSH e T$ Livre</span>
                    </div>

                    <div className='contEx'>
                        <div className='Acidofundo'></div>
                        <span className='SpanExame'>Acido Úrico</span>
                    </div>

                </div>
            </div>


            <div className='ContatoEx'>
                <h2 className='h2E'>Qualquer duvida entre em contado com a nossa central !</h2>
                <div className='BannerEx'></div>
            </div>
        


        </div>
    )
}

export default HeaderExame;