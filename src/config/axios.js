import axios from 'axios'

export const axio = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.REACT_APP_BASE_URL
})