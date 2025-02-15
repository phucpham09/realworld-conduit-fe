import axios from 'axios'
const login = async (email: string, password: string) => {
    const res = await axios.post('http://localhost:3001/auth/login', {
        email,
        password,
    })
    return res
}

export default login
