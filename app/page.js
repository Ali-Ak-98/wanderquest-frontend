'use client'

import Link from 'next/link';
import {useEffect} from "react";
import api from "@/lib/api";
import {useMyContext} from "@/app/context/myContext";
import VideoBackground from "@/app/components/VideoBackground";
import {motion} from "framer-motion";

export default function Home() {
    const {citiesData, setCitiesData} = useMyContext();

    useEffect(() => {
        api.get('/cities').then(response => {
            setCitiesData(response.data);
        })
    }, []);

    return (
        <div className="countainer px-5 flex flex-col items-center justify-center h-screen bg-black text-center">
            <VideoBackground/>
            <section id={'hero'} className={'flex flex-col items-center justify-center text-white w-2/3 z-20'}>
                <motion.h1
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 1.5, ease: "easeOut"}}
                    className="xl:text-4xl md:text-2xl text-xl font-bold mb-2"
                >Welcome to WanderQuest
                </motion.h1>
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1, duration: 1.5, ease: "easeIn"}}
                    className={'xl:text-2xl md:text-xl mb-10'}
                >Your Ultimate Travel Adventure!
                </motion.h2>
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1.5, duration: 1.5, ease: "easeInOut"}}
                    className={'progress text-gray-400 flex flex-col justify-center items-center text-center md:text-xl text-sm'}>
                    <span>
                    Choose your starting city
                    </span>
                    <img src="/images/arrow1.svg" alt="arrow" className={'md:w-10 w-5 my-2 object-contain'}/>
                    <span>
                    Will you dive into history, soak in modern city vibes, or discover hidden gems?
                    </span>
                    <img src="/images/arrow2.svg" alt="arrow" className={'md:w-10 w-5 my-2 object-contain'}/>
                    <span>
                    Start your adventure now and see where the road leads!
                    </span>
                </motion.div>
            </section>
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 1.5, duration: 1.5, ease: "easeInOut"}}
                className="flex md:space-x-4 space-x-2 py-10 justify-center items-center z-20 md:text-xl text-xs whitespace-nowrap flex-wrap">
                <Link href="/cities/Tokyo">
                    <button
                        className="md:p-4 p-2 border border-gray-400 text-white rounded-lg hover:border-2 hover:border-gray-100 transition-all duration-300 ease-in-out">
                        Tokyo
                    </button>
                </Link>
                <Link href="/cities/New york city">
                    <button
                        className="md:p-4 p-2 border border-gray-400 text-white rounded-lg hover:border-2 hover:border-gray-100 transition-all duration-300 ease-in-out">
                        New York City
                    </button>
                </Link>
                <Link href="/cities/Madrid">
                    <button
                        className="md:p-4 p-2 border border-gray-400 text-white rounded-lg hover:border-2 hover:border-gray-100 transition-all duration-300 ease-in-out">Madrid
                    </button>
                </Link>
                {citiesData.length > 0 ? (
                        <Link href={`/cities/${citiesData[Math.floor(Math.random() * citiesData.length)].name}`}>
                            <button
                                className="md:p-4 p-2 border border-gray-400 text-white rounded-lg hover:border-2 hover:border-gray-100 transition-all duration-300 ease-in-out">Random
                                City
                            </button>
                        </Link>
                    )
                    :
                    <div role="status">
                        <svg aria-hidden="true"
                             className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600"
                             viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor"/>
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill"/>
                        </svg>
                    </div>
                }
            </motion.div>
        </div>
    );
}
