import { z } from "zod";

export const TokenSchema = z.object({
  id: z.string().optional(),
  username: z.string().optional(),
  accessToken: z.string().optional(),
  accessTokenExpires: z.number().optional(),
});

export type TokenShape = z.infer<typeof TokenSchema>;