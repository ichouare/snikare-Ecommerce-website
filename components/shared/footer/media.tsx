import React from 'react'
import Twitter from '@/public/images/media/Twitter.png'
import Facebook from '@/public/images/media/Facebook.png'
import Instagram from '@/public/images/media/Instagram.png'
import Image from 'next/image'

const Media = () => {
    return (
        <div className='flex-[inherit] flex-col flex-start w-36 space-y-4 '>
            <h3 className='text-base text-[#CDCBC0]'>FOLLOW US</h3>
            <ul className='flex items-center space-x-4'>
                <li className='w-6 h-6'>
                    <Image src={Twitter} alt='twitter account' />
                </li>
                <li className='w-6 h-6'>
                    <Image src={Facebook} alt='Facebook account' />
                </li>
                <li className='w-6 h-6'>
                    <Image src={Instagram} alt='Instagram account' />
                </li>
            </ul>
        </div>
    )
}

export default Media