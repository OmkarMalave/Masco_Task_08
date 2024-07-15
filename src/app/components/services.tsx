import React from 'react';

interface Service {
    blackImageUrl: string;
    blueImageUrl: string;
    title: string;
    description: string;
}

const ServiceSection: React.FC = () => {
    const services: Service[] = [
        {
            blackImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-black-service-1.svg',
            blueImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-1.svg',
            title: 'Branding & Digital Strategies',
            description: 'Brand strategy is all about developing a unique identity that distinguishes your business.',
        },
        {
            blackImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-black-service-2.svg',
            blueImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-2.svg',
            title: 'Web Design & App Development',
            description: 'Web design & development is the process of creating a website or application.',
        },
        {
            blackImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-black-service-3.svg',
            blueImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-3.svg',
            title: 'Results-Driven Digital Marketing',
            description: 'Digital marketing reaches potential customers using the internet and digital communication.',
        },
        {
            blackImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-black-service-4.svg',
            blueImageUrl: 'https://masco-html.netlify.app/assets/img/icons/icon-blue-service-4.svg',
            title: 'Custom Software Development',
            description: 'Custom software development involves designing, building, and deploying software tailored to specific needs.',
        },
    ];

    return (
        <section className="py-16 flex justify-center items-center">
            <div className="px-7 py-8 container max-w-8xl mx-7">
                <div className="text-center max-w-lg mx-auto px-6 mb-8">
                    <h2 className="text-3xl font-semibold leading-tight">
                        All the digital services that are convenient for you
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    {services.map((service, index) => (
                        <div key={index} className="group flex p-6 border border-gray-300 bg-white rounded-md shadow transition-transform duration-300 ease-in-out hover:border-gray-400 hover:bg-gray-50 hover:scale-105">
                            <div className="flex-shrink-0 mr-4 relative w-24 h-24">
                                <img src={service.blackImageUrl} alt="service-icon" className="w-full h-full transition-opacity duration-300 ease-in-out group-hover:opacity-0" />
                                <img src={service.blueImageUrl} alt="service-icon" className="absolute inset-0 w-full h-full opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                            </div>
                            <div className="flex-1">
                                <div className="text-lg font-semibold">{service.title}</div>
                                <p className="text-gray-600 mt-2 mb-4">{service.description}</p>
                                <a href="/service-details" className="text-blue-500 font-bold no-underline hover:underline flex items-center">
                                    Find out more
                                    <span className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;
