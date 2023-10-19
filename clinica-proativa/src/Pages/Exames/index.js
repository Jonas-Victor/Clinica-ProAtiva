import HeaderExame from "../../Componentes/Exames/HeaderExame";
import Rodape from "../../Componentes/Rodape";
import Sidebar from "../../Componentes/sideabar";

function Exames() {
    return (
    <div className="Container-Exames">
      <Sidebar/>
    
      <HeaderExame/>

      <Rodape/>
    </div>
    );
  }
  export default Exames;
  