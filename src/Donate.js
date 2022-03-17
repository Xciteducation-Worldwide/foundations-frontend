import React from 'react'
import logo from './Images/logo3.png'
import { Link, NavLink } from 'react-router-dom'

export const Donate = () => {

    const scrollPos = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className='donate'>
            <div className="mission z-0">
                <div className="img carousel-inner relative w-full  overflow-hidden">
                    <div className="carousel-item active relative float-left w-full">
                        <img src="https://images.unsplash.com/photo-1582307811683-75b18a39ab71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="block w-full" alt="..." />
                        <div className="carousel-caption hidden md:block absolute text-center">
                            <p className='onimg-text mb-16 text-2xl rounded'>Help less-privileged children get access to quality education.</p>
                        </div>
                    </div>
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container  mx-auto rounded-lg my-10">
                        <div className="flex flex-col text-center w-full">
                            <h2 className="heading text-3xl tracking-widest font-bold title-font mb-1  text-2xl">DONATE</h2>
                        </div>
                        <div className="flex flex-wrap -m-4 p-4 ">
                            <div className="p-4 md:w-1/3 ">
                                <div className="flex rounded-lg h-full  bg-gray-100 p-8 flex-col ">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                            <i className="fas fa-coins"></i>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Monetary Help</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">If you can provide any help that can make a difference in the life of a child and their community, donate now. </p>
                                        <Link to="/donate/monetarydonation" className="mt-3 text-gray-100 inline-flex items-center bg-emerald-500 rounded-lg px-3 py-2 cursor-pointer hover:bg-emerald-700">Donate
                                            <i className="fad fa-arrow-right ml-2 mt-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                            <i className="fad fa-book"></i>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">Be a Teacher/Volunteer</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">If you can contribute as a teacher that can make a difference in the life of a child and their community, join now. </p>
                                        <Link to="/donate/volunteer" className="mt-3 text-gray-100 inline-flex items-center bg-emerald-500 rounded-lg px-3 py-2 cursor-pointer hover:bg-emerald-700">Join
                                            <i className="fad fa-arrow-right ml-2 mt-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 md:w-1/3">
                                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-sky-500 text-white flex-shrink-0">
                                            <i className="fas fa-phone-laptop"></i>
                                        </div>
                                        <h2 className="text-gray-900 text-lg title-font font-medium">IT Devices</h2>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="leading-relaxed text-base">If you have a digital device that can make a difference in the life of a child and their community, donate now.</p>
                                        <NavLink to="/donate/itdevices" className="mt-3 text-gray-100 inline-flex items-center bg-emerald-500 rounded-lg px-3 py-2 cursor-pointer hover:bg-emerald-700" onClick={scrollPos}>Donate
                                            <i className="fad fa-arrow-right ml-2 mt-1"></i>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font pb-20">
                    <div className="container px-5 py-16 mx-auto ">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 text-red-500 font-bold">THE CRISIS</h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Just when the children were supposed to get back to schools and restart learning, the fear of the new variant - Omicron, has put a halt to it once again.For the first time in history, an entire generation had their education disrupted due to the pandemic, which has impacted the marginalized children, the hardest. They are at risk of being pushed into poverty or forced to work as their families struggle to survive.</p>
                        </div>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-indigo-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Less access to higher education</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-green-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Lower future incomes</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-red-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Increasing unemployment</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-yellow-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Poverty</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-orange-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Poor economy</span>
                                </div>
                            </div>
                            <div className="p-2 sm:w-1/2 w-full">
                                <div className="bg-gray-100 rounded flex p-4 h-full items-center bg-sky-100">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                        <path d="M22 4L12 14.01l-3-3"></path>
                                    </svg>
                                    <span className="title-font font-medium">Exploitation in social life</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
