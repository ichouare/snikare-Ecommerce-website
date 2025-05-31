import React from 'react'
import { Button } from '../ui/button'
import { MoveRight } from 'lucide-react'
import Blog from './Blog'

export default function Journal() {
    const imgs: string[] = ['/images/Journal/product_1.png', '/images/Journal/product_2.png', '/images/Journal/product_3.png', '/images/Journal/product_4.png']

    return (
        <section className="w-full  h-fit min-h-[631px]  md:min-h-[852px] py-20 px-5 md:px-8 bg-white flex flex-col gap-y-8">
            <div className="h-fit min-h-[80px] flex flex-col gap-y-4">
                <p className="text-sm">Insights into Health and Well-being</p>
                <h2 className="font-medium text-2xl ">Our Journal</h2>
            </div>
            <div className="w-full overflow-x-auto flex items-center justify-start gap-x-4  ">
                {imgs.map((url, _) => <Blog url_img={url} key={_} />)}
            </div>
            <Button size="default" className="bg-transparent shadow-none border-none max-w-44 hover:bg-white text-lg font-normal" variant="outline">
                All Blog Posts <MoveRight size={18} />
            </Button>
        </section>
    )
}
