import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: "Username es requerido",
    }),

    email: z
    .string({
        required_error: "Email es requerido",
    })
    .email({
        message: "correo invalido",
    }),
    password: z
    .string({
        required_error: "Contraseña requerida",
    })
    .min(8, {
        message: "Contraseña debe ser mayor a 8 caracteres"
    }),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Correo es requerido",
    }).email({
        message: "Correo invalido",
    }),
    password: z.string({
        required_error:"Contraseña es requerida",
    }).min(8, {
        message: "Contraseña debe ser mayor a 8 caracteres",
    }),
});