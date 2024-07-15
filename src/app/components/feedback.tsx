import React from 'react';

const Feedback = () => {
    return (
        <div className="feedback-container bg-white p-8 rounded-lg max-w-8xl mx-auto mb-8">
            <div className="feedback-inner-container flex flex-col gap-4">
                <div className="feedback-heading text-4xl font-bold text-center py-6">
                    Most of our satisfied clients leave their feedback
                </div>
                <div className="feedback-content flex flex-col md:flex-row md:gap-8 items-center">
                    <div className="feedback-photo md:w-1/2 overflow-hidden rounded-lg">
                        <img src="https://masco-html.netlify.app/assets/img/th-1/testimonial-image-1.jpg" alt="Client Photo" className="w-full" />
                    </div>
                    <div className="feedback-text md:w-1/2">
                        <p className="text-lg font-semibold leading-relaxed">
                            "They're probably one of the easiest vendors I've ever worked with in the digital space. They have our best interests in mind. The team went the extra mile in negotiating costs and delivering within a flexible scope. They're customer focused and strong in terms of development quality."
                        </p>
                        <p className="text-base font-semibold mt-4"><strong>Dominika Drońska</strong></p>
                        <p className="text-base">Senior Digital Marketing Manager, Abbey Road Studios</p>
                        <a href="#" className="text-blue-700 hover:underline mt-2">Read More Reviews →</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
