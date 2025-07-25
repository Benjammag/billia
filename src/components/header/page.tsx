import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-[#FEF8EE] w-full h-[106px] flex items-center">
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-6 md:px-20">


                <div className="flex items-center gap-3 min-w-[160px]">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Billia Logo" width={145} height={60} />
                    </Link>
                    <h1 className="font-bold text-lg">Billia</h1>
                </div>


                <nav className="hidden md:flex gap-10 text-sm justify-center flex-1">
                    <Link href="#" className="text-orange-500 font-medium">Home</Link>
                    <Link href="/about">About Us</Link>
                    <Link href="#">Features</Link>
                    <Link href="#">Testimonials</Link>
                    <Link href="#">FAQ</Link>
                    <Link href="#">Contact Us</Link>
                </nav>
            </div>
        </header>


    );
}