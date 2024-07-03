import React from 'react';

interface Service {
    imageUrl: string;
    title: string;
    description: string;
}

const ServiceSection: React.FC = () => {
    const services: Service[] = [
        {
            imageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-1.svg',
            title: 'Branding & Digital Strategies',
            description: 'Brand strategy is all about developing a unique identity that distinguishes your business.',
        },
        {
            imageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-2.svg',
            title: 'Web Design & App Development',
            description: 'Web design & development is the process of creating a website or application.',
        },
        {
            imageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-3.svg',
            title: 'Results-Driven Digital Marketing',
            description: 'Digital marketing reaches potential customers using the internet and digital communication.',
        },
        {
            imageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-4.svg',
            title: 'Custom Software Development',
            description: 'Custom software development involves designing, building, and deploying software tailored to specific needs.',
        },
    ];

    return (
        <div className="section-space mt-5 mb-8">
            <div className="container-custom">
                <div className="mb-16 xl:mb-20 jos" data-jos_once="1" data-jos_animation="fade-up"
                    data-jos_timingfunction="ease" data-jos_duration="700" data-jos_delay="500" data-jos_counter="1">
                    <div className="mx-auto max-w-590">
                        <h2 className="text-center text-xl lg:text-2xl font-semibold leading-[1.33] tracking-[0.5px]">
                            All the digital services that are convenient for you
                        </h2>
                    </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="jos" data-jos_delay={index * 0.3} data-jos_once="1" data-jos_animation="fade-up"
                            data-jos_timingfunction="ease" data-jos_duration="700" data-jos_counter="1">
                            <div className="group rounded-[10px] border border-[#E6E6E6] bg-white p-8 transition-all duration-300 ease-in-out hover:border-ColorOffWhite hover:bg-ColorOffWhite lg:p-10 h-full">
                                <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row items-center">
                                    <div className="relative mx-auto flex items-center justify-center w-16 lg:w-98">
                                        <img src={service.imageUrl} alt="service-icon" className="opacity-100 h-auto w-full transition-all duration-300 ease-in-out group-hover:opacity-0" />
                                        <img src={service.imageUrl} alt="service-icon" className="absolute h-auto w-full opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100" />
                                    </div>
                                    <div className="flex-1 text-center lg:text-left">
                                        <div className="mb-4 text-xl lg:text-2xl font-semibold leading-[1.33] tracking-[0.5px] text-ColorBlack">
                                            {service.title}
                                        </div>
                                        <p className="mb-5 text-ColorBlack/80 line-clamp-2">
                                            {service.description}
                                        </p>
                                        <a href="/service-details" className="inline-flex items-center gap-2 text-base font-bold text-ColorBlack group-hover:text-ColorBlue">
                                            Find out more
                                            <span className="transition-all duration-300 ease-in-out group-hover:translate-x-2">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServiceSection;
