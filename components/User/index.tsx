import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'

export default function User() {
    // const imgs: string[] = ['/images/natural_skine_products/product_1.png', '/images/natural_skine_products/product_2.png', '/images/natural_skine_products/product_3.png', '/images/natural_skine_products/product_4.png']
    return (
        <section className='w-full min-h-[600px] flex flex-col items-center gap-y-10 bg-[#F1F3EC] py-20' >
            <h2 className='font-medium text-3xl '>User Voice</h2>
            <div className='w-full max-w-[328px] md:w-[774px]  md:max-w-[774px] h-[328px] md:h-[512px]  max-h-[328px] md:max-h-[512px] grid grid-rows-3 md:grid-rows-2 grid-cols-3 md:grid-col-2 gap-2 '>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((id, _) => {
                    return <div key={_} className='w-full h-full relative'>
                        <Image src={`/images/User/img_${id}.png`} alt='img product_1' fill quality={100} />
                    </div>
                })}
            </div>
            <Button size="lg" className="bg-transparent border rounded-none border-black/30 shadow-none w-48 min-h-14 hover:bg-white text-lg font-normal" variant="outline">
                More<MoveRight size={18} />
            </Button>

        </section >
    )
}
