import {BrowserRouter, Routes , Route} from 'react-router-dom'

import Home from './Pages/Home'
import Exames from './Pages/Exames'
import Login from './Pages/Login/Login'
import Recuperar from './Pages/Login/RecuperarSenha/Recuperar'
import Cadastrar from './Pages/Login/Cadastrar/Cadastrar'
import Unidades from './Pages/Unidades/Unidades'
import Agendar from './Pages/Agendar/Agendar'
import HomeAutenticado from './Pages/HomeAutenticado/HomeAutenticado'
import MeusExames from './Pages/Meus Exame/MeusExame'
import MeusAgendamentos from './Pages/Meu Agendamentos/MeusAgendamentos'
import ExamesAutenticado from './Pages/Exames Autenticado/ExamesAutenticado'
import UnidadesAutenticado from './Pages/Unidades Autenticado/UnidadesAutenticado'
import Contato from './Pages/contato/Contato'
import ContatoAutenticado from './Pages/ContatoAutenticado/ContatoAutenticado'



function RoutesApp(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/Exames' element={ <Exames/> } />
                <Route path='/Login' element={ <Login/> } />
                <Route path='/Recuperar' element={ <Recuperar/> } />
                <Route path='/Cadastrar' element={ <Cadastrar/> } />
                <Route path='/Unidades' element={ <Unidades/> } />
                <Route path='/Agendar' element={ <Agendar/> } />
                <Route path='/HomeAutenticado' element={ <HomeAutenticado/> } />
                <Route path='/MeusExames' element={ <MeusExames/> } />
                <Route path='/MeusAgendamentos' element={ <MeusAgendamentos/> } />
                <Route path='/ExamesAutenticado' element={ <ExamesAutenticado/> } />
                <Route path='/UnidadesAutenticado' element={ <UnidadesAutenticado/> } />
                <Route path='/Contato' element={ <Contato/> } />
                <Route path='/ContatoAutenticado' element={ <ContatoAutenticado/> } />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp