import { Appointment, Prisma } from "@prisma/client";
import { AppointmentsRepository } from "./../appointments-repository";
import { prisma } from "@/lib/prisma";
export class PrismaAppointmentsRepository implements AppointmentsRepository{
  async findByDate(date: Date): Promise<Appointment | null> {
    const appointment = await prisma.appointment.findFirst({
      where:{
        date
      }
    });

    if(!appointment){
      return null;
    }

    return appointment;
  }
  async create(data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment> {
    const appointment = prisma.appointment.create({data});

    return appointment;
  }
}