import Image from 'next/image';

export default function About() {
    return (
        <div className="font-sans text-[#333]">
            {/* Hero Section */}
            <section className="bg-[#FFF8F0] px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
                    <div className="relative w-full lg:w-1/2 flex justify-center">
                        <div className="h-[450px] w-[350px] flex items-end justify-center overflow-hidden">
                            <Image src="/imagine.svg" alt="imagining" width={519} height={550} />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-[#3F1D00]">
                            Reimagining How Nigerians
                        </h1>
                        <h1 className="text-3xl text-center md:text-4xl font-bold mb-4 text-[#3F1D00]">Pay, One Bill at a Time</h1>
                        <p className="text-lg">
                            At Billia, we're building more than just a payment app — we’re
                        </p>
                        <p>creating a smarter, simpler way for everyday Nigerians to stay</p>
                        <p>connected, pay their bills, and take control of their financial lives.</p>
                    </div>
                </div>
            </section>

            {/* Why We Started */}
            <section className="bg-white px-6 py-18 mt-2">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    {/* Text Content */}
                    <div className="max-w-[670px] flex flex-col gap-3">
                        <h2 className="text-2xl font-bold mb-4 text-[#3F1D00]">Why We Started</h2>
                        <p>We created Billia because we saw a real problem: people</p>
                        <p>struggling with too many apps, missed due dates, and unreliable</p>
                        <p className="mb-6">payment platforms.</p>
                        <p>So we built one app that brings it all together — electricity, internet,</p>
                        <p>school fees, airtime, and even a virtual dollar card. Add Billia AI,</p>
                        <p>and you’ve got the smartest payment experience available today.</p>
                    </div>

                    {/* Image */}
                    <div>
                        <Image
                            src="/started.svg"
                            alt="started"
                            width={500}
                            height={500}
                            className="rounded-2xl"
                        />
                    </div>
                </div>
            </section>


            {/* Mission and Vision */}
            <section className="bg-white px-6 py-18">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
                    {/* Left - Image */}
                    <div>
                        <Image
                            src="/mission.svg"
                            alt="Mission and Vision"
                            width={500}
                            height={500}
                            className="rounded-2xl"
                        />
                    </div>

                    {/* Right - Text */}
                    <div className="max-w-[670px] flex flex-col gap-3">
                        <h2 className="text-2xl font-bold mb-4 text-[#3F1D00]">Our Mission & Vision</h2>

                        <p>
                            <strong>Mission:</strong> To make bill payments effortless, intelligent, and
                            accessible for everyone across Nigeria — no matter their background or tech level.
                        </p>

                        <p className="mb-6">
                            <strong>Vision:</strong> A future where anyone can manage their financial life from
                            one simple, secure platform — powered by smart automation and trust.
                        </p>
                    </div>
                </div>
            </section>


            {/* Core Values */}
            <section className="bg-white px-6 py-16">
                <div className="max-w-7xl mx-auto w-[1208px] h-[780px] gap-16">
                    <h2 className="w-[330px] h-[60px] text-2xl font-bold text-[#3F1D00] mb-10">Our Core Values</h2>

                    <div className="flex flex-col gap-6">
                        {/* First Row */}
                        <div className="w-fill h-[320px] flex gap-10">
                            {[0, 1].map((i) => {
                                const val = [
                                    {
                                        title: 'Simplicity',
                                        desc: 'Payments should be fast, clear, and easy — ',
                                        descr: 'no stress.',
                                        color: 'bg-[#FF95001A]',
                                        image: '/simple.svg',
                                    },
                                    {
                                        title: 'Trust',
                                        desc: 'Your data and money are protected by real-',
                                        descr: 'time security and compliance.',
                                        color: 'bg-[#34C7591A]',
                                        image: '/lock.svg',
                                    },
                                ][i];

                                return (
                                    <div
                                        key={i}
                                        className={`relative w-[584px] h-[320px] gap-4 flex flex-col justify-between rounded-3xl p-10 w-1/2 h-[250px] ${val.color}`}
                                    >
                                        <div className='w-[504px] h-[70px]'>
                                            <h3 className="w-[163px] h-[42px] bold font-bold text-2xl leading-[100%] mb-2">{val.title}</h3>
                                            <p className='w-[504px] h-[70px] font-normal text-xl leading-3 tracking-normal'>{val.desc}</p>
                                            <p className='w-[504px] h-[70px] font-normal text-xl leading-3 tracking-normal'>{val.descr}</p>
                                        </div>
                                        <img
                                            src={val.image}
                                            alt={val.title}
                                            className="absolute bottom-4 right-4 w-[150px] h-[150px] object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Second Row */}
                        <div className="w-fill h-[320px] flex gap-10">
                            {[0, 1].map((i) => {
                                const val = [
                                    {
                                        title: 'Innovation',
                                        desc: 'We use smart tools like Billia AI to make bill ',
                                        descr: 'payments smarter every day.',
                                        color: 'bg-[#FF3B301A]',
                                        image: '/brain.svg',
                                    },
                                    {
                                        title: 'People First',
                                        desc: 'Everything we build starts with our users’ ',
                                        descr: 'needs and experience in mind.',
                                        color: 'bg-[#007AFF1A]',
                                        image: '/hand-shake.svg',
                                    },
                                ][i];

                                return (
                                    <div
                                        key={i}
                                        className={`relative w-[584px] h-[320px] gap-4 flex flex-col justify-between rounded-3xl p-10 w-1/2 h-[250px] ${val.color}`}
                                    >
                                        <div className='w-[504px] h-[70px]'>
                                            <h3 className="w-[163px] h-[42px] bold font-bold text-2xl leading-[100%] mb-2">{val.title}</h3>
                                            <p className='w-[504px] h-[70px] font-normal text-xl leading-3 tracking-normal'>{val.desc}</p>
                                            <p className='w-[504px] h-[70px] font-normal text-xl leading-3 tracking-normal'>{val.descr}</p>
                                        </div>
                                        <img
                                            src={val.image}
                                            alt={val.title}
                                            className="absolute bottom-4 right-4 w-[150px] h-[150px] object-contain"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>


            {/* Call to Action */}
            <section className="bg-white px-6 py-16 text-center">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-12 p-9">
                    {/* Headings */}
                    <div className="max-w-[900px]">
                        <h2 className="text-3xl font-medium leading-[100%] mb-2 text-[#3F1D00]">
                            Ready to simplify your bills?
                        </h2>
                        <h2 className="text-3xl font-medium leading-[100%] mb-2 text-[#3F1D00]">
                            Download Billia and experience the smarter way to pay.
                        </h2>
                    </div>

                    <div className="flex justify-center gap-5">
                        <a href="#"><Image
                            className="py-[7.2px] px-[14.4px]"
                            src="/play-store.svg"
                            alt="Google Play"
                            width={152.4}
                            height={51.6}
                        /></a>
                        <a href="#"><Image
                            className="py-[8.4px] px-[14.4px]"
                            src="/app-store.svg"
                            alt="App Store"
                            width={156}
                            height={51.6}
                        /></a>
                    </div>
                </div>
            </section>

        </div>
    );
}
