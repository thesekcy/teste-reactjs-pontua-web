import { useContext, useState } from 'react'
import ImageLogin from '../../assets/login.svg'
import Logo from '../../assets/logo_pontua_white.svg'
import { EmailIcon } from '../../assets/icons/email'
import FloatingInputComponent from '../../components/floatingInput'
import { EyeViewIcon } from '../../assets/icons/eyeView'
import { EyeNotViewIcon } from '../../assets/icons/eyeNotView'
import { EnterRightIcon } from '../../assets/icons/enterRight'
import { ShieldQuestionIcon } from '../../assets/icons/shieldQuestion'
import ButtonComponent from '../../components/button'
import { AuthContext } from '../../contexts/auth/authContext'
import loginSchema, { loginFormValues } from '../../schemas/loginSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const auth = useContext(AuthContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormValues>({ resolver: zodResolver(loginSchema) })

  function onSubmit(dataForm: loginFormValues) {
    auth.signIn(dataForm.email, dataForm.password)
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
            <h2>
              Bem-vindo<span>.</span>
            </h2>
            <p>informe as suas credenciais de acesso ao portal</p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="d-flex flex-column"
            >
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
                size="sm"
                iconSide="right"
                icon={<EnterRightIcon />}
              />

              <ButtonComponent
                icon={<ShieldQuestionIcon />}
                customClass="text-right forgot-password mt-4"
                link="/password_recovery"
                title="Esqueceu a senha?"
                size="sm"
                theme="text"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
