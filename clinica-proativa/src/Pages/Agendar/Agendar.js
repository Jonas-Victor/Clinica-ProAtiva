import SidebarAutenticada from "../../Componentes/homeAutenticado/sidebarAutenticada";
import RodapeAutenticado from "../../Componentes/Autenticados/Rodape Autenticado/RodapeAutenticado";
import HeaderSide from "../../Componentes/Agendar/HeaderSide";

function Agendar(){
    return(
        <div>
                <SidebarAutenticada/>

                <HeaderSide/>
                
                <RodapeAutenticado/>
        </div>
    )
}

export default Agendar;