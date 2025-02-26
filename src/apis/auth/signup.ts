import API from '@/lib/axiosInstance'
const signup = async (
    username: string,
    email: string,
    password: string,
    role: string
) => {
    const res = await API.post('/auth/signup', {
        username,
        email,
        password,
        role,
    })
    return res
}

export default signup
