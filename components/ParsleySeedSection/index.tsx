import { MoveRight } from "lucide-react";
import Produit from "./Product";
import { Button } from "../ui/button";

export default function ParsleySeed() {
    const imgs: string[] = ['/images/natural_skine_products/product_1.png', '/images/natural_skine_products/product_2.png', '/images/natural_skine_products/product_3.png', '/images/natural_skine_products/product_4.png']
    return <section className="w-full  h-fit min-h-[876px] py-20 px-5 md:px-8 bg-white flex flex-col gap-y-8">
        <div className="h-fit min-h-[200px] flex flex-col gap-y-4">
            <p className="text-sm">Parsley Seed Skin Care</p>
            <h2 className="font-medium text-2xl ">Supreme Skin Fortification</h2>
            <p className="text-base leading-relaxed">Discover our potent antioxidant-rich Parsley Seed Skin Care, perfect for all skin types.</p>
        </div>
        <div className="w-full overflow-x-auto flex items-center justify-start gap-x-4 ">
            {
                imgs.map((item, _) => {
                    return <Produit key={_} url_img={item} />
                })
            }
        </div>
        <Button size="default" className="bg-transparent shadow-none border-none max-w-44 hover:bg-white text-lg font-normal" variant="outline">
            All Products<MoveRight size={18} />
        </Button>
    </section>
}