import React from 'react';

const ContentSection: React.FC = () => {
    return (
        <div className="section-space">
            <div className="container-custom">
                <div className="flex flex-col gap-y-20 lg:gap-y-[100px] xl:gap-y-[120px]">
                    {/* Content Area Single */}
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1.2fr_minmax(0,_1fr)] xl:gap-[135px]">
                        {/* Content Block Left */}
                        <div className="jos" data-jos_animation="fade-right" data-jos_once="1" data-jos_timingfunction="ease"
                            data-jos_duration="700" data-jos_delay="500" data-jos_counter="1">
                            <div>
                                <div className="mb-5">
                                    <h2 className="text-xl lg:text-2xl">
                                        Boost the effectiveness of your promotions as well as polish your branding
                                    </h2>
                                </div>
                                <p>
                                    SINCE 1998, we transform bold business ideas into exceptional digital products. We
                                    ideate, design, and develop data-driven digital products made to answer business
                                    challenges.
                                </p>
                                <p>
                                    We offer 360° services to smoothly guide you on your way to creating a seamless
                                    digital masterpiece projects on budget and on time.
                                </p>
                            </div>
                        </div>
                        {/* Content Block Left */}
                        {/* Content Block Right */}
                        <div className="relative jos" data-jos_animation="fade-left" data-jos_once="1"
                            data-jos_timingfunction="ease" data-jos_duration="700" data-jos_delay="500"
                            data-jos_counter="1">
                            <div className="rounded-[10px] bg-[#FCEDCF] p-[30px] lg:p-10 xl:p-[50px]">
                                <img src="https://masco-html.netlify.app/assets/img/th-1/content-img-1.jpg"
                                    alt="content-img-1" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                            </div>
                        </div>
                        {/* Content Block Right */}
                    </div>
                    {/* Content Area Single */}

                    {/* Content Area Single */}
                    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-24 xl:grid-cols-[1fr_minmax(0,_1.2fr)] xl:gap-[135px]">
                        {/* Content Block Left */}
                        <div className="lg:order-2 jos" data-jos_animation="fade-left" data-jos_once="1"
                            data-jos_timingfunction="ease" data-jos_duration="700" data-jos_delay="500"
                            data-jos_counter="1">
                            <div>
                                <div className="mb-5">
                                    <h2 className="text-xl lg:text-2xl">
                                        Discover the latest digital strategies &amp; emerging ideas for business growth
                                    </h2>
                                </div>
                                <p>
                                    Our brand tenders and marketing mixologists always serve up unique,
                                    design-forward websites coded with today’s modern technologies
                                </p>
                                <ul className="flex flex-col gap-5 font-semibold text-ColorBlack">
                                    <li className="flex items-start">
                                        <span className="mr-3 inline-block text-xl text-ColorBlue"><i
                                            className="fa-solid fa-badge-check"></i></span>
                                        <span>Reach new business opportunities or test your product ideas.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 inline-block text-xl text-ColorBlue"><i
                                            className="fa-solid fa-badge-check"></i></span>
                                        <span>Automate your processes and get data-driven business insights.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="mr-3 inline-block text-xl text-ColorBlue"><i
                                            className="fa-solid fa-badge-check"></i></span>
                                        <span>Create lightweight, scalable, and easily accessible cloud solutions.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Content Block Left */}
                        {/* Content Block Right */}
                        <div className="relative lg:order-1 jos" data-jos_animation="fade-right" data-jos_once="1"
                            data-jos_timingfunction="ease" data-jos_duration="700" data-jos_delay="500"
                            data-jos_counter="1">
                            <div className="rounded-[10px] bg-[#BEF8FC] p-[30px] lg:p-10 xl:p-[50px]">
                                <img src="https://masco-html.netlify.app/assets/img/th-1/content-img-2.jpg"
                                    alt="content-img-2" width="426" height="398" className="h-auto w-full rounded-[10px]" />
                            </div>
                        </div>
                        {/* Content Block Right */}
                    </div>
                    {/* Content Area Single */}
                </div>
            </div>
            {/* Section Container */}
        </div>
    );
}

export default ContentSection;
