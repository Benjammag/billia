import Hero from '@/components/hero/page';
import Service from '@/components/services/page';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="bg-gray-50 text-[#1F1F1F]">
      <Hero />
      <Service />
      {/* AI Section */}
      <section className="px-6 bg-[#FF3B301A] py-10 flex flex-col md:flex-row items-center md:items-start gap-20 max-w-7xl mx-auto m-10 my-14">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <Image src="/bot.svg" alt="Billia Bot" width={355.5} height={448.6} />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          <h3 className="text-2xl font-semibold mb-2">
            Introducing Billia AI: Smarter, Faster, Personal
          </h3>
          <p className="mb-4">
            From paying school fees to buying airtime or electricity, Billia AI makes every
            payment smarter, faster, and stress free — just by asking.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <Image src="/bullet-1.svg" alt="Check" width={20} height={20} />
              <span>Pay Bill By Typing a Command</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/bullet-2.svg" alt="Repeat" width={20} height={20} />
              <span>One-Tap Repeats</span>
            </li>
            <li className="flex items-center gap-2">
              <Image src="/bullet-3.svg" alt="Chat" width={20} height={20} />
              <span>In-App Chat Assistance</span>
            </li>
          </ul>
          <button className="mt-6 w-[201px] h-[45px] bg-orange-500 text-white px-5 py-2.5 rounded-3xl hover:bg-orange-600 transition">
            Try it Now
          </button>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-6 py-12">
        <div className="w-full max-w-[1004px] h-[475px] gap-20 mx-auto">
          <div>
            <Image
              className="justify-self-center py-1 px-3"
              src="/testimonials.svg"
              alt="testimony"
              width={83}
              height={23}
            />
            <h3 className="text-2xl font-semibold text-center mb-8">What Our Customers Say</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 w-full h-[312px]">
            <div className="bg-white text-black p-6 rounded-lg">
              <Image
                className="justify-self-center py-1 px-3"
                src="/testimony-1.svg"
                alt="testimony"
                width={492}
                height={312}
              />
            </div>
            <div className="bg-white text-black p-6 rounded-lg">
              <Image
                className="justify-self-center py-1 px-3"
                src="/testimony-2.svg"
                alt="testimony"
                width={492}
                height={312}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Download Section */}
      <section className="px-6 py-12 bg-[#FFF8F3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Text + Buttons */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <div className="w-full h-[224px] flex flex-col justify-start gap-2 pl-4">
              <h3 className="text-2xl font-semibold">Download Billia</h3>
              <h3 className="text-2xl font-semibold">Today</h3>
              <p className="mb-1 text-gray-600">
                Fast payments, smart reminders, and secure wallet
              </p>
              <p>tools — all inside Billia</p>
            </div>

            <div className="flex gap-5 mb-6 pl-4">
              <Image src="/play-store.svg" alt="Google Play" width={150} height={50} />
              <Image src="/app-store.svg" alt="App Store" width={150} height={50} />
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/phones.svg" alt="Phones" width={300} height={300} />
          </div>
        </div>
      </section>

    </main>
  );
}
