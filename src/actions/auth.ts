"use server";

import { signIn, signOut } from "@/auth";
import { loginType, registerSchema, registerType } from "@/schemas/auth";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { defaultRoute } from "@/auth/routes";
import { AuthError } from "next-auth";

export const loginAction = async (values: loginType) => {
  try {
    await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    // console.error(error);
    return { error: "error 500" };
  }
};

export const logoutAction = async () => {
  await signOut({
    redirectTo: defaultRoute,
  });
};

export const registerAction = async (values: registerType) => {
  try {
    const { data, success } = registerSchema.safeParse(values);
    if (!success) {
      return {
        error: "Invalid data",
      };
    }

    // verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      return { error: "El correo electrónico ya está registrado." };
    }

    /* if (user) {
      // Verificar si tiene cuentas OAuth vinculadas
      const oauthAccounts = user.account.filter(
        (account) => account.type === "oauth"
      );
      if (oauthAccounts.length > 0) {
        return {
          error:
            "Confirmar tu identidad, inicia sesión con la misma cuenta que usaste originalmente.",
        };
      }
      return {
        error: "El usuario ya existe",
      };
    } */

    // hash de la contraseña
    const passwordHash = await bcrypt.hash(data.password, 10);

    // crear el usuario
    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: passwordHash,
        rol: data.rol,
      },
    });

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: error.cause?.err?.message };
    }
    console.error(error);
    return { error: "error 500" };
  }
};
