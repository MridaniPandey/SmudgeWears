import React from 'react'
import Title from './Title'

const Newsletter = () => {
    return (
        <div className='flex flex-col items-center mx-4 my-40 text-center'>
            <Title
                title="Stay in the Loop"
                description="Be the first to discover new arrivals, exclusive drops, and curated picks made just for you."
                visibleButton={false}
            />

            {/* Input Box */}
            <div
                className='flex items-center w-full max-w-2xl mt-12 p-2 rounded-full border shadow-sm'
                style={{
                    backgroundColor: '#F5F1EC',
                    borderColor: '#E5DFD8'
                }}
            >
                <input
                    className='flex-1 pl-6 bg-transparent outline-none text-[#2D2A26] placeholder:text-[#9C978F]'
                    type="email"
                    placeholder='Enter your email address'
                />

                <button className='bg-black text-white px-8 py-3 rounded-full hover:scale-105 active:scale-95 transition'>
                    Subscribe
                </button>
            </div>

            <p className='text-xs text-[#9C978F] mt-4'>
                No spam. Just good stuff.
            </p>
        </div>
    )
}

export default Newsletter