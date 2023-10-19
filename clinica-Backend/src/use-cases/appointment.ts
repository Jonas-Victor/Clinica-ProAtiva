import { Appointment } from "@prisma/client";
import { AppointmentsRepository } from "@/repositories/appointments-repository";
import {  parseISO, startOfHour } from "date-fns";
import { AppointmentAlreadyBooked } from "./errors/appointment-already-booked";



interface AppointmentInterfaceUseCaseRequest {
 date: string;
 userId: number;
 consulta: string;
 unidade: string;
 nomePaciente: string;
}


interface AppointmentUseCaseResponse{
  appointment: Appointment;
}

export class AppointmentUseCase {

  constructor(
    private appointmentsRepository: AppointmentsRepository,
  ){}

  async execute({date, userId, consulta,unidade, nomePaciente}: AppointmentInterfaceUseCaseRequest): Promise<AppointmentUseCaseResponse>{

    const data = parseISO(date);

    const appointmentDate = startOfHour(data);
    console.log(appointmentDate);

    const findAppointmentInSameDate =
      await this.appointmentsRepository.findByDate(appointmentDate);

    if (findAppointmentInSameDate) {
      throw new AppointmentAlreadyBooked();
    }

    const appointment = await this.appointmentsRepository.create({
      date: appointmentDate,
      userId,
      consulta,
      unidade,
      nomePaciente
    });

    return {
      appointment,
    };
  }
}
