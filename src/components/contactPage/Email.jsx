import React, {useState} from 'react';
import Image from "../../assets/contact-us.png";
import "./Email.css";
import * as emailjs from 'emailjs-com';

export default function Email() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onNameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const onMessageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    const resetForm = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = {
            from_name: name,
            from_email: email,
            to_name: 'contact@mvsr.acm.org',
            message_html: message,
        }

        emailjs.send(
            'gmail',
            `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`,
            formData,
            `${process.env.REACT_APP_EMAILJS_USER_ID}`
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

    }

    return (
        <div className="email">
            <h1>Contact Us</h1>
            <img src={Image} className="illustration" alt=""/>
            <form onSubmit={e => onSubmit(e)} className="form">
                <div className="eachInput">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                        name="name"
                        id="name"
                        placeholder="Enter your Name"
                        type="text"
                        value={name}
                        onChange={(e) => onNameChangeHandler(e)}
                    />
                </div>
                <div className="eachInput">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input
                        name="email"
                        id="email"
                        placeholder="Enter your Email"
                        type="text"
                        value={email}
                        onChange={(e) => onEmailChangeHandler(e)}
                    />
                </div>
                <div className="eachInput">
                    <label htmlFor="message">
                        Message
                    </label>
                    <textarea
                        rows={5}
                        name="email"
                        id="email"
                        placeholder="Enter your Message"
                        value={message}
                        onChange={(e) => onMessageChangeHandler(e)}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}