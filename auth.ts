import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod'
import { getUserFromUsername } from './app/data/db';
import bcrypt from 'bcryptjs';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers:[Credentials({
    async authorize(credentials){
        const parsedCredentials = z
            .object({username: z.string(), password: z.string().min(6)})
            .safeParse(credentials);
        if(parsedCredentials.success){
            console.log('success parsing')
            const { username, password } = parsedCredentials.data;
            const user = await getUserFromUsername(username);
            console.log('user get : ', user)
            if(!user) return null;
            const passwordMatch = await bcrypt.compare(password, user.password);
            if(passwordMatch) return {id:user.id.toString(), username:user.username};
        }
        console.log('Invalid credentials');
        return null;
    }
  })],
});