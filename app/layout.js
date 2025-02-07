'use client'

import {MyContextProvider} from "@/app/context/myContext";
import Header from "@/app/components/Layout/Header";
import Footer from "@/app/components/Layout/Footer";
import PageTransition from "@/app/components/PageTransition";
import {AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import "./globals.css"

export default function RootLayout({children}) {
    const pathname = usePathname();

    return (
        <MyContextProvider>
            <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Audiowide&family=Lora:ital,wght@0,400..700;1,400..700&family=Orbitron:wght@400..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                    rel="stylesheet"/>
            </head>
            <body className={'font-poppins'}>
            <Header/>
            <AnimatePresence mode="wait">
                <PageTransition key={pathname}>{children}</PageTransition>
            </AnimatePresence>s
            <Footer/>
            </body>
            </html>
        </MyContextProvider>

    );
}
