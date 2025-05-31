import { MoveRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function HeroHome() {
    return (
        <section className="hero min-h-screen relative bg-neutral-900">
            <div className="relative w-full min-h-[271px] h-[271px] md:hidden">
                <Image src='/images/hero/image.png' alt="hero image" fill quality={100} priority className="object-contain" />
            </div>
            <div className="min-h-[470px] h-[470px] md:min-h-screen md:hero_bg relative flex flex-col  justify-between    py-8 px-5 md:px-8 md:pt-28 text-neutral-100">
                <div className="min-h-[300px] h-[242px] md:min-h-[350px] md:h-fit   md:max-w-[395px] flex flex-col justify-center gap-8 ">
                    <div className="flex flex-col w-full h-fit gap-y-4 ">
                        <h4 className="text-xs">Treat Your Body Like Your Face</h4>
                        <h1 className="text-2xl tracking-widest font-medium">Highly Effective Body Care</h1>
                        <p className="text-base tracking-wider font-normal" >
                            A combination of nature and advanced technology. Vegan, natural, skin-friendly and rich in effective biotechnological ingredients.
                        </p>
                    </div>
                    <Button className="text-neutral-100 h-16  border text-base font-light max-w-[207px] bg-transparent rounded-none " size="default" variant="outline" >
                        Discover More <MoveRight size={18} />
                    </Button>
                </div>
                <div className="   w-full h-3  flex items-center justify-center gap-x-3 even:">
                    <hr className="min-w-12 h-[1px] " />
                    <hr className="min-w-12 h-[1px] text-neutral-700" />
                    <hr className="min-w-12 h-[1px] text-neutral-700" />
                </div>
            </div>
        </section>)
}