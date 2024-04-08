export const ALREADY_USED = 'auth/email-already-in-use';
export const INVALID_EMAIL = 'auth/invalid-email';

type AuthErrorCode = typeof ALREADY_USED | typeof INVALID_EMAIL;

export interface AuthError {
  code: AuthErrorCode;
}

export interface IFormData {
  phoneNumber: string;
  firstName: string;
  lastName: string;
  agreedToTerms: boolean;
}
