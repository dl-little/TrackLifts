import {
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {
  useState,
  useEffect,
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
} from 'react';
import { FIREBASE_AUTH } from '../../../FirebaseConfig';
// @ts-expect-error Do not need default.
const AuthContext = createContext();
type AuthFunc = (email: string, password: string) => void;

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const signIn: AuthFunc = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(FIREBASE_AUTH, email, password);
  };

  const signUp: AuthFunc = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(FIREBASE_AUTH, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(FIREBASE_AUTH);
  };

  const value = useMemo(
    () => ({
      user,
      signIn,
      signUp,
      logOut,
      loading,
      setLoading,
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }),
    [user, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};
