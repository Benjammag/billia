export default function Service() {
    return (
        <section className="w-full flex justify-center bg-[#FFF8F3] px-4 py-12">
            <div className="w-full max-w-[1200px] space-y-10">
                <h3 className="text-4xl font-semibold text-center">Everything You Need to Pay Smarter</h3>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1 bg-[#E6F4FF] p-6 rounded-2xl gap-2 w-[588px] h-[350px]">
                            <h4 className="font-bold mb-2">All-in-One Bill Payments</h4>
                            <p>Pay for electricity, TV, internet, education, and</p>
                            <p>betting — all in seconds.</p>
                            <img src="/lady.svg" alt="lady" className="mx-auto" width={240} height={258} />
                        </div>
                        <div className="flex-1 bg-[#E1F7E6] p-6 rounded-2xl gap-2 w-[588px] h-[350px]">
                            <h4 className="font-bold mb-2">Airtime & Data Top-Up</h4>
                            <p>Buy airtime and mobile data for yourself or others </p>
                            <p>— instantly and globally.</p>
                            <img src="/airtime.svg" alt="airtime" className="mx-auto" width={290} height={281} />
                        </div>
                    </div>

                    <div className="bg-[#FEF8EE] p-6 rounded-2xl w-full h-[350px] flex items-center justify-between">
                        <div className="flex flex-col justify-between w-[473px] h-[133px] py-6 pl-4">
                            <h4 className="font-bold">Virtual Dollar Card</h4>
                            <p>Shop globally with your own secure virtual dollar</p>
                            <p>card — perfect for subscriptions and online payments.</p>
                        </div>

                        <div className="pr-4">
                            <img src="/card.svg" alt="card" width={395} height={292} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}