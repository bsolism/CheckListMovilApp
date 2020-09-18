import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import authService from "../services/authService";
import routes from "../navigation/routes";

import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
const validationSchema = Yup.object().shape({
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen(props) {

  const login = async (user) => {
      const result = await authService.login(user);
      if(!result){
        return alert("Usuario o contraseña incorrecto.")
      }
      props.login(result);
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo-red.jpg")} />
      <Form
        initialValues={{ username: "", password: "" }}
        onSubmit={login}
        validationSchema={validationSchema}
      >
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
