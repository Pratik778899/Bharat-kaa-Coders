import React from 'react'


const Contactus = () => {
    return (
        <div className='flex justify-center'>
             <div className="glow-round"></div>
            <div className='flex justify-center md:mt-14 mt-9 '>
                <div className='md:w-4/5 w-11/12 flex flex-col gap-4 md:gap-8'>
                <div>
                    <h2 className='text-2xl md:text-4xl font-semibold small-text-grade whitespace-nowrap'>Get in Touch</h2>
                    <p className='text-white md:text-xl text-sm'>We'd love to hear from you! Whether you have a
                        question, suggestion, or just want to say hello, our team is here to assist you.</p>
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold small-text-grade whitespace-nowrap '>Reach Out</h1>
                    <div className='text-white md:text-xl text-sm'>

                    <p>Email: contact@yourcompanyname.com </p>
                    <p>  Phone: +1 (123) 456-7890 </p>
                    <p>  Address: [Your Company/Game Name], 123 Coding Avenue, City, State, Zip Code</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-2xl md:text-4xl font-semibold small-text-grade whitespace-nowrap'>Connect With Us</h1>
                    <div className='text-white md:text-xl text-sm'>

                    <p>Follow us on social media for the latest updates, challenges,
                        and community events. Join the conversation and be part of our growing community!</p>
                    <p>Twitter: @YourCompanyHandle</p>
                    <p>Facebook: /YourCompanyPage</p>
                    <p>Instagram: @YourCompanyOfficial</p>

                    <p>Feel free to use, modify, or personalize these texts to better fit your
                        company or game! Incorporating your brand's voice and specific
                        details will make these pages more authentic and engaging for your audience.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="glow-round-right"></div>
        </div>
    )
}

export default Contactus
