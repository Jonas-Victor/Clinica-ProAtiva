import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCalendarAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './HeaderSide.css'
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function HeaderSide() {

  /* 
  
  function AgendarConsulta() {
          // Obtenha os valores dos campos do formulário
          const consulta = document.getElementById('consulta').value;
          const unidade = document.getElementById('unidade').value;
          const nomePaciente = document.getElementById('nome-paciente').value;
      
          // Enviar os dados para a API no backend
          axios.post('http://localhost:3333/sessions', {
              consulta,
              unidade,
              nomePaciente,
          })
          .then(response => {
              // Lida com a resposta da API, se necessário
              console.log(response.data);
              // Redirecionar para outra página
              window.location.href = '/MeusAgendamentos';
          })
          .catch(error => {
              console.error(error);
          });
      }
  */



  const [formData, setFormData] = useState({
    date: '2023-10-12T10:32', // Data fixa ou qualquer outra lógica para obter a data desejada
    userId: 1, // ID do usuário, pode ser obtido de alguma forma no front-end
    consulta: 'consulta1', // Valor padrão para consulta
    unidade: 'unidade1', // Valor padrão para unidade
    'nomePaciente': '', // Nome do paciente inicialmente vazio
  });

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      date: e.target.value,
    });
  };

  const handleConsultaChange = (e) => {
    setFormData({
      ...formData,
      consulta: e.target.value,
    });
  };

  const handleUnidadeChange = (e) => {
    setFormData({
      ...formData,
      unidade: e.target.value,
    });
  };

  const handleNomePacienteChange = (e) => {
    setFormData({
      ...formData,
      'nomePaciente': e.target.value,
    });
  };
  //isso manda pro de calra
  const [error, setError] = useState('');
  const [agendamentoInfo, setAgendamentoInfo] = useState(null); // Estado para armazenar informações do agendamento
  const [agendamentos, setAgendamentos] = useState([]);
  //isso manda pro de calra
  const token = localStorage.getItem('token');


  const headers = {
    'Authorization': `Bearer ${token}`, // Aqui você inclui o token
    'Content-Type': 'application/json', // Indica que você está enviando JSON
  };


  const handleAgendarClick = () => {
    //esse manda pro de clara 
    setError('');
    setAgendamentoInfo(null);
    //isso manda pro de calra
    // Aqui você pode enviar os dados para o backend, por exemplo, usando uma função fetch ou axios
    // Certifique-se de enviar formData no formato JSON
    fetch('http://localhost:3333/appointments', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(formData),
    }, [])
      .then((response) => {
        //no then pegar ele todo e manda pro not de clara
        if (response.ok) {
          setAgendamentoInfo({
            data: formData.date,
            consulta: formData.consulta,
            unidade: formData.unidade,
            nomePaciente: formData.nomePaciente,
          });
          setFormData({
            date: '', // Define a data como vazia
            consulta: 'consulta1', // Você pode definir o valor padrão novamente
            unidade: 'unidade1', // Você pode definir o valor padrão novamente
            nomePaciente: '', // Define o nome do paciente como vazio
          });

        } else if (response.status === 409) {
          setError('Data e horário já estão ocupados , tente outro horario ');
        } else {
          console.error('Erro no servidor:', response.status);
        }

        //isso manda pro de calra e mandar a div que esta la em baico ou apenas copias e colar la 

      })
      .catch((error) => {
        // Lidar com erros de rede ou do servidor aqui
        console.error('Erro ao enviar os dados:', error);
      });
  };

  /*
     const handleAgendarClickaponit = () => {
      // Aqui você pode enviar os dados para o backend, por exemplo, usando uma função fetch ou axios
      // Certifique-se de enviar formData no formato JSON
      fetch('http://localhost:3333/me', {
        method: 'GET',
      })
        .then((response) => {
          // Lidar com a resposta do servidor aqui
          // Por exemplo, mostrar uma mensagem de sucesso ou erro ao usuário
          console.log('Resposta do servidor:', response);
          console.log(response.data)
          console.log(response.data.user.appointments)
        })
        .catch((error) => {
          // Lidar com erros de rede ou do servidor aqui
          console.error('Erro ao enviar os dados:', error);
        });
    }; 
  
  */
  // colocar na funçao o onclick la no botao = onClick={AgendarConsulta}


  return (
    <div className='ContainerAgendameto'>
      <div className='HeaderAgendar'>
        <div className='agendamento-form'>
          <label htmlFor="date" id='datelabel'>Escolha a data:</label>
          <input type="datetime-local" id="date" name="date" onChange={handleDateChange} />
          <div style={{ color: 'red' }}>{error}</div>

          <label htmlFor="consulta" id='consultalabel'>Escolha a consulta:</label>
          <select id="consulta" name="consulta" onChange={handleConsultaChange}>
            <option value="consulta1">Consulta</option>
            <option value="consulta2">Hemograma</option>
            <option value="consulta3">Eletrocardiograma</option>
            <option value="consulta4">Teste Ergométrico</option>
            <option value="consulta5">Glicemia</option>
            <option value="consulta6">TSH e TS Livre</option>
            <option value="consulta7">Ácido Úrico</option>
          </select>

          <label htmlFor="unidade" id='unidadelabel'>Escolha a unidade:</label>
          <select id="unidade" name="unidade" onChange={handleUnidadeChange}>
            <option value="unidade1">Unidade 1 BR-226 - Pau dos Ferros-RN</option>
            <option value="unidade2">Unidade 2 Rua João Raulino Da Costa Chico - Cajá - Pau dos Ferros - RN</option>
            <option value="unidade3">Unidade 3 R. Chico Pedro, 160-240 - Alto de São Manoel, Mossoró - RN</option>
          </select>

          <label htmlFor="nome-paciente" id='pascientelabel'>Nome do Paciente:</label>
          <input type="text" id="nomePaciente" name="nome-paciente" placeholder="Digite o nome do paciente" onChange={handleNomePacienteChange} />

          <button type="button" id="agendar-button" onClick={handleAgendarClick}>Agendar</button>
        </div>

      </div>

      <p className='BemvindoAG'>Seja Bem vindo(a);</p>
      <div className='AgendamentosFeitos'>
        <h1 className='h1Agendamentos'> Agendamentos Realizados</h1>
      </div>

      {agendamentoInfo && (
        <div className="agendamento-info">
          <h2>Agendamento Realizado :</h2>
          <p>Data: {agendamentoInfo.data}</p>
          <p>Consulta: {agendamentoInfo.consulta}</p>
          <p>Unidade: {agendamentoInfo.unidade}</p>
          <p>Nome do Paciente: {agendamentoInfo.nomePaciente}</p>
        </div>
      )}

    </div>
  );
}

export default HeaderSide;