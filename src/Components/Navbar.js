import React, { useState } from 'react'
import logo from '../Images/logo2.png';
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [menuvisb, setmenuvisb] = useState(true)
    const cancelClicked = () => {
        setmenuvisb(true)
    }
    const menuClicked = () => {
        setmenuvisb(false)
    }
    const donateClicked = () => {
        setmenuvisb(true)
    }

    return (
        <div className="navbar">
            <header className="body-font">
                <div className="nav1 grid grid-cols-7">
                    <NavLink className="flex title-font font-medium items-center text-gray-900 inline-block align-middle ml-10" to="/"><img className="w-40" src={logo} /></NavLink>
                    <a className="mt-3 hover:text-red-300 text-md ml-14">THE ED CRISIS</a>
                    <a className="mt-3 hover:text-red-300 text-md ml-14">OUR STORY</a>
                    <a className="mt-3 hover:text-red-300 text-md ml-7">WHAT WE DO</a>
                    <a className="mt-3 hover:text-red-300 text-md ml-8">OUR IMPACT</a>
                    <a className="mt-3 hover:text-red-300 text-md ml-8">JOIN THE MOVEMENT</a>
                    <NavLink className="mt-3 hover:text-gray-500 text-md ml-6 lg:ml-16" to="/donate">DONATE</NavLink>
                </div>
                <NavLink className="nav-logo flex title-font font-medium items-center text-gray-900 inline-block align-middle ml-10" to="/"><img className="w-40" src={logo} /></NavLink>
                <div className="nav2 flex  justify-center w-full py-4 ">
                    <div className="grid grid-cols-3 gap-8">
                        <NavLink className="a hover:text-gray-500" to="/apply">APPLY</NavLink>
                        <NavLink className="a hover:text-gray-500" to="/donate">DONATE</NavLink>
                        <div className="a hover:text-gray-500" onClick={menuClicked} >MENU</div>
                    </div>
                </div>
            </header>
            <div className="modal-bg" style={menuvisb ? { display: 'none' } : {}}>
                <div className="modal-box">
                    <div className="modal-inner">
                        <div className="modal-close px-4 py-2"><i className="fa fa-times" onClick={cancelClicked}></i></div>
                        <div className="menu-links flex flex-col mx-12">
                            <a className="mt-4 hover:text-gray-500 text-lg">THE ED CRISIS</a>
                            <a className="mt-4 hover:text-gray-500 text-lg dropdown relative dropdown-toggle">OUR STORY</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">WHAT WE DO</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">OUR IMPACT</a>
                            <a className="mt-4 hover:text-gray-500 text-lg">JOIN THE MOVEMENT</a>
                            <NavLink className="mt-4 hover:text-gray-500 text-lg" to="/donate" onClick={donateClicked}>DONATE</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}