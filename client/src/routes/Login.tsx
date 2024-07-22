import { useState, useRef, ChangeEvent, FormEventHandler } from 'react';
import { getErrorMessage } from '../assets/helpers';
import {
  AppButton,
  FormGroup,
  AppInput,
  AppLabel,
  ErrorMessage,
  Spacer,
} from '../assets/components/Utils';
import { FirebaseError } from 'firebase/app';
import RenderIf from '../assets/components/RenderIf';
import { useAuth } from '../assets/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Row } from '../assets/components/Layout';
import LoadingSpinner from '../assets/components/LoadingSpinner';

const Login = () => {
  const navigate = useNavigate();
  // @ts-expect-error We do not provide a default config in context.
  const { signIn, loading, setLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (errorMessage.length) {
      setErrorMessage('');
    }

    switch (e.target.id) {
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        setEmail(e.target.value);
    }
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    signIn(email, password)
      .then(() => {
        navigate('/');
      })
      .catch((error: FirebaseError) => {
        setLoading(false);
        const { message, target } = getErrorMessage(error.code);
        setErrorMessage(message);

        if (target.length) {
          switch (target) {
            case 'password':
              passwordRef.current?.setAttribute('aria-invalid', 'true');
              break;
            default:
              emailRef.current?.setAttribute('aria-invalid', 'true');
          }
        }
      });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-[300px] w-[100%]">
      <FormGroup>
        <AppLabel htmlFor="email">Email Address</AppLabel>
        <AppInput
          ref={emailRef}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          autoComplete="email"
          inputMode="email"
          onChange={handleInput}
          id="email"
          aria-errormessage="error-message"
        />
      </FormGroup>
      <FormGroup>
        <AppLabel htmlFor="password">Password</AppLabel>
        <AppInput
          ref={passwordRef}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChange={handleInput}
          type="password"
          id="password"
          aria-errormessage="error-message"
        />
      </FormGroup>
      <FormGroup>
        <Row $justify="flex-start" $wrap="wrap">
          <AppButton
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded min-w-[100px] h-[45px]"
            title="Login"
            type="submit"
            id="in"
            disabled={!!loading}
          >
            {loading ? <LoadingSpinner /> : 'Login'}
          </AppButton>
          <a href="/signup">Sign Up</a>
        </Row>
      </FormGroup>
      <FormGroup>
        <RenderIf isTrue={!!errorMessage.length}>
          <ErrorMessage id="error-message">{errorMessage}</ErrorMessage>
        </RenderIf>
        <RenderIf isTrue={!errorMessage.length}>
          <Spacer />
        </RenderIf>
      </FormGroup>
    </form>
  );
};

export default Login;
