import { z } from 'zod'


export const loginSchema = z.object({
    body: z.object({
        email: z.string().nonempty('Email is required').email({
            message: 'Invalid email'
        }),//lo de entre '' son errores personalizados
        password: z.string().nonempty('Password is required').min(6, 'Short Password')
    })
});

