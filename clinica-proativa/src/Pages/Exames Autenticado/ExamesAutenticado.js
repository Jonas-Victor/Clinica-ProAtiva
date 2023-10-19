import HeaderExame from "../../Componentes/Exames/HeaderExame";
import RodapeAutenticado from "../../Componentes/Autenticados/Rodape Autenticado/RodapeAutenticado";
import SidebarAutenticada from "../../Componentes/homeAutenticado/sidebarAutenticada";

function Exames() {
    return (
    <div className="Container-Exames">
      <SidebarAutenticada/>
    
      <HeaderExame/>

      <RodapeAutenticado/>
    </div>
    );
  }
  export default Exames;
  