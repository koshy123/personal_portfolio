import './index.scss'
 
const Contact = () => {
    return (
        <>
        <div className='container contact-page'>
            <h1>Contact Me</h1> 
            <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <ul>
                    <li className='half'>
                        <input placeholder='Name'type="text" name="name" required/>
                    </li>
                    
                </ul>
            </form>
            </div>
        </div>
        </>
    )
}

export default Contact