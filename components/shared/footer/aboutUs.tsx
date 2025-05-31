import React from 'react'
import Link from 'next/link'

const AboutUs = () => {

    const items = [
        { name: "Company Profile", href: "/company-profile" },
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Cancellation Policy", href: "/cancellation-policy" },
        { name: "Terms of Service", href: "/terms-of-service" },
        { name: "Refund/Return Policy", href: "/refund-return-policy" },
    ];

    return (
        <div className='w-full max-w-7xl h-full flex flex-col-reverse gap-y-4 space-y-8  md:space-y-0 md:flex-row md:items-center md:justify-start  '>
            <div >
                <p className='text-stone-300 text-xs font-normal  tracking-tight'>CEIN. {new Date().getFullYear()} KINS All rights reserved.</p>
            </div>
            <div className='flex-1 md:flex items-center justify-center h-full ' >
                <ul className="w-full space-y-4 text-sm flex flex-col md:flex-row md:items-center md:justify-center md:gap-x-6 md:flex-1 md:space-y-0  ">
                    {items.map((item) => (
                        <li key={item.name}>
                            <Link href={item.href} className="text-[#CDCBC0]">
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default AboutUs