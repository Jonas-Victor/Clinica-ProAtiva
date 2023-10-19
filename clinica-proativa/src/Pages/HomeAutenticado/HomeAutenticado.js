import Header from "../../Componentes/Header";
import RodapeAutenticado from "../../Componentes/Autenticados/Rodape Autenticado/RodapeAutenticado";
import SidebarAutenticada from "../../Componentes/homeAutenticado/sidebarAutenticada";

function HomeAutenticado(){
    return(
        <div>
        <SidebarAutenticada/>
    
        <Header/>
    
        <RodapeAutenticado/>    
    
        </div>
    )
}

export default HomeAutenticado