import '../styles/Form.css';
import React, { useState } from 'react'

function Form({ setShowForm }) {
    const [closeForm, setCloseForm] = useState(null);
    const changeShow = () => {
        
        setCloseForm(true)
        setTimeout(function(){
            setShowForm(false) }, 2100);
        
    }
    return (
        <>
            <div className={`main-container-form  ${closeForm && 'main-container-formm'}`}>
                <div className='container-for-collapse-button'>
                    <button onClick={changeShow} className='collapse-button'>Collapse the form</button>
                </div>
                <div className='form-and-heading-container'>
                    <h1 className='form-heading'>Please fill in the form</h1>
                    <form className="contact-form">
                        <label className='user-info-label' htmlFor="fname">First and last name:
                            <input type="text" required name="name" />
                        </label>
                        <label className='user-info-label' htmlFor="email">Email:
                            <input type="email" required name="email" />
                        </label>
                        <label className='user-info-label' htmlFor="Phone number">Phone Number:
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required name="number" />
                            <small>Format: xxx-xxx-xxx</small>
                        </label>
                        <label className='user-info-label' htmlFor="Message">Message:
                            <textarea className="user-message" required rows="4" cols="50" type="text" name="message" />
                        </label>
                        <button className='collapse-button'> Send</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default Form;
