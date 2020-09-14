import { create } from "apisauce"

const ApiClient = create({
    baseURL: 'http://192.168.0.2:5000/api/'
});

export default ApiClient;