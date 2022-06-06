import axios, { AxiosRequestConfig } from 'axios';
import { User } from './types';

const CONFIG: AxiosRequestConfig = { withCredentials: true };
const API_URL = 'http://localhost:3001/api';

export const getAuthStatus = () =>
  axios.get<User>(`${API_URL}/auth/status`, CONFIG);
