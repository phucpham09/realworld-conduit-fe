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
                            {user ? (
                                <div className="flex justify-between pl-2 ">
                                    <h2 className="text-xl flex justify-center items-center">
                                        Hi, {user?.username}
                                    </h2>
                                    <CloseIcon
                                        fontSize="large"
                                        className="mt-2"
                                    />
                                </div>
                            ) : (
                                <div className="flex justify-end pl-2 ">
                                    <CloseIcon
                                        fontSize="large"
                                        className="mt-2"
                                    />
                                </div>
                            )}

                            {user ? (
                                <ul className="flex flex-col gap-y-2 bg-gray-200  text-2xl font-semibold">
                                    <li
                                        className="border-b-2 px-2 border-black"
                                        onClick={() =>
                                            router.push('/createArticle')
                                        }
                                    >
                                        New Article
                                    </li>
                                    <li
                                        className="border-b-2 px-2 border-black"
                                        onClick={logout}
                                    >
                                        Log out
                                    </li>
                                </ul>
                            ) : (
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
                            )}
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
                <div className="sm:flex max-sm:hidden">
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
                                src={user?.imageUrl}
                                width={40}
                                height={40}
                            />
                            <p className="place-self-center text-2xl">
                                Hi, {user?.username}
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
