import Axios from "axios"
export const axios = Axios.create({
    baseURL: "",
    headers: { 'Content-Type': 'application/json' }
})
