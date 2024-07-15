import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <div className="bg-[#0b0931]">
                {/* Footer Area Top */}
                <div className="relative z-10">
                    {/* Footer Top Spacing */}
                    <div className="py-2">
                        {/* Section Container */}
                        <div className="flex justify-center items-center py-5 w-[90%] max-w-[1500px] mx-auto">
                            {/* Section Wrapper */}
                            <div className="flex justify-between items-center w-[90%] max-w-[1400px] mx-auto flex-wrap">
                                {/* Section Block */}
                                <div className="max-w-[600px]">
                                    <h2 className="text-white text-3xl font-bold text-center mb-5">
                                        Ready to grow your business digitally?
                                    </h2>
                                </div>
                                {/* Section Block */}
                                <a className="inline-block py-3 px-6 text-lg font-bold text-center text-white bg-blue-700 rounded-full cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-800 hover:opacity-80" href="/portfolio">
                                    Let's start the project
                                </a>
                            </div>
                            {/* Section Wrapper */}
                        </div>
                        {/* Section Container */}
                    </div>
                    {/* Footer Top Spacing */}
                    {/* CTA Shape */}
                    <div className="absolute right-[9%] top-2 z-[-10] hidden">
                        <img src="assets/img/elements/cta-1-shape-1.svg" alt="cta-1-shape-1" width="115" height="130" />
                    </div>
                </div>
                {/* Footer Area Top */}
                {/* Horizontal Line Separator */}
                <div className="h-[1px] bg-white"></div>
                {/* Horizontal Line Separator */}
                <div className="bg-[#111227] text-white py-10 px-10">
                    <div className="flex justify-center items-center">
                        <div className="w-[90%] max-w-[1500px] mx-auto">
                            <div className="flex justify-between flex-wrap">
                                <div className="w-[25%] mb-5">
                                    <a className="block mb-6" href="/">
                                        <img src="https://masco-html.netlify.app/assets/img/logo-blue-light.png"
                                            alt="Masco" width="109" height="24" />
                                    </a>
                                    <div>
                                        <div className="mb-5 text-lg">
                                            We are a strategic & creative digital agency focused on user
                                            experience, mobile, social, data gathering, and promotional offerings.
                                        </div>
                                        <a href="mailto:yourdemo@email.com" className="block mb-5 text-lg text-white no-underline hover:underline">yourdemo@email.com</a>
                                        <div className="flex">
                                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                                className="mr-2 text-white no-underline hover:text-blue-400" aria-label="twitter">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href="https://www.facebook.com/" target="_blank"
                                                rel="noopener noreferrer" className="mr-2 text-white no-underline hover:text-blue-400" aria-label="facebook">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href="https://www.instagram.com/" target="_blank"
                                                rel="noopener noreferrer" className="mr-2 text-white no-underline hover:text-blue-400" aria-label="instagram">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                            <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer"
                                                className="mr-2 text-white no-underline hover:text-blue-400" aria-label="github">
                                                <i className="fab fa-github"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[25%] mb-5">
                                    <div className="text-lg font-semibold mb-5">
                                        Primary Pages
                                    </div>
                                    <ul className="list-none p-0">
                                        <li className="mb-2"><a href="/" className="text-white no-underline hover:text-blue-400">Home</a></li>
                                        <li className="mb-2"><a href="/about" className="text-white no-underline hover:text-blue-400">About Us</a></li>
                                        <li className="mb-2"><a href="/services" className="text-white no-underline hover:text-blue-400">Services</a></li>
                                        <li className="mb-2"><a href="/pricing" className="text-white no-underline hover:text-blue-400">Pricing</a></li>
                                        <li className="mb-2"><a href="/contact" className="text-white no-underline hover:text-blue-400">Contact</a></li>
                                    </ul>
                                </div>
                                <div className="w-[25%] mb-5">
                                    <div className="text-lg font-semibold mb-5">
                                        Utility Pages
                                    </div>
                                    <ul className="list-none p-0">
                                        <li className="mb-2"><a href="/signup" className="text-white no-underline hover:text-blue-400">Signup</a></li>
                                        <li className="mb-2"><a href="/login" className="text-white no-underline hover:text-blue-400">Login</a></li>
                                        <li className="mb-2"><a href="/error-404" className="text-white no-underline hover:text-blue-400">404 Not Found</a></li>
                                        <li className="mb-2"><a href="/reset-password" className="text-white no-underline hover:text-blue-400">Password Reset</a></li>
                                    </ul>
                                </div>
                                <div className="w-[25%] mb-5">
                                    <div className="text-lg font-semibold mb-5">
                                        Resources
                                    </div>
                                    <ul className="list-none p-0">
                                        <li className="mb-2"><a href="https://www.example.com/" target="_blank"
                                            rel="noopener noreferrer" className="text-white no-underline hover:text-blue-400">Support</a></li>
                                        <li className="mb-2"><a href="https://www.example.com/" target="_blank"
                                            rel="noopener noreferrer" className="text-white no-underline hover:text-blue-400">Privacy Policy</a></li>
                                        <li className="mb-2"><a href="https://www.example.com/" target="_blank"
                                            rel="noopener noreferrer" className="text-white no-underline hover:text-blue-400">Terms & Conditions</a></li>
                                        <li className="mb-2"><a href="https://www.example.com/" target="_blank"
                                            rel="noopener noreferrer" className="text-white no-underline hover:text-blue-400">Strategic Finance</a></li>
                                        <li className="mb-2"><a href="https://www.example.com/" target="_blank"
                                            rel="noopener noreferrer" className="text-white no-underline hover:text-blue-400">Video Guide</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#090911] text-gray-400 py-5">
                    <div className="flex justify-center items-center">
                        <div className="w-[90%] max-w-[1500px] mx-auto text-center">
                            © Copyright 2024, All Rights Reserved by PixcelsThemes
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
