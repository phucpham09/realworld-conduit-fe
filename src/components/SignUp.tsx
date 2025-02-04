import React from 'react'

const SignUp = () => {
    return (
        <div className="h-[calc(100vh-10rem)] flex justify-center items-center">
            <div className="w-1/3 flex flex-col items-center justify-center px-10 pt-4 border-2 border-blue-700 bg-gray-100 rounded-lg gap-y-10">
                <h1 className="text-3xl font-semibold">Sign Up</h1>
                <form className="w-full">
                    <fieldset className="flex flex-col">
                        <label className="text-2xl">Username</label>
                        <input
                            type="email"
                            className="border-2 mb-6 px-3 py-2 text-2xl rounded-md mt-2"
                            placeholder="Enter your username..."
                        />
                        <label className="text-2xl">Email</label>
                        <input
                            type="email"
                            className="border-2 mb-6 px-3 py-2 text-2xl rounded-md mt-2"
                            placeholder="Enter your email..."
                        />
                        <label className="text-2xl">Password</label>
                        <input
                            type="password"
                            className="border-2 mb-6 px-3 py-2 text-2xl rounded-md mt-2"
                            placeholder="Enter your password..."
                        />
                        <button className="border py-2 text-xl font-semibold mb-4 place-self-end px-4 text-white bg-blue-700 border-blue-700 rounded-lg">
                            Submit
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default SignUp
