import { createContext } from "react";
import { api } from "../services/api";

interface SignInCredentials {
  email: string
  password: string
}

interface AuthContextData {
  signIn(credentials: SignInCredentials): Promise<void>
  isAuthenticated: boolean
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const isAuthenticated = false

  async function signIn({ email, password }: SignInCredentials) {
    try {
      const response = await api.post('sessions', {
        email,
        password
      })

      console.log(response)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AuthContext.Provider value={{ signIn, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
