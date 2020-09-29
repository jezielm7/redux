export function signInRequest({ email, password } : { email: string, password: string }) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password,
    }
  }
}