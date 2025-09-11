import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { string, z } from 'zod'
import { getUserFromUsername } from './app/data/db';
import bcrypt from 'bcryptjs';
import { loginAPI } from './app/actions/loginAPIAction';
 
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
              const {access_token} = await loginAPI({username, password})
              return {id:user.id.toString(), username:user.username, access_token:access_token};
            }
        }
        console.log('Invalid credentials');
        return null;
    }
  })],
  callbacks: {
  async jwt({ token, user }) {
    // 🔑 Premier login : merge les infos du user et accessToken dans le token
    if (user) {
      token.id = user.id;
      token.username = user.username;
      token.accessToken = user.access_token;
      token.accessTokenExpires = Date.now() + (15 * 60000)
      
      console.log(token)
    }
    return token;
  },
  async session({ session, token }) {
    // 🔑 On les copie dans la session exposée côté client/serveur
    
    session.user = {//@ts-ignore
      id: token.id,//@ts-ignore
      username: token.username,
    };//@ts-ignore
    session.accessToken = token.accessToken;
    return session;
  },
},
});