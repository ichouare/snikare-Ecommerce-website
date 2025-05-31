import { Button } from "@/components/ui/button"
import { APP_TITLE } from "@/constants"
import { ChevronDown, Heart, Menu, Search, ShoppingBag, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Header = () => {
    const navbarItems = ["Shop", "About Us", "Journal", "Stores"]
    return (
        <header className="flex  flex-col w-full   min-h-fit border-b  cursor-pointer">
            <div className="flex-1  flex-center  min-h-16 bg-zinc-800">
                <p className="text-neutral-100 px-5 py-3 text-center text-sm leading-normal font-normal">
                    Click and Collect is now available. Complimentary shipping over $400.
                </p>
            </div>
            <div className="md:hidden  flex-1 flex-between min-h-20 h-20 px-8 py-6 bg-white">
                <div className="max-w-[50px] w-[50px] flex-between "  >
                    <Menu size={14} />
                    <Search size={14} />
                </div>
                <Button asChild variant="ghost">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt={`${APP_TITLE} logo`} width={48} height={48} priority={true} />
                    </Link>
                </Button>
                <div className="max-w-[70px]  w-[70px]  flex-between "  >
                    <div className="min-w-7 flex-between">
                        <Heart size={14} />
                        <span>1</span>
                    </div>

                    <div className="min-w-7 flex-between">
                        <ShoppingBag size={14} />
                        <span>2</span>
                    </div>
                </div>
            </div>
            <div className="hidden  md:flex w-full  md:flex-1 md:flex-between min-h-20 h-20 px-8 py-6 ">
                <div className="max-w-[250px] w-[250px] flex-between "  >
                    {
                        navbarItems.map((item, _) => {
                            return <p className="text-sm leading-5" key={_}>{item}</p>
                        })
                    }
                </div>
                <Button asChild variant="ghost">
                    <Link href="/">
                        <Image src="/images/logo.svg" alt={`${APP_TITLE} logo`} width={48} height={48} priority={true} />
                    </Link>
                </Button>
                <div className="max-w-[300px]  w-[250px]  flex-between"  >
                    <div className="min-w-7 flex-between">
                        <Search size={14} />
                    </div>
                    <div className="min-w-12 flex-between ">
                        <span className="inline-block">EN</span><ChevronDown size={18} />
                    </div>
                    <div className="min-w-7 flex-between">
                        <Heart size={14} />
                        <span>1</span>
                    </div>
                    <div className="min-w-7 flex-between">
                        <User size={14} />
                    </div>
                    <div className="min-w-7 flex-between">
                        <ShoppingBag size={14} />
                        <span>2</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header