import { Prisma, User } from "@prisma/client";

export interface UsersRepository{
    findById(userId:number): Promise<User | null>
    findByEmail(email: string): Promise<User | null> 
    findByCpf(cpf: string): Promise<User | null> 
    create(data: Prisma.UserCreateInput): Promise<User>;
}