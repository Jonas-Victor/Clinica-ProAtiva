import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";
import { UsersRepository } from "../users-repository";

export class PrismaUsersRepository implements UsersRepository{

  async findById(userId: number): Promise<User | null> {
    const user = await prisma.user.findFirst({
      where: {
        id: userId
      },
      include:{
        appointments: true
      }
    });

    return user;
  }

  async findByEmail(email: string): Promise<User | null> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        email
      }
    });

    return userAlreadyExists;
  }
  async findByCpf(cpf: string): Promise<User | null> {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        cpf
      }
    });

    return userAlreadyExists;
  }

  async create(data: Prisma.UserCreateInput){
    const user = await prisma.user.create({
      data
    });

    return user;
  }
}