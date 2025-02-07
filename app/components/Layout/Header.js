// components/Header.js

import Link from 'next/link';

const Header = () => {
    return (
        <header>
            <div className="md:px-20 px-5 absolute bg-black/50 text-white md:py-4 shadow-md right-0 top-0 h-20 w-full mx-auto flex items-center justify-between z-20">
                <h1 className="md:text-3xl text-xl font-bold">
                    <Link href="/" className="text-yellow-400">WQ</Link>
                </h1>
                <nav className="space-x-6 text-sm md:text-md">
                    <Link href="/" className="hover:text-yellow-400">Home</Link>
                    <Link href="/" className="hover:text-yellow-400">My Journey</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
