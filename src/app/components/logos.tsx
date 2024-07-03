import React from 'react';

const BrandSliderSection: React.FC = () => {
    return (
        <div className="py-16 md:py-20 lg:py-32 bg-gray-100">
            <div className="container mx-auto">
                <div className="mb-10 text-center text-xl font-semibold leading-[1.4] opacity-70 md:mb-16 lg:mb-20 lg:max-w-2xl">
                    From start-ups to Fortune 500, we partner with brands of all sizes
                </div>
                <div className="swiper brand-slider swiper-initialized swiper-horizontal swiper-backface-hidden">
                    <div className="swiper-wrapper" id="swiper-wrapper-be612a60d336c847">
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/brand-4.png"
                                alt="brand-1"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/brand-3.png"
                                alt="brand-2"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/brand-1.png"
                                alt="brand-3"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/brand-4.png"
                                alt="brand-4"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/brand-2.png"
                                alt="brand-5"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="assets/img/th-1/brand-1.png"
                                alt="brand-1"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide swiper-slide-prev" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="assets/img/th-1/brand-2.png"
                                alt="brand-2"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide swiper-slide-active" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="assets/img/th-1/brand-3.png"
                                alt="brand-3"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide swiper-slide-next" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="assets/img/th-1/brand-4.png"
                                alt="brand-4"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                        <div className="swiper-slide" style={{ width: 235, marginRight: 90 }}>
                            <img
                                src="assets/img/th-1/brand-5.png"
                                alt="brand-5"
                                width="186"
                                height="46"
                                className="h-auto w-fit"
                            />
                        </div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>
    );
};

export default BrandSliderSection;
