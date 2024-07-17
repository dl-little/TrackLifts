import { useState, useRef, useEffect, ChangeEvent, MouseEventHandler, useCallback } from "react";
import { Column, Row } from "../assets/components/Layout";
import { AppButton, FormGroup, AppInput, AppLabel, ErrorMessage, Spacer } from "../assets/components/Utils";
import { FirebaseError } from "firebase/app";
import RenderIf from "../assets/components/RenderIf";
import { useAuth } from "../assets/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  // @ts-expect-error We do not provide a default config in context.
  const { signIn, signUp, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    if ( errorMessage.length ) {
      setErrorMessage('');
    }

    switch (e.target.id) {
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        setEmail(e.target.value);
    }
  }

  const getErrorMessage = useCallback((code: string) => {
    switch(code) {
      case 'auth/invalid-email':
        return 'Invalid email.';
      case 'auth/missing-password':
        return 'Missing password.';
      case 'auth/invalid-credential':
        return 'No profile found with those credentials.';
      default:
        return 'Something went wrong. Please try again.';
    }
  }, []);

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    const { id } = e.target as HTMLButtonElement;
    switch (id) {
      case "in":
        signIn(email, password)
          .then(() => {
            navigate("/");
          })
          .catch((error: FirebaseError) => {
            setErrorMessage(
              getErrorMessage(error.code)
            )
          });
        break;
      default:
        signUp(email, password)
          .then(() => {
            navigate("/");
          })
          .catch((error: FirebaseError) => {
            setErrorMessage(
              getErrorMessage(error.code)
            )
          });
    }
  }

  return (
    <Column $disabled={!!loading}>
      <FormGroup>
        <AppLabel htmlFor="email">Email Address</AppLabel>
        <AppInput
          ref={inputRef}
          value={email}
          placeholder='Email'
          autoCapitalize='none'
          autoComplete='email'
          inputMode='email'
          onChange={handleInput}
          id="email"
        />
      </FormGroup>
      <FormGroup>
        <AppLabel htmlFor="password">Password</AppLabel>
        <AppInput
          value={password}
          placeholder='Password'
          autoCapitalize='none'
          onChange={handleInput}
          type='password'
          id="password"
        />
      </FormGroup>
      <Row>
        <AppButton title='Login' onClick={handleSubmit} id="in" disabled={!!loading}>
          Login
        </AppButton>
        <AppButton title='Sign Up' onClick={handleSubmit} id="up" disabled={!!loading}>
          Sign Up
        </AppButton>
      </Row>
      <RenderIf isTrue={!!errorMessage.length}>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </RenderIf>
      <RenderIf isTrue={!errorMessage.length}>
        <Spacer />
      </RenderIf>
		</Column>
  )
}

export default Login;