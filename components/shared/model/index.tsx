'use client'

import { handleSubscrption } from "@/actions/handleSubscriptionAction"

import { X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"


export default function Model() {

    const [isOpen, setIsOpen] = useState(false)
    const [isFisrtTime, setisFisrtTime] = useState<boolean>(false)
    useEffect(() => {
        if (window && JSON.parse(window.localStorage.getItem("firstime")!))
              setisFisrtTime(true)
        setTimeout(() => {
            setIsOpen(true)
        }, 2000)
    }, [])

    const handlerSubscription = async (formData: FormData) => {
        const res = await handleSubscrption(formData)
        setIsOpen(false)
        setisFisrtTime(res)
        if (window)
            window.localStorage.setItem("firstime", "true")
        console.log(res)
    }
    if (isFisrtTime)
        return null

    if (!isOpen && !isFisrtTime)
        return <div className="w-full md:w-[851px] scaleUp  bg-red-500  min-h-[622px] md:min-h-[520px]  flex flex-col-reverse md:flex-row asbolute">
            <div className="min-w-[50%] max-w-[50%] min-h-[393px] grid grid-flow-row place-content-center px-10 ">
                <h2 className="font-normal  text-3xl leading-[50px]  ">A Gift  For You</h2>
                <p className="p-0 text-base">Be the first to know about our latest arrivals, exclusive deals, and special offers. Subscribe now and get 10% off your first order!</p>
                <form action={handlerSubscription} className="w-full h-fit  min-h-[140px] flex flex-col gap-y-4 py-3 " >
                    <input type="email" placeholder="Enter Your Email" name="email" className="w-full h-14 px-3"></input>
                    <button type="submit" className="w-full flex items-center justify-center text-white bg-black h-14 text-lg cursor-pointer " >Subscribe</button>
                </form>
            </div>
            <Image src="/images/Journal/product_4.png" alt="take care of your beauty" height={300} width={500} quality={100} priority sizes="(max-width) 100%, 100%" />
            <X size={24} className="absolute top-5 right-5 cursor-pointer" onClick={() => {
                setIsOpen(true)
            }} />
        </div>
    return <div className="fixed bg-red-500   transition-all  p-6 md:p-0 min-h-screen  top-0 left-0 w-full z-50 flex items-center justify-center   bg-black/50 overflow-y-auto">
        <div className="w-full md:w-[851px] scaleUp  bg-white  min-h-[622px] md:min-h-[520px]  flex flex-col-reverse md:flex-row relative">
            <div className="min-w-[50%] max-w-[50%] min-h-[393px] grid grid-flow-row place-content-center px-10 ">
                <h2 className="font-normal  text-3xl leading-[50px]  ">A Gift Winting For You</h2>
                <p className="p-0 text-base">Be the first to know about our latest arrivals, exclusive deals, and special offers. Subscribe now and get 10% off your first order!</p>
                <form action={handlerSubscription} className="w-full h-fit  min-h-[140px] flex flex-col gap-y-4 py-3 " >
                    <input type="email" placeholder="Enter Your Email" name="email" className="w-full h-14 px-3"></input>
                    <button type="submit" className="w-full flex items-center justify-center text-white bg-black h-14 text-lg cursor-pointer " >Subscribe</button>
                </form>
            </div>
            <Image src="/images/User/img_6.png" alt="take care of your beauty" height={300} width={500} quality={100} priority sizes="(max-width) 100%, 100%" />
            <X size={24} className="absolute top-5 right-5 cursor-pointer" onClick={() => {
                setIsOpen(false)
            }} />
        </div>
        {/* <div className="w-[851px] min-h-[520px] bg-white"> */}
        {/* </div> */}
    </div>
}