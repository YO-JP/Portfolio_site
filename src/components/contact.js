import React from 'react'


const Contact = () => (
    <section id="contact" className="contact">
         <h2>CONTACT</h2>
         <p>Have any questions or wish to work together?</p>
         <form className="contact__form" name="contact" method="POST" data-netlify="true">
                <label className="contact__label">NAME</label>
                <input className="contact__input" type="text" name="name" />  
                <label className="contact__label">EMAIL</label> 
                <input className="contact__input" type="email" name="email" />
                <label className="contact__label">MESSAGE</label>
                <textarea className="contact__input contact__input--area" name="message"></textarea>
                <button className="contact__button" type="submit">Send</button>
        </form>
    </section>
)

export default Contact
