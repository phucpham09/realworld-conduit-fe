import API from '@/lib/axiosInstance'
const signup = async (username: string, email: string, password: string) => {
    const res = await API.post('/auth/signup', {
        username,
        email,
        password,
    })
    return res
}

export default signup
