import React, { useState } from 'react';
import {FaRegAddressBook, FaRegEnvelope, FaRegUser, FaRegMap} from 'react-icons/fa';
import './contact.css'
import axios from 'axios';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '', 
        subject: '',
        message: '',
    });

    const handleChange =(e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(
            'https://sheet.best/api/sheets/469c3ffb-48fc-4b14-aadd-ba3b642bd2ed',
             form 
             ).then((response) => {
                console.log(response)
                // clear the form
                setForm({name: '', email: '', subject: '', message: ''});
             });
    };

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
                        <FaRegMap />
                    </span>

                    <h3 className="contact__card-title">Address</h3>
                    <p className="contact__card-date">Lagos, Lagos, Nigeria</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegUser />
                    </span>

                    <h3 className="contact__card-title">Freelance</h3>
                    <p className="contact__card-date">Available Right Now</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegEnvelope />
                    </span>

                    <h3 className="contact__card-title">Email</h3>
                    <p className="contact__card-date">techloop@info.com</p>
                </div>

                <div className="contact__card">
                    <span className="contact__card-icon">
                        <FaRegAddressBook />
                    </span>

                    <h3 className="contact__card-title">Phones</h3>
                    <p className="contact__card-date">000-111-2222</p>
                </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-group grid">
                    <div className="contact__form-div">
                        <label className="conact__form-tag text-cs">Full Name <b>*</b></label>
                        <input type="text" name='name' onChange={handleChange} value={form.name} className="contact__form-input" />
                    </div>

                    <div className="contact__form-div">
                        <label className="conact__form-tag text-cs">Email <b>*</b></label>
                        <input type="email" name='email' onChange={handleChange} value={form.email} className="contact__form-input" />
                    </div>
                </div>

                <div className="contact__form-div">
                    <label className="conact__form-tag text-cs">Subject <b>*</b></label>
                    <input type="text" name='subject' onChange={handleChange} value={form.subject} className="contact__form-input" />
                </div>

                <div className="contact__form-div contact__form-area">
                    <label className="conact__form-tag text-cs" >Leave A Message... <b>*</b></label>
                    <textarea className="contact__form-input" name='message' onChange={handleChange} value={form.message}></textarea>
                </div>

                <div className="contact__submit">
                    <p>*Accept the terms and conditions.</p>
                    <button type='submit' className='btn text-cs'>Send Message</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact