import apiInstance from "../utils/axios"

export const postSignUp = async(data) => apiInstance.post('/api/sign-up', data).then((res) => res.data)