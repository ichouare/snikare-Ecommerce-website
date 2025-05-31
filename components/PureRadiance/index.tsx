import { MoveRight } from "lucide-react";
import Produit from "../ParsleySeedSection/Product";
import { Button } from "../ui/button";

export default function PureRadiance() {
    const imgs: string[] = ['/images/superme_skin_products/product_1.png', '/images/superme_skin_products/product_2.png', '/images/superme_skin_products/product_3.png', '/images/superme_skin_products/product_4.png']
    return <section className="w-full  h-fit min-h-[876px] py-20 px-5 md:px-8 bg-white flex flex-col gap-y-8">
        <div className="h-fit min-h-[200px] max-w-[651px] flex flex-col gap-y-4">
            <p className="text-sm">Pure Radiance</p>
            <h2 className="font-medium text-2xl ">Natural Face Care for Visible Transformation</h2>
            <p className="text-base font-normal leading-6">Our natural face care is based on pure ingredients and biotechnological plant power, designed to transform your skin and provide visible results —naturally.</p>
        </div>
        <div className="w-full overflow-x-auto flex items-center justify-start gap-x-4 ">
            {imgs.map((item, _) => <Produit url_img={item} key={_} />)}
            {/* {
                imgs.map(() => {
                    return 
                })
            } */}
        </div>
        <Button size="default" className="bg-transparent shadow-none border-none max-w-44 hover:bg-white text-lg font-normal" variant="outline">
            All Products<MoveRight size={18} />
        </Button>
    </section>
}