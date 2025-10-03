import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
    } & DefaultSession["user"];
    accessToken?: string;
    accessTokenExpires?: number;
  }

  interface User {
    id: string;
    username: string;
    access_token: string;
  }

  interface JWT {
    id?: string;
    username?: string;
    accessToken?: string;
    accessTokenExpires?: number;
  }
}