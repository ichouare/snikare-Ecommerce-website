import React from 'react'
import { AccordionFooter } from './accordin'
import AboutUs from './aboutUs'
import Media from './media'

const Footer = () => {
    return (
        <footer className='w-full  max-h-[778px] md:max-h-[427px]  flex flex-col items-center justify-center  px-5  py-8 bg-neutral-700 text-neutral-100    '>
            <div className='flex flex-col-reverse md:flex-row  md:justify-center  gap-x-16  bg-red-500 '>
                <Media />
                <AccordionFooter />
            </div>
            {/* <AboutUs /> */}
        </footer>
    )
}

export default Footer