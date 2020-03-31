import React from 'react'


const Contact = () => (
    <section id="contact" className="contact">
         <h2>CONTACT</h2>
         <p>Have any questions or wish to work together?</p>
         <form className="contact__form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="contact" />
                <p class="contact__hidden">
                    <label>Don’t insert: <input name="bot-field" /></label>
                </p>
                <label htmlFor="name" className="contact__label">NAME</label>
                <input className="contact__input" type="text" name="name" />  
                <label htmlFor="email" className="contact__label">EMAIL</label> 
                <input className="contact__input" type="email" name="email" />
                <label htmlFor="message" className="contact__label">MESSAGE</label>
                <textarea className="contact__input contact__input--area" name="message"></textarea>
                <button className="contact__button" type="submit">Send</button>
        </form>
    </section>
)

export default Contact
