'use client'
import { useEffect } from 'react'
import { useAuth } from '@/context/AuthContext'
import { redirect, useRouter } from 'next/navigation'

export default function AdminPage() {
    const { user, loading } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/')
        }
        if (user?.role !== 'admin' && !loading) redirect('/')
    }, [user, loading, router])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <main>
            <h1>Admin Dashboard</h1>
            <p>Welcome, {user?.username}!</p>
        </main>
    )
}
