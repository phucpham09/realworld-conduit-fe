'use client'
import signup from '@/apis/auth/signup'
import { useRouter } from 'next/navigation'
import React from 'react'

const SignUp = () => {
    const router = useRouter()
    const [username, setUsername] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const res = await signup(username, email, password)
        router.push('/signin')
    }
    return (
        <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
            <div className="sm:w-1/3 w-3/4 flex flex-col items-center justify-center sm:px-10 px-6 pt-4 border-2 border-blue-700 bg-gray-100 rounded-lg gap-y-10">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <form className="w-11/12 flex flex-col" onSubmit={handleSubmit}>
                    <label className="text-2xl">Username</label>
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        className="border-2 mb-6 px-3 py-2 sm:text-2xl text-xl rounded-md mt-2"
                        placeholder="Enter your username..."
                    />
                    <label className="text-2xl">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="border-2 mb-6 px-3 py-2 sm:text-2xl text-xl rounded-md mt-2"
                        placeholder="Enter your email..."
                    />
                    <label className="text-2xl">Password</label>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="border-2 mb-6 px-3 py-2 sm:text-2xl text-xl rounded-md mt-2"
                        placeholder="Enter your password..."
                    />
                    <button
                        type="submit"
                        className="border py-2 text-xl font-semibold mb-4 place-self-end px-4 text-white bg-blue-700 border-blue-700 rounded-lg"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
