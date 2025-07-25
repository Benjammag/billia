import Image from 'next/image';

export default function Away() {
    return (
        <main className="bg-[#FFF8F3] text-[#1F1F1F]">
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 shadow-sm bg-white">
                <div className="flex items-center gap-2">
                    <Image src="/logo.png" alt="Billia Logo" width={40} height={40} />
                    <h1 className="font-bold text-lg">Billia</h1>
                </div>
                <nav className="hidden md:flex gap-6 text-sm">
                    <a href="#" className="text-orange-500 font-medium">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">Testimonials</a>
                    <a href="#">FAQ</a>
                    <a href="#">Contact Us</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 md:py-20">
                <div className="md:w-1/2 flex flex-col justify-center space-y-4 h-full">
                    <p className="text-sm text-orange-500 font-semibold">
                        One App. Every Payment. Zero Stress
                    </p>
                    <h2 className="text-4xl font-bold">
                        Simplify Every Payment with One Powerful App
                    </h2>
                    <p className="text-gray-700">
                        Billia lets you pay bills, top up airtime, buy data, and manage your wallet — all in one place. Fast. Secure. Reliable.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
                        <Image src="/app-store.png" alt="App Store" width={150} height={50} />
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Join 20,000+ Nigerians making payments smarter every day.</p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Image src="/app-preview.png" alt="App Preview" width={400} height={800} />
                </div>
            </section>

            {/* Services */}
            <section className="px-6 py-12 space-y-10">
                <h3 className="text-2xl font-semibold text-center">Everything You Need to Pay Smarter</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-blue-100 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">All-in-One Bill Payments</h4>
                        <p>Pay for electricity, TV, internet, education, and betting — all in seconds.</p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Airtime & Data Top-Up</h4>
                        <p>Buy airtime and mobile data for yourself or others — instantly and globally.</p>
                    </div>
                    <div className="bg-yellow-100 p-6 rounded-lg">
                        <h4 className="font-bold mb-2">Virtual Dollar Card</h4>
                        <p>Shop globally with your own secure virtual dollar card — perfect for subscriptions and online payments.</p>
                    </div>
                </div>
            </section>

            {/* AI Section */}
            <section className="bg-pink-100 px-6 py-12 flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                    <Image src="/billia-bot.png" alt="Billia Bot" width={200} height={200} />
                </div>
                <div className="md:w-1/2">
                    <h3 className="text-2xl font-semibold mb-2">Introducing Billia AI: Smarter, Faster, Personal</h3>
                    <p className="mb-4">From paying school fees to buying airtime or electricity, Billia AI makes every payment smarter, faster, and stress free — just by asking.</p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Pay Bill By Typing a Command</li>
                        <li>One-Tap Repeats</li>
                        <li>In-App Chat Assistance</li>
                    </ul>
                    <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Try it Now</button>
                </div>
            </section>

            {/* Testimonials */}
            <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-12">
                <h3 className="text-2xl font-semibold text-center mb-8">What Our Customers Says</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg">
                        <h4 className="font-bold">Arlene McCoy</h4>
                        <p className="text-sm mb-2">One Year of using Billia</p>
                        <p className="text-sm">Before Billia, I always missed my PHCN payment dates. Now I get reminders and can repeat past payments without filling forms. It’s efficient, secure, and perfect for people like me who forget easily.</p>
                        <p className="text-sm mt-2 text-gray-500">4 June 2025 • ⭐ 4.7/5.0</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg">
                        <h4 className="font-bold">Savannah Nguyen</h4>
                        <p className="text-sm mb-2">Six Months of using Billia</p>
                        <p className="text-sm">I was surprised how fast wallet funding worked. I transferred from my bank to the Billia virtual account, and the money reflected instantly. I’ve used it to pay my cable and internet bills ever since.</p>
                        <p className="text-sm mt-2 text-gray-500">24 April 2025 • ⭐ 4.5/5.0</p>
                    </div>
                </div>
            </section>

            {/* Download Section */}
            <section className="px-6 py-12 bg-[#FFF8F3] text-center">
                <h3 className="text-2xl font-semibold mb-2">Download Billia Today</h3>
                <p className="mb-4 text-gray-600">Fast payments, smart reminders, and secure wallet tools — all inside Billia</p>
                <div className="flex justify-center gap-4 mb-6">
                    <Image src="/google-play.png" alt="Google Play" width={150} height={50} />
                    <Image src="/app-store.png" alt="App Store" width={150} height={50} />
                </div>
                <Image src="/phones.png" alt="Phones" width={300} height={300} className="mx-auto" />
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-10">
                <div className="grid md:grid-cols-4 gap-6">
                    <div>
                        <h4 className="font-bold text-lg mb-2">Billia</h4>
                        <p className="text-sm">Our all-in-one app for bills, airtime, data, and smart payments — powered by Billia AI.</p>
                        <div className="flex gap-2 mt-2">
                            <a href="#">FB</a>
                            <a href="#">IG</a>
                            <a href="#">X</a>
                        </div>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">Company</h5>
                        <ul className="text-sm space-y-1">
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Testimonials</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">Legal</h5>
                        <ul className="text-sm space-y-1">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold mb-2">Contact Us</h5>
                        <p className="text-sm">BilliaAI@gmail.com</p>
                        <p className="text-sm">08023437727</p>
                    </div>
                </div>
                <p className="text-center text-xs mt-6">© 2025 Billia Technologies. All rights reserved. Product of SmartRob Technologies Limited</p>
            </footer>
        </main>
    );
}
