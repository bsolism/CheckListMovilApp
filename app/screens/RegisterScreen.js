import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import authService from "../services/authService";
import AppButton from "../components/Button";
import Screen from "../components/Screen";
import { Form, FormField, SubmitButton } from "../components/forms";
import routes from "../navigation/routes";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  username: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
export default function RegisterScreen({ navigation }) {
  const register = async (user) => {
    const registerResponse = await authService.register(user);
    if (registerResponse === true) {
      navigation.navigate(routes.LOGIN);
    } else {
      return alert(registerResponse.data);
    }
  };

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", username: "", password: "" }}
        onSubmit={register}
        validationSchema={validationSchema}
      >
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="username"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
