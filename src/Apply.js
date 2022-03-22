import React from 'react'
import logo from './Images/logo1.png';

export const Apply = () => {
    return (
        <div className="apply">
            <div className="h-full py-8 px-4 flex justify-center items-center w-full">
                <form>
                    <div className="bg-gray-500 px-10 py-8 pb-20 rounded-xl w-screen shadow-md max-w-sm">
                        <img className="h-14 mb-4 mx-auto" src={logo} alt="" />
                        <div className="space-y-4">
                            <h1 className="text-center text-2xl text-gray-100">APPLY</h1>
                            <div>
                                <label htmlFor="username" className="block mb-1 text-gray-200 font-semibold">Username</label>
                                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-1 text-gray-200 font-semibold">Email</label>
                                <input type="text" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1 text-gray-200 font-semibold">Password</label>
                                <input type="password" className="bg-indigo-50 px-4 py-2 outline-none rounded-md w-full" />
                            </div>
                        </div>
                        <button className="mt-10 w-full bg-emerald-400 hover:bg-emerald-600 font-semibold py-2 rounded-md  tracking-wide">APPLY</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

