import React, { useState } from "react";
import { StyleSheet, Image } from "react-native";
import * as Yup from "yup";

import authService from "../services/authService";
import Screen from "../components/Screen";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";
import authApi from "../services/auth";
import useAuth from "../auth/useAuth";

const validationSchema = Yup.object().shape({
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen(props) {
  const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const handleSubmit = async (user) => {
    const result = await authApi.login(user);
    if (!result.ok) return setLoginFailed(true);
    setLoginFailed(false);

    auth.logIn(result.data);
  };
  /*const auth = useAuth();
  const [loginFailed, setLoginFailed] = useState(false);

  const login = async (user) => {
    const result = await authService.login(user);
    if (!result) {
      return alert("Usuario o contraseña incorrecto.");
    }
    props.login(result);
  };

  const goRegister = () => {
    props.goRegister(true);
  };*/

  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/ChecklistLogo.png")}
      />
      <Form
        initialValues={{ username: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email and/or password."
          visible={loginFailed}
        />
        <FormField
          autoCapitalie="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="username"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalie="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});
