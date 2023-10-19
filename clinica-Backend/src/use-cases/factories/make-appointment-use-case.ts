import { AppointmentUseCase } from "../appointment";
import { PrismaAppointmentsRepository } from "@/repositories/prisma/primsa-appointments-repository";

export function makeAppointmentUseCase(){
  const appointmentRepository = new PrismaAppointmentsRepository();
  const appointmentUseCase = new AppointmentUseCase(appointmentRepository);

  return appointmentUseCase;
}
