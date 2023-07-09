import React, { useRef, useState } from 'react';
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap} from 'react-icons/fa';
import shapeOne from '../../assets/shape-1.png';
import './contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qwyiewi', 'template_v3htq3q', form.current, 'EYdk4KX7wlFCT4pz_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
  }

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title text-cs">Contact Us</h2>
        <p className="section__subtitle">
            Let's <span>Talk About Ideas</span>
        </p>

        <div className="contact__container container grid">
            <div className="contact__content">
                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className="contact__card-title">Get in touch</h3>
                    <p className="contact__card-date">Available Right Now</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-date"><a href="mailto:techlooop1@gmail.com">techlooop1@gmail.com</a></p>
                </div>
            </div>

            <form className="contact__form" ref={form} onSubmit={sendEmail} >
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="conact__form-tag text-cs">Full Name <b>*</b></label>
                        <input type="text" name='from_name'  className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="conact__form-tag text-cs">Email <b>*</b></label>
                        <input type="email" name='from_email' className="contact__form-input" />
                    </div>
                </div>

                <div className="contact__form-div">
                    <label className="conact__form-tag text-cs">Subject <b>*</b></label>
                    <input type="text" name='from_subject' className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="conact__form-tag text-cs" >Leave A Message... <b>*</b></label>
                    <textarea className="contact__form-input" name='from_message'></textarea>
                </div>

                <div className="contact__submit">
                    <p>*We would get back to you soonest!.</p>
                    <input type="submit" className='btn text-cs'  value="Send Message"/>
                    {/* <button type='submit' >Send Message</button> */}
                </div>
            </form>
        </div>

        <div className="section__deco deco__left">
            <img src={shapeOne} alt="" className='shape' />
        </div>

        <div className="section__bg-wrapper">
            <span className="bg__title">Contact Us</span>
        </div>
    </section>
  )
}

export default Contact