import {
  // Auth Instance
  getAuth,
  signOut,
  // Email Link
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  // Third Party
  GoogleAuthProvider,
  FacebookAuthProvider,
  // signInWithRedirect,
} from 'firebase/auth';

export const facebookAuthProvider = new FacebookAuthProvider();
export const googleAuthProvider = new GoogleAuthProvider();

export const useAuth = () => {
  const user = useCurrentUser();

  // TODO: update the siginInWithRedirect method that should be deprecated
  const signInWithGoogle = () => {
    // const auth = getAuth();
    // signInWithRedirect(auth, googleAuthProvider);
    // eslint-disable-next-line no-console
    console.log('Method deprecated');
  };

  const signInWithFacebook = () => {
    // const auth = getAuth();
    // signInWithRedirect(auth, facebookAuthProvider);
    // eslint-disable-next-line no-console
    console.log('Method deprecated');
  };

  const sendEmailLink = async (email: string) => {
    const auth = getAuth();
    const settings = {
      url: window.location.href,
      handleCodeInApp: true,
    };
    await sendSignInLinkToEmail(auth, email, settings);
    window.localStorage.setItem('emailForSignIn', email);
  };

  const processMagicLinks = async () => {
    const authInstance = getAuth();
    const location = window.location.href;
    const isMagicLink = isSignInWithEmailLink(authInstance, location);
    if (isMagicLink) {
      const email = window.localStorage.getItem('emailForSignIn');
      if (email) {
        await signInWithEmailLink(authInstance, email, location);
      } else {
        window.localStorage.setItem('promptForEmail', 'true');
      }
      window.localStorage.removeItem('emailForSignIn');
    }
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
    sendEmailLink,
    processMagicLinks,
  };
};
