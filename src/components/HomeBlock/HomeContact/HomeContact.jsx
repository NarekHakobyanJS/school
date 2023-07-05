import React, {useRef} from 'react'
import emailjs from '@emailjs/browser';
import './HomeContact.css';
import contact from '../../../assets/img/c.svg';
import { forwardRef } from 'react';

const HomeContact = ({}, ref) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_or6cmr3', 'template_nw3jtfz', form.current, 'Oj3Yiwfd0qXpS62Dl')
            .then((result) => {
                console.log(result.text);
                console.log('message send');
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='home-contact' ref={ref}>
            <h1 className='home-contact-title'>Հետադարձ կապ...</h1>
            <p className='home-contact-subtitle'>Մենք շատ ենք կարևորում մեր հաճախորդների կարծիքները</p>
            <div className='home-contact-block'>
                <div className='home-contact-block-left'>
                    <img src={contact} width={600} />
                </div>
                <div className='home-contact-block-right'>
                    <form ref={form} onSubmit={sendEmail} className="contacts-form">
                        <label>Name</label>
                        <input type="text" name="user_name" />
                        <label>Email</label>
                        <input type="email" name="user_email" />
                        <label>Message</label>
                        <textarea name="message" />
                        <input type="submit" value="Send" className='contact-btn'/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default forwardRef(HomeContact)