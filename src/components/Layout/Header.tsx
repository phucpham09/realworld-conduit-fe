'use client'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import Link from 'next/link'
const Header = () => {
    return (
        <div className="flex justify-between h-20 px-24 bg-yellow-400">
            <h1 className="place-self-center text-3xl font-bold text-blue-700 cursor-pointer">
                <Link href={'/'}>VBLOG</Link>
            </h1>
            <ul className="flex gap-x-4 place-self-center text-xl">
                <li className="border-2 border-blue-400 px-2 py-1 rounded-md cursor-pointer bg-blue-200">
                    <Link href="/signin">
                        <LoginIcon />
                        Sign in
                    </Link>
                </li>
                <li className="border-2 border-blue-400 px-2 py-1 rounded-md cursor-pointer bg-blue-200">
                    <Link href={'/signup'}>
                        <HowToRegIcon />
                        Sign up
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
