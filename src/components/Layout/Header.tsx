import React from 'react'
import LoginIcon from '@mui/icons-material/Login'
const Header = () => {
    return (
        <div className="flex justify-between h-20 mx-10">
            <h1 className="place-self-center text-3xl font-bold text-blue-600">
                VBLOG
            </h1>
            <ul className="flex gap-x-4 place-self-center text-xl">
                <li className="border-2 px-2 py-1 rounded-md">
                    <LoginIcon />
                    Login
                </li>
                <li className="border-2 px-2 py-1 rounded-md">Sign up</li>
            </ul>
        </div>
    )
}

export default Header
