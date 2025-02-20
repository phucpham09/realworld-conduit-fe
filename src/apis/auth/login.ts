import API from '@/lib/axiosInstance'
const login = async (email: string, password: string) => {
    const res = await API.post('/auth/login', {
        email,
        password,
    })
    return res
}

export default login
