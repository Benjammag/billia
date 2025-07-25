import Image from 'next/image';

export default function AboutUsPage() {
    return (
        <div className="font-sans text-[#333]">
            {/* Hero Section */}
            <section className="bg-[#FFF8F0] px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className="bg-[#FF8000] rounded-br-[50%] rounded-tr-[50%] h-[450px] w-[350px] flex items-end justify-center overflow-hidden">
                            <Image src="/hero-girl.png" alt="Smiling Woman" width={300} height={450} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3F1D00]">
                            Reimagining How Nigerians Pay, One Bill at a Time
                        </h1>
                        <p className="text-lg">
                            At Billia, we're building more than just a payment app — we’re creating a smarter,
                            simpler way for everyday Nigerians to stay connected, pay their bills, and take
                            control of their financial lives.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why We Started */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-[#3F1D00]">Why We Started</h2>
                        <p className="mb-4">
                            We created Billia because we saw a real problem: people struggling with too many apps,
                            missed due dates, and unreliable payment platforms.
                        </p>
                        <p>
                            So we built one app that brings it all together — electricity, internet, school fees,
                            airtime, and even a virtual dollar card. Add Billia AI, and you’ve got the smartest
                            payment experience available today.
                        </p>
                    </div>
                    <div>
                        <Image src="/guy-phone.png" alt="Man using phone" width={600} height={400} className="rounded-lg" />
                    </div>
                </div>
            </section>

            {/* Mission and Vision */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image src="/group-celebrating.png" alt="Group celebrating" width={600} height={400} className="rounded-xl" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-[#3F1D00]">Our Mission & Vision</h2>
                        <p className="mb-2">
                            <strong>Mission:</strong> To make bill payments effortless, intelligent, and accessible
                            for everyone across Nigeria — no matter their background or tech level.
                        </p>
                        <p>
                            <strong>Vision:</strong> A future where anyone can manage their financial life from one
                            simple, secure platform — powered by smart automation and trust.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-2xl font-bold text-[#3F1D00] mb-10">Our Core Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: 'Simplicity',
                                desc: 'Payments should be fast, clear, and easy — no stress.',
                                color: 'bg-[#FFF1DE]',
                            },
                            {
                                title: 'Trust',
                                desc: 'Your data and money are protected by real-time security and compliance.',
                                color: 'bg-[#E6F8E7]',
                            },
                            {
                                title: 'Innovation',
                                desc: 'We use smart tools like Billia AI to make bill payments smarter every day.',
                                color: 'bg-[#FFECEC]',
                            },
                            {
                                title: 'People First',
                                desc: 'Everything we build starts with our users’ needs and experience in mind.',
                                color: 'bg-[#EAF4FF]',
                            },
                        ].map((val, i) => (
                            <div key={i} className={`rounded-lg p-6 ${val.color}`}>
                                <h3 className="font-semibold text-lg mb-2">{val.title}</h3>
                                <p>{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-white px-6 py-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#3F1D00]">
                    Ready to simplify your bills?
                </h2>
                <p className="mb-6 text-lg">
                    Download Billia and experience the smarter way to pay.
                </p>
                <div className="flex justify-center gap-4">
                    <Image src="/google-play.png" alt="Google Play" width={140} height={45} />
                    <Image src="/app-store.png" alt="App Store" width={140} height={45} />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-[#FF8000] to-[#FF4D00] text-white px-6 py-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <Image src="/billia-logo-white.png" alt="Billia Logo" width={120} height={60} />
                        <p className="mt-4 text-sm">
                            Our all-in-one app for bills, airtime, data, and smart payments — powered by Billia AI.
                        </p>
                        <div className="flex gap-3 mt-4">
                            <Image src="/icon-fb.svg" alt="Facebook" width={24} height={24} />
                            <Image src="/icon-ig.svg" alt="Instagram" width={24} height={24} />
                            <Image src="/icon-x.svg" alt="Twitter/X" width={24} height={24} />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Company</h4>
                        <ul className="text-sm space-y-1">
                            <li>About Us</li>
                            <li>Features</li>
                            <li>Testimonials</li>
                            <li>Services</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Legal</h4>
                        <ul className="text-sm space-y-1">
                            <li>Privacy Policy</li>
                            <li>Terms of Service</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">Contact Us</h4>
                        <p className="text-sm">BilliaInfo@gmail.com</p>
                        <p className="text-sm">08023437727</p>
                    </div>
                </div>

                <div className="border-t border-white mt-10 pt-4 text-xs text-center">
                    © 2025 Billia Technologies. All rights reserved. Product of SmartRob Technologies Limited.
                </div>
            </footer>
        </div>
    );
}
