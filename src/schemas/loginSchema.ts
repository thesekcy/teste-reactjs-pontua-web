import { z } from 'zod'

const loginSchema = z.object({
  email: z.string()
    .nonempty('O email é um campo obrigatório')
    .email('Insira um email válido'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),

})

export type loginFormValues = z.infer<typeof loginSchema>;

export default loginSchema
