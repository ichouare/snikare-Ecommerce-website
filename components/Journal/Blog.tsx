import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Image from "next/image";

type TProps = {
    url_img: string
}
export default function Blog({ url_img }: TProps) {
    return <div className="product min-w-[159.5px] h-[350px] md:min-w-[370.75px]  md:h-[461px] flex flex-col gap-y-10 md:gap-y-10  bg-white">
        <div className="relative w-full min-h-[155px] md:min-h-[288px] bg-red-500">
            {/* my-next-app\public/images/sample-products/p3-1.jpg */}
            <Image src={url_img} alt="product image" fill quality={100} className="" />
        </div>
        <div className="flex flex-col gap-3 justify-center w-full hit-fit min-h-5 ">
            <h3 className="w-full text-[13px]  text-start text-[#CDCBC0]  tracking-wide "> SKIN CONCIERGE</h3>
            <p className="font-bold text-sm text-start text-[#333333] ">The Right Skincare When Traveling</p>
        </div>
        <Button className=" text-black bg-transparent shadow-none border-none  hover:bg-none    " variant="ghost">
            Read More <MoveRight size={18} />
        </Button>

    </div>
}