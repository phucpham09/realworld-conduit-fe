'use client'
// import login from '@/apis/auth/login'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify'
import { useAuth } from '@/context/AuthContext'
const SignIn = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [noti, setNoti] = useState('')
    const { login } = useAuth()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await login(email, password)
        } catch (err) {
            setNoti('Invalid credentials')
        }
    }

    return (
        <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
            <div className="h-3/4 sm:w-1/3 w-3/4 flex flex-col items-center justify-center sm:px-10 px-6 border-2 border-blue-700 bg-gray-100 rounded-lg gap-y-10">
                <h1 className="text-3xl font-semibold">Sign In</h1>
                <form className="w-full" onSubmit={handleSubmit}>
                    <fieldset className="flex flex-col">
                        <label className="text-2xl">Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            className="border-2 mb-6 px-3 py-2 text-2xl rounded-md mt-2"
                            placeholder="Enter your email..."
                        />
                        <label className="text-2xl">Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            className="border-2 mb-3 px-3 py-2 text-2xl rounded-md mt-2"
                            placeholder="Enter your password..."
                        />
                        <p className="text-red-600 italic ">{noti}</p>
                        <button
                            type="submit"
                            className="border py-2 text-xl font-semibold mb-4 place-self-end px-4 text-white bg-blue-700 border-blue-700 rounded-lg"
                        >
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
            <ToastContainer autoClose={1500} />
        </div>
    )
}

export default SignIn
