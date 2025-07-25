export default function Hero() {
    return (
        <>
            <section className="bg-[#FEF8EE] py-12 md:py-20">
                <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
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
                            <img src="/play-store.svg" alt="Google Play" width={150} height={50} />
                            <img src="/app-store.svg" alt="App Store" width={150} height={50} />
                        </div>
                        <div className="flex items-center gap-4 mt-4">
                            <img src="/people.svg" alt="Users" width={92} height={40} />
                            <p className="text-sm text-gray-500">Join 20,000+ Nigerians making payments smarter every day.</p>
                        </div>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
                        <img src="/app-preview.svg" alt="App Preview" width={550} height={800} className="z-10" />
                    </div>
                </div>
            </section>

        </>
    );
}