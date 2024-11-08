import { DefaultSession, DefaultUser } from "next-auth";
import { DefaultJWT } from "next-auth/jwt";
import { rol } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      rol?: UserRole;
      userImage?: string;
    } & DefaultSession["user"];
  }

  interface User extends Omit<DefaultUser, "id"> {
    id?: string;
    rol?: rol;
    userImage?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id?: string;
    rol?: rol;
    userImage?: string;
  }
}
