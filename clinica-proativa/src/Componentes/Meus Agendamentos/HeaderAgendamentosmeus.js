import './HeaderAgendamentosmeus.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const getUserAppointments = async (userId, token) => {
    try {
      const response = await axios.get(`http://localhost:3333/apointments`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      return response.data.user.appointments;
    } catch (error) {
      console.error('Erro ao buscar os agendamentos do usuário', error);
      throw error;
    }
  };


function HeaderMExame(userId , token){


      const [appointments, setAppointments] = useState([]);

      useEffect(() => {
        getUserAppointments(userId, token)
          .then((data) => {
            setAppointments(data.appointments);
          })
          .catch((error) => {
            // Lide com erros aqui
          });
      }, [userId, token]);
    


    return(
        <div className="ContainerMeusExames">

        <div className="PostExamesMeus">
            <div className='triangle'>
                <h1 className='traingleh1'>Meus Agendamentos</h1>
            </div>
        </div>
        <p className='BemvindoAG'>Seja Bem vindo(a);</p>
        <div className='AgendamentosFeitos'>
            <h1 className='h1Agendamentos'> Agendamentos Realizados</h1>
        </div>




        <div className="ContainerMeusExames">
      {appointments.map((appointment) => (
        <div key={appointment.userId} className="AppointmentBox">  
          <p>Data: {appointment.date}</p>
          <p>consulta: {appointment.consulta}</p>
          <p>Local: {appointment.unidade}</p>
          <p>Nome: {appointment.nomePaciente}</p>
        </div>
      ))}
    </div>






        </div>
    )
}

export default HeaderMExame;