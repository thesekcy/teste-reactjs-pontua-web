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

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const auth = useContext(AuthContext)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }, //TODO - arrumar
  } = useForm<loginFormValues>({ resolver: zodResolver(loginSchema) })

  async function onSubmit(dataForm: loginFormValues) {
    const access = await auth.signIn(dataForm.email, dataForm.password)

    if (access) {
      console.log('caiu no access')
      navigate('/profile')
    }
  }

  return (
    <LoginTemplate>
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
