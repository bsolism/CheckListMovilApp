import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import navigationTheme from "./app/navigation/navigationTheme.js";
import AppNavigator from "./app/navigation/AppNavigator";
import LoginScreen from "./app/screens/LoginScreen";
import authService from "./app/services/authService";
import useApi from "./app/hooks/useApi";

export default function App() {

  const [isLogged, setIsLogged] = useState(null);

  const load = async () => {
    const res = await authService.isLogged()
    setIsLogged(res); 
  }

  login = (data) => {
    setIsLogged(data);
  }

  useEffect(() =>{
    load();
  },[]);

  if(isLogged){
    return (
    <NavigationContainer theme={navigationTheme}>
       <AppNavigator />
    </NavigationContainer>
    )
  }
  return (
    <LoginScreen login = {login}/>
  );
}
