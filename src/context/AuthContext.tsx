'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import API from '@/lib/axiosInstance'
import { useRouter } from 'next/navigation'

interface User {
    email: string
    userid: string
}

interface AuthContextProps {
    user: User | null
    loading: boolean
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('access_token')
        if (token) {
            fetchUser()
        } else {
            setLoading(false)
        }
    }, [])

    const fetchUser = async () => {
        try {
            const res = await API.get('/auth/profile')
            setUser(res.data)
        } catch (error) {
            console.error('Error fetching user', error)
            logout()
        } finally {
            setLoading(false)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const res = await API.post('/auth/login', { email, password })
            const { access_token } = res.data

            localStorage.setItem('access_token', access_token)
            await fetchUser()
            router.push('/') // Redirect after login
        } catch (error) {
            console.error('Login failed', error)
            throw new Error('Invalid credentials')
        }
    }

    const logout = () => {
        localStorage.removeItem('access_token')
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextProps => {
    const context = useContext(AuthContext)
    if (!context) throw new Error('useAuth must be used within an AuthProvider')
    return context
}
