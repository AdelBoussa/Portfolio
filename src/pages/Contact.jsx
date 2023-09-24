import React from 'react';
import '../App.css'
import ContactForm from '../components/ContactForm.jsx';

function Contact() {
  

  return (
    <>

        <section class="contact-section" id='contact'>
          <div className="contact-title"><h1>Contact</h1></div>
            <p>Feel free to contact me for any questions or opportunities.</p>
            <ContactForm />
        </section>
    </>
  )
}

export default Contact