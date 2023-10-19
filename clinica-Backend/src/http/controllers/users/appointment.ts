import { AppointmentAlreadyBooked } from "@/use-cases/errors/appointment-already-booked";
import { makeAppointmentUseCase } from "@/use-cases/factories/make-appointment-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function appointment (request: FastifyRequest, reply: FastifyReply){
  const appointmentBodySchema = z.object({
    date: z.string(),
    userId: z.number(),
    consulta: z.string(),
    unidade: z.string(),
    nomePaciente: z.string(),
  });

  const {date, userId, consulta, unidade, nomePaciente} = appointmentBodySchema.parse(request.body);

  const appointmentUseCase = makeAppointmentUseCase();

  try{
    await appointmentUseCase.execute({date, userId, consulta, unidade, nomePaciente});
  }catch(err){
    if(err instanceof AppointmentAlreadyBooked){
      return reply.status(409).send({message: err.message});
    }

    throw err;
  }

  return reply.status(201).send();
}