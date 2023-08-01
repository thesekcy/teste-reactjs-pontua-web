import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import recoverySchema, {
  recoveryFormValues,
} from '../../schemas/recoverySchema'

import FloatingInputComponent from '../../components/FloatingInput'
import ButtonComponent from '../../components/Button'

import ImageLogin from '../../assets/login.svg'
import Logo from '../../assets/logo_pontua_white.svg'

import { EmailIcon } from '../../assets/icons/email'
import { LeftArrowIcon } from '../../assets/icons/leftArrow'

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
    <div className="login">
      <div className="container d-flex">
        <div className="image-container">
          <img src={Logo} alt="Logo Pontua Web" className="img-fluid logo" />
          <img
            src={ImageLogin}
            alt="Illustration Login"
            className="img-fluid illustration"
          />
        </div>
        <div className="card-container">
          <div className="card">
            {recoverySend ? (
              <>
                <h2>
                  Tudo certo <span>;&#41;</span>
                </h2>
                <p>
                  Foi enviado um e-mail para você com instruções de como
                  redefinir a sua senha.
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
                  Informe o e-mail do seu cadastro. Nós estaremos realizando o
                  envio de um link com as instruções para você redefinir a sua
                  senha.
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
                    // required
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
          </div>
        </div>
      </div>
    </div>
  )
}
