import { useContext, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../contexts/auth/authContext'
import { useNavigate } from 'react-router-dom'

import { EmailIcon } from '../../assets/icons/email'
import { EyeViewIcon } from '../../assets/icons/eyeView'
import { EyeNotViewIcon } from '../../assets/icons/eyeNotView'
import { EnterRightIcon } from '../../assets/icons/enterRight'
import { ShieldQuestionIcon } from '../../assets/icons/shieldQuestion'

import loginSchema, { loginFormValues } from '../../schemas/loginSchema'

import ButtonComponent from '../../components/button'
import LoginTemplate from '../../components/loginTemplate'
import FloatingInputComponent from '../../components/floatingInput'
import ToastComponent from '../../components/toast'

interface errorType {
  error: boolean;
  title: string;
  message: string;
  type: 'error' | 'success';
}

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<errorType | null>(null)
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }, //TODO - arrumar
  } = useForm<loginFormValues>({ resolver: zodResolver(loginSchema) })

  async function onSubmit(dataForm: loginFormValues) {
    setError(null)

    const access = await auth.signIn(dataForm.email, dataForm.password)

    if (access) {
      return navigate('/profile')
    } else {
      setError({
        error: true,
        title: 'Email ou senha incorretos',
        message:
          'Seu email ou senha estão incorretos ou não existe um usuário cadastrado com esses dados.',
        type: 'error',
      })
    }
  }

  return (
    <LoginTemplate>
      {error && (
        <ToastComponent
          triggerToast={error.error}
          title={error.title}
          description={error.message}
          type={error.type}
        />
      )}
      <h2>
        Bem-vindo<span>.</span>
      </h2>
      <p>informe as suas credenciais de acesso ao portal</p>

      <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
        <FloatingInputComponent
          register={register('email')}
          type="email"
          placeholder="Informe sua e-mail"
          name="email"
          mb="4"
          icon={<EmailIcon />}
        />
        {errors.email && (
          <div className="invalid-feedback d-block pt-1 mt-n4 mb-4">
            {errors.email.message}
          </div>
        )}

        <FloatingInputComponent
          register={register('password')}
          type={showPassword ? 'text' : 'password'}
          placeholder="Informe sua senha"
          name="password"
          mb="2"
          icon={
            showPassword ? (
              <span onClick={() => setShowPassword(false)}>
                <EyeViewIcon />
              </span>
            ) : (
              <span onClick={() => setShowPassword(true)}>
                <EyeNotViewIcon />
              </span>
            )
          }
        />
        {errors.password && (
          <div className="invalid-feedback pt-1 d-block mt-n2 mb-2">
            {errors.password.message}
          </div>
        )}

        <ButtonComponent
          title="entrar"
          size="lg"
          iconSide="right"
          icon={<EnterRightIcon />}
        />

        <ButtonComponent
          icon={<ShieldQuestionIcon />}
          customClass="text-right forgot-password mt-4"
          link="/password-recovery"
          title="Esqueceu a senha?"
          size="sm"
          theme="text"
        />
      </form>
    </LoginTemplate>
  )
}
