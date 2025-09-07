import bcrypt from "bcryptjs";
import { PrismaClient } from "../generated/prisma";
import { User } from "@/app/lib/types";
const prisma = new PrismaClient();

export const addUser = async (user:User) => {
    const password = user.password;
    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
        data:{
            username:user.username,
            password:hashedPassword,
        }
    })
}

export const getUserFromUser = async (user:User) => {
    const dbUser = await prisma.user.findFirst({
        select:{
            username:true,
            password:true,
        },
        where:{
            username: user.username,
            password: user.password,
        }
    })
    return dbUser
}

export const getUserFromUsername = async (username:string) => {
    const dbUser = await prisma.user.findFirst({
        where:{
            username: username,
        }
    })
    return dbUser
}