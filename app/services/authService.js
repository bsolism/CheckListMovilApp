import ApiClient from "./client";
import { AsyncStorage } from 'react-native';
import jwt_decode from "jwt-decode";

const endpoint = "/auth";

const login = async (user) => {
    const resp = await ApiClient.post(`${endpoint}/login`, user);
    if(resp.ok){
        await AsyncStorage.setItem('token',resp.data.token);
        return await isLogged();
    } 
    console.log(resp);
    return false; 
}

const logout = async () => {
    await AsyncStorage.removeItem('token');
}

const isLogged = async () => {
    const token = await AsyncStorage.getItem('token');
    return token ? true : false;
}

const getUserId = async () => {
    const token = await AsyncStorage.getItem('token');
    var decoded = jwt_decode(token);
    return decoded.nameid;
}

export default{
    login,
    getUserId,
    logout,
    isLogged
}


