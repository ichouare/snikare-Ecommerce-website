import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";

export default function Pub() {
    return <section className="w-full min-h-[771px] h-fit max-h-[771px] md:min-h-[830px] md:max-h-[830px] px-5 py-11 flex flex-col md:flex-row  md:items-center md:justify-around gap-7 bg-neutral-100">
        <div className="relative w-[335px] h-[299px] md:h-[530px] md:w-[562px]">
            <Image src='/images/pub/product.png' alt="product image" fill quality={100} className="pointer-events-none select-none" />
        </div>
        <div className="max-w-[335px] hit-fit max-h-[352px]  md:max-w-[562px] flex flex-col gap-y-6 text-neutral-600">
            <p className="text-sm font-normal">Skin Care</p>
            <h1 className="font-normal text-3xl tracking-wider  w-full ">Potent Solutions for Demanding Skin</h1>
            <p className="text-[17px] px-1 leading-normal">
                Discover products tailored for mature skin and urban lifestyles, offering daily hydration and the added advantage of powerful vitamins and antioxidants.
            </p>
            <Button className="border border-neutral-600 h-16  md:mt-6 text-base font-light max-w-[207px] bg-transparent rounded-none " size="default" variant="outline" >
                Ream More <MoveRight size={32} />
            </Button>
        </div>
    </section>
}