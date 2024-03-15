import React from 'react';

const Contact = () => {
    return (
        <div className="bg-[#F4EEFF] py-10">
            <div className="container mx-auto h-full mt-20">
                <h2 className="text-3xl font-semibold text-[#424874] text-center mb-6">Contact Us</h2>
                <form className="max-w-lg mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-[#424874] text-lg font-medium mb-2">Your Name</label>
                        <input type="text" id="name" name="name" className="border border-[#DCD6F7] rounded px-3 py-2 w-full focus:outline-none" placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-[#424874] text-lg font-medium mb-2">Your Email</label>
                        <input type="email" id="email" name="email" className="border border-[#DCD6F7] rounded px-3 py-2 w-full focus:outline-none" placeholder="Enter your email" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-[#424874] text-lg font-medium mb-2">Message</label>
                        <textarea id="message" name="message" className="border border-[#DCD6F7] rounded px-3 py-2 w-full h-32 resize-none focus:outline-none" placeholder="Enter your message"></textarea>
                    </div>
                    <button type="submit" className="bg-[#A6B1E1] text-white px-4 py-2 rounded hover:bg-[#7881aa]">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
