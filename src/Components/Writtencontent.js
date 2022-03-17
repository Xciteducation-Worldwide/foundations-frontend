import React from 'react'

export const Writtencontent = () => {
    return (
        <div className="writtencontent">
            <div className="mission bg-neutral-900">
                <div className="container mx-auto items-center px-10 py-20 text-center">
                    <h1 className="text-center pb-3">OUR MISSION</h1>
                    <p className="text-gray-100 text-md">At XcitEducation, we believe leadership for education is the solution. We are building a movement of leaders who will eliminate educational inequity in India.</p>
                </div>
            </div>
            <svg className="svg-black mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 51" data-reactid="253"><polygon points="158 51 0 0 316 0 158 51" fill="#171717" data-reactid="254"></polygon></svg>
            <div className="crisis">
                <div className="container mx-auto items-center px-10 pb-20 text-center" >
                    <h1 className="text-center pb-3">THE EDUCATION CRISIS</h1>
                    <p className="text-gray-100 text-md ">The education crisis runs wide and deep. 116 million of the poorest children live in India. 55% of ten-year-olds in India cannot read basic text. 75% will not go on to college. Most of those who do are not fully equipped for life. The pandemic has exacerbated this education crisis. We need to act now.</p>
                    <div className="flex flex-wrap md:text-center text-center order-first mt-8">
                        <div className="lg:w-1/1 md:w-1/1 w-full">
                            <button className="lm-btn py-3 px-4 md:py-4 lg:py-3">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fellow">
                <svg className="svg-blue-img mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 51" data-reactid="262"><polygon points="158 51 0 0 316 0 158 51" fill="#9d0000" data-reactid="263"></polygon></svg>
                <div className="container mx-auto items-center px-10 pb-16 text-center sm:flex-col flex-col" >
                    <h1 className="text-center pb-3">THE FELLOWSHIP</h1>
                    <p className="text-gray-100 text-md">The XcitEducation Fellowship is an opportunity for India’s brightest and most promising youth, from the nation’s best universities and workplaces, to serve as full-time teachers to children from low-income communities in under-resourced schools. Through two years of teaching and working with key education stakeholders, our Fellows are exposed to the grassroots realities of India’s education system and cultivate the knowledge, skills, and mindsets needed to attain positions of leadership in and beyond education, working collectively to build a vibrant movement for educational equity across India.</p>
                    <div className="flex flex-wrap md:text-center text-center order-first mt-8">
                        <div className="lg:w-1/1 md:w-1/1 w-full">
                            <button className="py-3 px-4 md:py-4 lg:py-3">LEARN ABOUT FELLOWSHIP</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="alumni">
                <div className="container mx-auto items-center px-10 py-20 text-center">
                    <h1 className="text-center pb-3">THE ALUMNI MOVEMENT</h1>
                    <p className="text-gray-100 text-md">Today, the XcitEducation Alumni community is 3400+ members strong, impacting 1 million children directly and reaching 33 million children indirectly.</p>
                </div>
            </div>
            <svg className="svg-white mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 316 51" data-reactid="262"><polygon points="158 51 0 0 316 0 158 51" fill="#9d0000" data-reactid="263"></polygon></svg>
            <div className="join">
                <div className="container mx-auto items-center px-10 pb-20 text-center">
                    <h1 className="text-center pb-3">JOIN THE MOVEMENT</h1>
                    <p className="text-gray-100 text-md">The pandemic has hit children in poor families the most. Now more than ever we need to solve the education crisis. This will lead to a safer, happier, more prosperous India for all of us. Getting there will take a movement of all of us, for all our children. Join the movement.</p>
                    <div className="btns mt-8">
                        <div className="container mx-auto sm:flex-col flex-col text-center">
                            <div className="flex flex-wrap md:text-center text-center order-first">
                                <div className="lg:w-1/3 md:w-1/1 w-full">
                                    <button className="py-3 px-4 md:py-4 lg:py-3 sm:p-10 mt-4">DONATE</button>
                                </div>
                                <div className="lg:w-1/3 md:w-1/1 w-full">
                                    <button className="py-3 px-4 md:py-4 lg:py-3 sm:p-10 mt-4">JOIN FELLOWSHIP</button>
                                </div>
                                <div className="lg:w-1/3 md:w-1/1  w-full">
                                    <button className="py-3 px-4 md:py-4 lg:py-3 sm:p-10 mt-4">JOIN STAFF</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
