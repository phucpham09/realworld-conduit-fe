'use client'
import React, { useEffect, useState } from 'react'
import LoginIcon from '@mui/icons-material/Login'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import Link from 'next/link'
import LogoutIcon from '@mui/icons-material/Logout'
import { useAuth } from '@/context/AuthContext'
import { usePathname, useRouter } from 'next/navigation'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'
const Header = () => {
    const { user, logout } = useAuth()
    const pathname = usePathname()
    const router = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className="flex px-2 h-16 justify-between items-center sm:h-20 sm:px-24 bg-yellow-400">
            <div
                className={`sm:hidden
                    ${
                        isMenuOpen
                            ? `w-1/2 h-full fixed z-50 bg-white left-0 top-0`
                            : ``
                    }`}
            >
                <div className="" onClick={handleMenuClick}>
                    {isMenuOpen ? (
                        <div className="flex flex-col">
                            <div className="flex justify-end">
                                <CloseIcon fontSize="large" className="mt-2" />
                            </div>
                            <ul className="flex flex-col gap-y-2 bg-gray-200  text-2xl font-semibold">
                                <li
                                    className="border-b-2 px-2 border-black"
                                    onClick={() => router.push('/signin')}
                                >
                                    Sign In
                                </li>
                                <li
                                    className="border-b-2 px-2 border-black"
                                    onClick={() => router.push('/signup')}
                                >
                                    Sign Up
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div className="flex justify-end">
                            <MenuIcon fontSize="large" />
                        </div>
                    )}
                </div>
            </div>

            <h1 className="place-self-center text-3xl font-bold text-blue-700 cursor-pointer">
                <Link href={'/'}>VBLOG</Link>
            </h1>
            {pathname !== 'signin' && (
                <div className="sm:hidden">
                    <SearchIcon fontSize="large" />
                </div>
            )}
            {pathname !== '/signin' && (
                <input
                    type="search"
                    placeholder="Search..."
                    className="sm:px-3 sm:py-2 sm:rounded-full sm:w-1/3 sm:outline-none sm:focus:ring-2 sm:focus:ring-blue-700 max-sm:hidden"
                />
            )}

            {user ? (
                <div className="flex">
                    <Link
                        href={'/createArticle'}
                        className="flex mr-10 text-xl cursor-pointer bg-blue-700 justify-center items-center px-3 py-1 rounded-full text-white"
                    >
                        <AddCircleOutlineIcon fontSize="medium" />
                        <p>New Article</p>
                    </Link>
                    <ul className="flex gap-x-4 place-self-center text-xl">
                        <li className="flex gap-x-1">
                            <Image
                                className="cursor-pointer rounded-full"
                                alt="avatar"
                                src={
                                    'data:image/png;base64,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'
                                }
                                width={40}
                                height={40}
                            />
                            <p className="place-self-center text-2xl">
                                Hi, PhucPham
                            </p>
                        </li>
                        <li
                            className="border-2 border-blue-400 px-2 py-1 rounded-md cursor-pointer bg-blue-200"
                            onClick={logout}
                        >
                            <LogoutIcon />
                            Log out
                        </li>
                    </ul>
                </div>
            ) : (
                <ul className="sm:flex sm:gap-x-4 sm:place-self-center sm:text-xl hidden">
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
            )}
        </div>
    )
}

export default Header
