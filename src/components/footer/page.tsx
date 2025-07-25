import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="text-white w-full pt-14 pb-10"
            style={{
                background: 'linear-gradient(rgba(242, 130, 17, 1), rgba(201, 49, 6, 1))',
            }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-28 flex flex-col gap-12">
                {/* Top Footer Grid */}
                <div className="grid md:grid-cols-4 gap-12">
                    {/* Logo and Description */}
                    <div className="flex flex-col gap-4">
                        <Image src="/logo-2.svg" alt="second logo" width={181.6} height={75} />
                        <p className="text-sm leading-snug">
                            Our all-in-one app for bills, airtime, data, and smart payments — powered by Billia AI.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a href="#"><Image src="/facebook.svg" alt="Facebook" width={24} height={20} /></a>
                            <a href="#"><Image src="/insta.svg" alt="Instagram" width={20} height={20} /></a>
                            <a href="#"><Image src="/twitter.svg" alt="Twitter" width={22} height={22} /></a>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h5 className="font-semibold mb-2">Company</h5>
                        <ul className="text-sm space-y-1">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="#">Features</Link></li>
                            <li><Link href="#">Testimonials</Link></li>
                            <li><Link href="#">Services</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h5 className="font-semibold mb-2">Legal</h5>
                        <ul className="text-sm space-y-1">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h5 className="font-semibold mb-2">Contact Us</h5>
                        <p className="text-sm">BilliaAI@gmail.com</p>
                        <p className="text-sm">08023437727</p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white pt-4 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p>© 2025 Billia Technologies. All rights reserved.</p>
                    <p>Product of SmartRob Technologies Limited</p>
                </div>
            </div>
        </footer>
    );
}
