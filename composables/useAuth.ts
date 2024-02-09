import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
} from 'firebase/auth';

export const facebookAuthProvider = new FacebookAuthProvider();
export const googleAuthProvider = new GoogleAuthProvider();

export const useAuth = () => {
  const user = useCurrentUser();

  const signInWithGoogle = () => {
    const auth = getAuth();
    signInWithRedirect(auth, googleAuthProvider);
  };

  const signInWithFacebook = () => {
    const auth = getAuth();
    signInWithRedirect(auth, facebookAuthProvider);
  };

  const logout = () => {
    const auth = getAuth();
    signOut(auth);
    navigateTo('/');
  };

  return {
    user,
    logout,
    signInWithGoogle,
    signInWithFacebook,
  };
};
