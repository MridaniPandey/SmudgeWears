import React from 'react'
import Title from './Title'
import { ourSpecsData } from '@/assets/assets'

const OurSpecs = () => {
    return (
        <div className='px-6 my-32 max-w-7xl mx-auto'>
            <Title
                visibleButton={false}
                title='Why Choose Us'
                description="Thoughtfully designed to bring you comfort, quality, and effortless style — every single day."
            />

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20'>
                {
                    ourSpecsData.map((spec, index) => {
                        return (
                            <div
                                key={index}
                                className='relative h-52 px-10 flex flex-col items-center justify-center text-center rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-md'
                                style={{
                                    backgroundColor: '#F5F1EC', // soft beige
                                    borderColor: '#E5DFD8'
                                }}
                            >
                                {/* Icon */}
                                <div className='absolute -top-6 size-12 flex items-center justify-center rounded-xl bg-black text-white shadow-sm'>
                                    <spec.icon size={22} />
                                </div>

                                <h3 className='text-lg font-semibold text-[#2D2A26] mt-3'>
                                    {spec.title}
                                </h3>

                                <p className='text-sm text-[#6B665F] mt-3 leading-relaxed'>
                                    {spec.description}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default OurSpecs