export interface valuesSignUpInterface {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export interface responseInterface {
  status: number
  data: {
    token?: string
  }
}
export interface valuesSignInInterface {
  email: string
  password: string
}
export interface CustomError {
  message?: string
  status: number
  errors: Record<string, string | number>
}
