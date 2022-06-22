import '../styles/Form.css';
function Form({ setShowForm }) {
    const changeShow = () => {
        setShowForm(false)
    }
    return (
        <>
            <div className="main-container-form">
                <div className='container-for-collapse-button'>
                    <button onClick={changeShow} className='collapse-button'>Collapse the form</button>
                </div>
                <div className='form-and-heading-container'>
                    <h1 className='form-heading'>Please fill in the form</h1>
                    <form class="contact-form">
                        <label className='user-info-label' for="fname">First and last name:
                        <input type="text" required name="name" />
                        </label>
                        <label className='user-info-label' for="email">Email:
                        <input type="email" required name="email" />
                        </label>
                        <label className='user-info-label' for="Phone number">Phone Number:
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}" required name="number" />
                        <small>Format: xxx-xxx-xxx</small>
                        </label>
                        <label className='user-info-label' for="Message">Message:
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
