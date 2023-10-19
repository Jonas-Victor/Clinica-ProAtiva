import RodapeAutenticado from "../../Componentes/Autenticados/Rodape Autenticado/RodapeAutenticado";
import SidebarAutenticada from "../../Componentes/homeAutenticado/sidebarAutenticada";
import HeaderAgendamentosmeus from "../../Componentes/Meus Agendamentos/HeaderAgendamentosmeus";

function MeusAgendamentos() {
    return (
    <div>
    <SidebarAutenticada/>

    <HeaderAgendamentosmeus/>    

    <RodapeAutenticado/>    

    </div>
    );
}
export default MeusAgendamentos;
