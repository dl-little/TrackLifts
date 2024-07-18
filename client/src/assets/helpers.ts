export const getErrorMessage = (code: string) => {
  let message = '';
  let target = '';
  switch (code) {
    case 'auth/invalid-email':
      message = 'Invalid email.';
      target = 'email';
      break;
    case 'auth/email-already-in-use':
      message = 'Email already in use.';
      target = 'email';
      break;
    case 'auth/missing-password':
      message = 'Missing password.';
      target = 'password';
      break;
    case 'auth/weak-password':
      message = 'Weak password.';
      target = 'password';
      break;
    case 'auth/invalid-credential':
      message = 'No profile found with those credentials.';
      break;
    default:
      message = 'Something went wrong. Please try again.';
  }

  return {
    message,
    target,
  };
};
