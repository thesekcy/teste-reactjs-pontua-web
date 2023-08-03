import React, { ReactNode } from 'react'
import ImageLogin from '../../assets/login.svg'
import Logo from '../../assets/logo_pontua_white.svg'

interface LoginTemplateProps {
  children: ReactNode;
}

const LoginTemplate: React.FC<LoginTemplateProps> = ({ children }) => {
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
          <div className="card">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default LoginTemplate
