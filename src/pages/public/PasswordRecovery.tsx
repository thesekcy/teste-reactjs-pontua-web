import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import recoverySchema, {
  recoveryFormValues,
} from '../../schemas/recoverySchema'

import FloatingInputComponent from '../../components/floatingInput'
import ButtonComponent from '../../components/button'

import { EmailIcon } from '../../assets/icons/email'
import { LeftArrowIcon } from '../../assets/icons/leftArrow'
import LoginTemplate from '../../components/loginTemplate'

export default function PasswordRecovery() {
  const [recoverySend, setRecoverySend] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<recoveryFormValues>({ resolver: zodResolver(recoverySchema) })

  function onSubmit(dataForm: recoveryFormValues) {
    setRecoverySend(true)
  }

  return (
    <LoginTemplate>
      {recoverySend ? (
        <>
          <h2>
            Tudo certo <span>;&#41;</span>
          </h2>
          <p>
            Foi enviado um e-mail para você com instruções de como redefinir a
            sua senha.
          </p>

          <ButtonComponent
            link="/login"
            customClass="text-center"
            title="voltar para o login"
            size="lg"
          />
        </>
      ) : (
        <>
          <h2>
            Recuperar senha<span>.</span>
          </h2>
          <p>
            Informe o e-mail do seu cadastro. Nós estaremos realizando o envio
            de um link com as instruções para você redefinir a sua senha.
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column"
          >
            <FloatingInputComponent
              register={register('email')}
              name="email"
              type="email"
              placeholder="Informe sua e-mail"
              mb="4"
              required
              icon={<EmailIcon />}
            />
            {errors.email && (
              <div className="invalid-feedback d-block">
                {errors.email.message}
              </div>
            )}

            <ButtonComponent
              title="enviar link"
              submit
              width="full"
              size="lg"
            />

            <ButtonComponent
              icon={<LeftArrowIcon />}
              customClass="text-center mt-4"
              link="/login"
              title="Voltar a tela de login"
              size="sm"
              theme="text"
            />
          </form>
        </>
      )}
    </LoginTemplate>
  )
}
