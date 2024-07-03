import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 mt-10 mb-3">
            <div className=" mt-3 mb-2">
                <h1 className="text-white uppercase mb-4 text-center font-bold text-4xl ">
                    Ready to grow your business digitally?
                </h1>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="mb-8">
                        <a href="#pablo">
                            <h5 className="text-white uppercase mb-4">Material Kit PRO</h5>
                        </a>
                        <p className="text-gray-400">
                            Probably the best UI Kit in the world! We know you've been
                            waiting for it, so don't be shy!
                        </p>
                    </div>
                    <div className="mb-8">
                        <h5 className="text-white uppercase mb-4">About</h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Presentation
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h5 className="text-white uppercase mb-4">About</h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Sales FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    How to register
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Sell Goods
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Receive Payment
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Transactions Issues
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h5 className="text-white uppercase mb-4">About</h5>
                        <ul className="space-y-2">
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Transactions FAQ
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Terms & conditions
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-400 hover:text-blue-500">
                                    Licenses
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-white py-6">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#pablo" className="text-gray-500 hover:text-blue-500">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-500 hover:text-blue-500">
                                    <i className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-500 hover:text-blue-500">
                                    <i className="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-500 hover:text-blue-500">
                                    <i className="fab fa-google-plus-g"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#pablo" className="text-gray-500 hover:text-blue-500">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-6">
                        <p className="text-center text-gray-600 text-sm">
                            Copyright &copy; {new Date().getFullYear()}{" "}
                            <a href="https://www.creative-tim.com" className="hover:text-blue-500">Creative Tim</a> All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
