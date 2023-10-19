import { Appointment, Prisma,  } from "@prisma/client";

export interface AppointmentsRepository{
    findByDate(date: Date): Promise<Appointment | null>;
    create(data: Prisma.AppointmentUncheckedCreateInput): Promise<Appointment>;
}