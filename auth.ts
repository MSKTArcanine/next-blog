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
        console.log('TEST')
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
            if(passwordMatch) {
              const res = await fetch('https://blog-api-dqc2a0ftfra7akc5.francecentral-01.azurewebsites.net/api/auth/login/post',
                  {
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body:JSON.stringify({
                      username:username,
                      password:password,
                    })
                  }
                );
                const data = await res.json()
                console.log(data.accessToken)
              return {
                id:user.id.toString(),
                username:user.username,
                accessToken:data.accessToken,
              };
            }
        }
        console.log('Invalid credentials');
        return null;
    }
  })],
});