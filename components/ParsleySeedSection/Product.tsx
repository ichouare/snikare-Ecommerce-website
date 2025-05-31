import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Image from "next/image";


type PropsType = {
    url_img: string
}
export default function Produit({ url_img }: PropsType) {
    return <div className="product  min-w-[159.5px] w-[159.5px] h-[440px] md:min-w-[370.75px]  md:h-[586px] flex flex-col gap-y-4 md:gap-y-10  bg-white  md:px-5 md:py-2">
        <div className=" relative flex flex-col gap-y-1 min-h-[191px] md:min-h-[288px]   md:p-4 " >
            <p className="uppercase text-xs self-end">bestseller</p>
            {/* <div className="relative w-full min-h-[191px] h-[191px] md:min-h-[200px] md:h-[220px]  "> */}
            {/* my-next-app\public/images/sample-products/p3-1.jpg */}
            <Image src={url_img} alt="product image" width={300} height={400}
                sizes="(max-width: 700px) 100% , 300px" quality={100} className="  h-[160px] md:h-[220px]" />
            {/* </div> */}
            <Heart size={24} className="self-end absolute bottom-2 md:bottom-10 right-2 md:right-10 font-light" />
        </div>
        <div className="flex flex-col gap-3 justify-center w-full hit-fit min-h-5 ">
            <h3 className="w-full text-sm font-medium  text-center "> Sublime Replenishing Night Masque</h3>
            <p className="hidden md:block text-center">Overnight redeemer with Vitamins B</p>
        </div>
        <div className="flex flex-col gap-3 items-center w-full hit-fit min-h-5 ">
            <p className="text-base">60 ml</p>
            <p className="text-base" >$100</p>
        </div>
        <Button className="md:btn text-black bg-transparent shadow-none border    min-h-12 rounded-none " variant="outline">
            Add to your cart
        </Button>

    </div>
}