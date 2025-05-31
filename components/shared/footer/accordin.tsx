import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordin"

export function AccordionFooter() {
    return (
        <Accordion type="single" collapsible className="w-full bg-blue-600 min-h-[400px] md:min-h-[150px] md:flex  md:items-start md:justify-evenly    ">
            <AccordionItem value="item-1" className="min-h-24  ">
                <AccordionTrigger className="border-none" >Products</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="min-h-24" >
                <AccordionTrigger className="border-none" >Guides</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="min-h-24" >
                <AccordionTrigger className="border-none">service</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="min-h-24" >
                <AccordionTrigger className="border-none">Contact</AccordionTrigger>
                <AccordionContent>
                    Yes. It&apos;s animated by default, but you can disable it if you
                    prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
