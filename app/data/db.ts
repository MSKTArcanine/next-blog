import { PrismaClient } from "../generated/prisma";
import { User } from "../type";
const prisma = new PrismaClient();

export const addUser = async (user:User) => {
    await prisma.user.create({
        data:{
            username:user.username,
            password:user.password,
        }
    })
}