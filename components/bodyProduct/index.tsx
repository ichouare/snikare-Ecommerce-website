import { MoveRight } from "lucide-react";
import { Button } from "../ui/button";

export default function BodyProduct() {
    return (
        <section className="w-full min-h-[528px] md:min-h-[574px] flex items-center md:items-center justify-center md:justify-start  ProductBodySection px-5 md:px-14 py-7 md:py-10 text-neutral-100" >
            {/* <div className="min-h-[470px] h-[470px] relative flex flex-col  justify-end items-center bg-red-500    py-8 md:px-8 md:pt-28 "> */}
            <div className="min-h-[300px] h-auto md:min-h-[350px] md:h-fit   w-full  md:max-w-[574px] flex flex-col justify-center gap-8 ">
                <div className="flex flex-col w-full h-fit gap-y-4 ">
                    <h4 className="text-xs">Revitalize Your Body</h4>
                    <h1 className="text-2xl tracking-widest font-medium">Effective Ingredients for Visible Results</h1>
                    <p className="text-base tracking-wider font-thin m-0 " >
                        Our body products are rich in highly effective ingredients, achieve visible results, firm the skin and leave it feeling soft and supple.
                        <br />
                        <span className="text-base tracking-wider font-light hidden md:block  m-0" >
                            Fine textures that are quickly absorbed, non-greasy and in no way inferior to facial care. It’s time to give our body the same attention as our face.
                        </span>
                    </p>
                </div>
                <Button className="text-neutral-100 h-16  border text-base font-light max-w-[207px] bg-transparent rounded-none " size="default" variant="outline" >
                    Discover More <MoveRight size={18} />
                </Button>
            </div>
            {/* </div> */}
        </section>
    )
}
