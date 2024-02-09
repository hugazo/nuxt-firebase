import { getAuth, signOut } from 'firebase/auth';

export const useLogout = () => {
  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigateTo('/');
  };

  return {
    logout,
  };
};
