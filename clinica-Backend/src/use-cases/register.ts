import { hash } from "bcryptjs";
import { UsersRepository } from "@/repositories/users-repository";
import { UserAlreadyExistsError } from "./errors/users-already-exists-error";
import { User } from "@prisma/client";
import { CpfAlreadyExistsError } from "./errors/cpf-already-exists-error";


interface RegisterInterfaceUseCaseRequest {
 email: string;
 firstName:string;
 lastName:string;
 cpf: string; 
 address:string; 
 birthday:string; 
 phone:string;
 password:string
}


interface RegisterUseCaseResponse{
  user: User;
}

export class RegisterUseCase {

  constructor(private usersRepository: UsersRepository){}

  async execute({email, firstName, lastName, cpf, address, birthday, phone, password}: RegisterInterfaceUseCaseRequest): Promise<RegisterUseCaseResponse>{

    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if(userAlreadyExists){
      throw new UserAlreadyExistsError();
    }

    const cpfAlreadyExists = await this.usersRepository.findByCpf(cpf);

    if(cpfAlreadyExists){
      throw new CpfAlreadyExistsError();
    }

    const password_hash = await hash(password, 10);


    const user = await this.usersRepository.create({email, firstName, lastName, cpf, address, birthday, phone, password_hash});


    return {
      user,
    };
  }
}
