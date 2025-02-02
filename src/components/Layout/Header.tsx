'use client'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login'
import HowToRegIcon from '@mui/icons-material/HowToReg'
const Header = () => {
    return (
        <div className="flex justify-between h-20 px-24 bg-yellow-400">
            <h1 className="place-self-center text-3xl font-bold text-blue-600 cursor-pointer">
                VBLOG
            </h1>
            <ul className="flex gap-x-4 place-self-center text-xl">
                <li className="border-2 border-blue-400 px-2 py-1 rounded-md cursor-pointer bg-blue-200">
                    <LoginIcon />
                    Login
                </li>
                <li className="border-2 border-blue-400 px-2 py-1 rounded-md cursor-pointer bg-blue-200">
                    <HowToRegIcon />
                    Sign up
                </li>
            </ul>
        </div>
    )
}

export default Header
