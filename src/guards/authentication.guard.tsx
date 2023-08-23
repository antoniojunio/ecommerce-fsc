import { FunctionComponent, useEffect } from 'react'
import { useSelector } from 'react-redux'

// Utilities
import { useNavigate } from 'react-router-dom'

// Components
import Header from '../components/header/header.component'
import Loading from '../components/loading/loading.component'

interface AuthenticationGuardProps {
  children: React.ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationGuardProps> = ({
  children
}) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <Loading message="Você precisa estar logado para acessar está pagina. Você será redirecionado para página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
