import React from 'react'

export const Footer = () => {
    return (
        <div className="footer">
            <footer className="text-gray-600 body-font bg-gray-100">
                <div className="container pt-12 mx-auto">
                    <div className="flex flex-wrap md:text-center text-center order-first">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium ttext-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer">CAREERS</h2>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium ttext-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer">FAQS</h2>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium ttext-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer">FINANCIALS</h2>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium text-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer">PRIVACY POLICY</h2>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium text-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer">CHILD PROTECTION POLICY</h2>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-0">
                            <h2 className="title-font font-medium text-gray-600  hover:text-blue-500 tracking-widest text-sm mb-3 cursor-pointer ">CONTACT US</h2>
                        </div>

                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto flex items-center sm:flex-col flex-col">
                        <p className="text-sm text-gray-400 sm:mx-auto sm:mt-0 ">©XcitEducation</p>
                        <div className="socials inline-flex sm:ml-auto sm:mt-0 mt-4 sm:mx-auto justify-center sm:justify-start pt-4 pb-10">
                            <a target="_blank" href="https://www.facebook.com" className="text-gray-500 cursor-pointer hover:text-blue-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.twitter.com" className="ml-3 text-gray-500 cursor-pointer hover:text-sky-500">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.instagram.com" className="ml-3 text-gray-500 cursor-pointer hover:text-pink-700">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a target="_blank" href="https://www.linkedin.com" className="ml-3 text-gray-500 cursor-pointer hover:text-blue-700">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
