type errorsType = {
    [key: string]: string
}
export const errors: errorsType = {
    'auth/invalid-credential' : 'Invalid username or password',
    'auth/email-already-in-use' : 'Email already exist'
}