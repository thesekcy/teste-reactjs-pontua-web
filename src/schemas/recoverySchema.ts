import { z } from 'zod'

const recoverySchema = z.object({
  email: z.string()
    .nonempty('O email é um campo obrigatório')
    .email('Insira um email válido'),
})

export type recoveryFormValues = z.infer<typeof recoverySchema>;

export default recoverySchema
