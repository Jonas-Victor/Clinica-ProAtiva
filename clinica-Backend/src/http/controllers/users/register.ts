import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { UserAlreadyExistsError } from "@/use-cases/errors/users-already-exists-error";
import { makeRegisterUseCase } from "@/use-cases/factories/make-register-use-case";
import { CpfAlreadyExistsError } from "@/use-cases/errors/cpf-already-exists-error";

export async function register (request: FastifyRequest, reply: FastifyReply){
  const registerBodySchema = z.object({
    firstName: z.string().min(3),
    lastName: z.string().min(3),
    email: z.string().email(),
    cpf: z.string().min(11),
    address: z.string(),
    birthday: z.string(),
    phone: z.string().min(9),
    password: z.string().min(6)
  });

  const {email, firstName, lastName, cpf, address, birthday, phone, password} = registerBodySchema.parse(request.body);
  const registerUseCase = makeRegisterUseCase();

  try{
    await registerUseCase.execute({email, firstName, lastName, cpf, address, birthday, phone, password});
  }catch(err){
    if(err instanceof UserAlreadyExistsError ||  err instanceof CpfAlreadyExistsError){
      return reply.status(409).send({message: err.message});

    }
    throw err;
  }

  return reply.status(201).send();
}