
import type { Metadata } from "next";
import { APP_TITLE, APP_DESCRIPTION } from '@/constants/index'
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";


export const metadata: Metadata = {
    title: `${APP_TITLE}`,
    description: `${APP_DESCRIPTION}`,

}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen max-h-screen  flex-col">
            <Header />
            <main className="flex min-h-max h-[calc(100vh-100px)] ">
                {children}
            </main>
            <Footer />
        </div>
    );
}