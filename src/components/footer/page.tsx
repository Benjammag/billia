import Image from 'next/image';

export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="text-white gap-3 pt-14 py-10 w-full h-[474px] top-[4173px]" style={{
                background: 'linear-gradient( rgba(242, 130, 17, 1), rgba(201, 49, 6, 1))',
            }}>
                <div className="w-full h-[414px] gap-24">
                    <div className="grid md:grid-cols-4 gap-24 w-full h-[230px] justify-between px-28">
                        <div className="w-[389px] h-[183px] gap-6">
                            <div className='gap-3'>
                                <Image src="/logo-2.svg" alt="second logo" width={181.6} height={75} />
                                <p className="text-sm">Our all-in-one app for bills, airtime, data, and smart payments — powered by Billia AI.</p>
                            </div>
                            <div className="flex mt-2 gap-5">
                                <a href="#"><Image src="/facebook.svg" alt="App Store" width={24} height={20} /></a>
                                <a href="#"><Image src="/insta.svg" alt="App Store" width={20} height={20} /></a>
                                <a href="#"><Image src="/twitter.svg" alt="App Store" width={22} height={22} /></a>
                            </div>
                        </div>
                        <div className="w-[101px] h-full gap-4">
                            <h5 className="font-semibold mb-2">Company</h5>
                            <ul className="text-sm space-y-1">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Features</a></li>
                                <li><a href="#">Testimonials</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                        <div className='w-[132px] h-[110px]'>
                            <h5 className="font-semibold mb-2">Legal</h5>
                            <ul className="text-sm space-y-1">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div className='w-[169px] h-[110px] gap-4'>
                            <h5 className="font-semibold mb-2">Contact Us</h5>
                            <p className="text-sm">BilliaAI@gmail.com</p>
                            <p className="text-sm">08023437727</p>
                        </div>
                    </div>
                    <div className="w-full max-w-[1208px] mx-auto px-6">
                        <div className="flex justify-between items-center border-t border-white pt-2">
                            <p className="text-xs">© 2025 Billia Technologies. All rights reserved.</p>
                            <p className="text-xs">Product of SmartRob Technologies Limited</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>);
}