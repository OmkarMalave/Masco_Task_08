// import React, { useState } from 'react';
import a from 'next/link';

const Header: React.FC = () => {
    // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <header className=" top-0 left-2 right-0 bg-gradient-to-r from-teal-100 to-white py-5 px-3 z-50" id="sticky-menu">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between gap-x-8">
                    <a href="/">
                        <a>
                            <img
                                src="https://masco-html.netlify.app/assets/img/logo-blue-dark.png"
                                alt="Masco"
                                width="109"
                                height="24"
                            />
                        </a>
                    </a>

                    {/* Header Navigation */}
                    <div className="hidden lg:flex">
                        <nav className="flex space-x-6">
                            <div className="relative group">
                                <a href="#" className="nav-a-item">
                                    Demo <i className="fa-solid fa-angle-down ml-1"></i>
                                </a>
                                <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                    {[
                                        { href: '/', label: 'Digital agency' },
                                        { href: '/index-2', label: 'Chat software' },
                                        { href: '/index-3', label: 'Fitness App' },
                                        { href: '/index-4', label: 'Online Courses' },
                                        { href: '/index-5', label: 'SEO Agency' },
                                        { href: '/index-6', label: 'Cold Email' },
                                        { href: '/index-7', label: 'Web Hosting' },
                                        { href: '/index-8', label: 'Startup' },
                                        { href: '/index-9', label: 'Tracking Software' },
                                        { href: '/index-10', label: 'AI Writing Tool' },
                                        { href: '/index-11', label: 'Website Builder' },
                                        { href: '/index-12', label: 'AI Photo Editor' },
                                        { href: '/index-13', label: 'Initial Coin Offering (ICO)' },
                                        { href: '/index-14', label: 'AI Content Generator' },
                                        { href: '/index-15', label: 'IT Service' },
                                    ].map((item) => (
                                        <li key={item.href} className="p-2 hover:bg-gray-100">
                                            <a href={item.href}>
                                                <a>{item.label}</a>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <a href="/about">
                                <a className="nav-a-item">About</a>
                            </a>
                            <div className="relative group">
                                <a href="#" className="nav-a-item">
                                    Services <i className="fa-solid fa-angle-down ml-1"></i>
                                </a>
                                <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                    <li className="p-2 hover:bg-gray-100">
                                        <a href="/services">
                                            <a>Services</a>
                                        </a>
                                    </li>
                                    <li className="p-2 hover:bg-gray-100">
                                        <a href="/service-details">
                                            <a>Service Details</a>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative group">
                                <a href="#" className="nav-a-item">
                                    Pages <i className="fa-solid fa-angle-down ml-1"></i>
                                </a>
                                <ul className="absolute left-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Blogs <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            <li className="p-2 hover:bg-gray-100">
                                                <a href="/blog">
                                                    <a>Blogs</a>
                                                </a>
                                            </li>
                                            <li className="p-2 hover:bg-gray-100">
                                                <a href="/blog-details">
                                                    <a>Blog Details</a>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Team <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            <li className="p-2 hover:bg-gray-100">
                                                <a href="/teams">
                                                    <a>Teams</a>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            FAQ <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            {['FAQ-1', 'FAQ-2', 'FAQ-3', 'FAQ-4'].map((item, index) => (
                                                <li key={index} className="p-2 hover:bg-gray-100">
                                                    <a href={`/faq-${index + 1}`}>
                                                        <a>{item}</a>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Portfolio <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            {[
                                                { href: '/portfolio', label: 'Portfolio Classic' },
                                                { href: '/portfolio-2', label: 'Portfolio Masonry' },
                                                { href: '/portfolio-3', label: 'Portfolio Modern' },
                                                { href: '/portfolio-4', label: 'Portfolio Minimal' },
                                                { href: '/portfolio-details', label: 'Portfolio Details' },
                                            ].map((item) => (
                                                <li key={item.href} className="p-2 hover:bg-gray-100">
                                                    <a href={item.href}>
                                                        <a>{item.label}</a>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Pricing <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            {['Pricing-1', 'Pricing-2'].map((item, index) => (
                                                <li key={index} className="p-2 hover:bg-gray-100">
                                                    <a href={`/pricing-${index + 1}`}>
                                                        <a>{item}</a>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Careers <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            <li className="p-2 hover:bg-gray-100">
                                                <a href="/careers">
                                                    <a>Career</a>
                                                </a>
                                            </li>
                                            <li className="p-2 hover:bg-gray-100">
                                                <a href="/career-details">
                                                    <a>Career Details</a>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="relative group">
                                        <a href="#" className="p-2 hover:bg-gray-100">
                                            Utilities <i className="fa-solid fa-angle-right ml-1"></i>
                                        </a>
                                        <ul className="absolute left-full top-0 mt-2 hidden bg-white shadow-lg rounded-md group-hover:block">
                                            {[
                                                { href: '/login', label: 'Login' },
                                                { href: '/signup', label: 'Signup' },
                                                { href: '/reset-password', label: 'Reset Password' },
                                                { href: '/coming-soon', label: 'Coming Soon' },
                                                { href: '/error-404', label: 'Error 404' },
                                            ].map((item) => (
                                                <li key={item.href} className="p-2 hover:bg-gray-100">
                                                    <a href={item.href}>
                                                        <a>{item.label}</a>
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    {/* Header Navigation */}

                    {/* Header User Event */}
                    <div className="hidden lg:flex             items-center gap-6">
                        <a href="/login">
                            <a className="hover:text-blue-600">Login</a>
                        </a>
                        <a href="/signup">
                            <a className="btn bg-blue-600 text-white rounded-full py-4 px-9 transition duration- ease-in-out hover:bg-blue-700 transform hover:scale-105">
                                Sign up free
                            </a>
                        </a>
                    </div>

                    {/* <div className="lg:hidden">
                        <button
                            id="openBtn"
                            className="hamburger-menu mobile-menu-trigger"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div> */}
                </div>
            </div>




        </header>
    );
};

export default Header;

