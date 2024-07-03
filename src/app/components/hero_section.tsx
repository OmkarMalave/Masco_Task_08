import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-gray-100 py-20 md:py-36 lg:py-40 xl:py-44">
            <div className="container mx-auto px-4">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-[1.1fr_minmax(0,_1fr)]">
                    <div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold">
                            We focus on growing your brand online
                        </h1>
                        <p className="mb-6">
                            Build world-class digital products with a team of design, development & strategy experts. All in one
                            place. We can provide your business with a variety of digital solutions.
                        </p>
                        <form
                            action="#"
                            method="post"
                            className="relative flex items-center w-full sm:w-4/5 lg:w-auto lg:mt-5 lg:max-w-md"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-3 px-5 pr-40 rounded-full border border-black outline-none text-opacity-50"
                            />
                            <button
                                type="submit"
                                className="absolute right-1 py-2 px-4 bg-blue-500 text-white rounded-full"
                            >
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-5 text-sm flex items-center">
                            <span className="mr-2 text-lg text-blue-500">
                                <i className="fas fa-badge-check"></i>
                            </span>
                            <span className="opacity-50">
                                No credit card is required. You can cancel anytime
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center justify-center relative">
                        <img
                            src="https://masco-html.netlify.app/assets/img/th-1/hero-img.jpg"
                            alt="hero image"
                            className="w-full h-auto max-w-lg"
                        />
                        <a
                            href="https://www.youtube.com/watch?v=3nQNiWdeH2Q"
                            className="absolute flex items-center justify-center w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-white text-blue-500 rounded-full"
                            aria-label="video-play"
                        >
                            <span className="text-2xl">
                                <i className="fas fa-play"></i>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
