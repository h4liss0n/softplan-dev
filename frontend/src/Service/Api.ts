import axios, { AxiosRequestConfig } from 'axios';
import { REACT_APP_BASE_URL } from '../Ambiente';



export let Config: AxiosRequestConfig = {
   baseURL: REACT_APP_BASE_URL   
}

const Api = axios.create(Config);




export { Api };



