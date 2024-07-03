import React from 'react';

const TestimonialSection: React.FC = () => {
    return (
        <section className="section-testimonial mb-10 mt-12">
            <div className="bg-gray-100 mt-12">
                <div className="section-space">
                    <div className="container-custom">
                        <div className="jos mb-12 xl:mb-20">
                            <div className="mx-auto max-w-[625px]">
                                <h2 className="text-4xl font-bold text-center mt-4">
                                    Most of our satisfied clients leave their feedback
                                </h2>
                            </div>
                        </div>

                        <div className="grid items-center gap-10 lg:grid-cols-2 xl:gap-20 xxl:grid-cols-[1.1fr_minmax(0,_1fr)]">
                            <img
                                src="https://masco-html.netlify.app/assets/img/th-1/testimonial-image-1.jpg"
                                alt="testimonial-image-1"
                                width="636"
                                height="446"
                                className="jos h-auto w-full rounded-2xl"
                                data-jos_animation="fade-right"
                            />
                            <div className="jos flex flex-col text-gray-900" data-jos_animation="fade-left">
                                <p className="mt-8 text-xl font-semibold leading-8 lg:text-2xl">
                                    They’re probably one of the easiest vendors I’ve ever worked with in the digital
                                    space. They have our best interests in mind. The team went the extra mile in
                                    negotiating costs and delivering within a flexible scope. They’re customer focused
                                    and strong in terms of development quality.
                                </p>
                                <div className="mt-8 mb-8 lg:mb-12">
                                    <span className="block text-xl font-semibold">Dominika Drońska</span>
                                    <span className="block">Senior Digital Marketing Manager, Abbey Road Studios</span>
                                </div>
                                <a
                                    href="/portfolio-details"
                                    className="group text-base font-bold capitalize leading-8 hover:text-blue-600"
                                >
                                    Read more reviews{' '}
                                    <span className="inline-block transition-all duration-150 group-hover:translate-x-2">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
