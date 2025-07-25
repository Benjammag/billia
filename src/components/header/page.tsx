import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="bg-[#FEF8EE] w-full h-[106px] flex items-center">
            <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between px-6 md:px-20">
                {/* Logo - shifted inward with smaller gap */}
                <div className="flex items-center gap-3 min-w-[160px] m-[50px]">
                    <Image src="/logo.svg" alt="Billia Logo" width={145} height={60} />
                    <h1 className="font-bold text-lg">Billia</h1>
                </div>

                {/* Nav - slightly nudged to the right */}
                <nav className="hidden md:flex gap-10 text-sm ml-8 flex-1 justify-center">
                    <a href="#" className="text-orange-500 font-medium">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                </nav>
            </div>
        </header>


    );
}