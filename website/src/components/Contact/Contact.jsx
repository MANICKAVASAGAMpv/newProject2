import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/edusity_assets/msg-icon.png'
import mail_icon from '../../assets/edusity_assets/mail-icon.png'
import phone_icon from '../../assets/edusity_assets/phone-icon.png'
import location_icon from '../../assets/edusity_assets/location-icon.png'
import white_arrow from '../../assets/edusity_assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(event.target)
    const formData = new FormData(event.target);

    formData.append("access_key", "3965091f-26ff-4130-bccb-971f0e4fc0a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
        <div className="contact">
            <div className="contact-col">
              <h3>Send us a message <img src={msg_icon} alt="" /></h3>
              <p>
                Feel free to reach out through contact form or find our contact informatiom
                below. Your feedback, questions and suggestions are important to us as We
                strive to provide exceptional service to our university community
              </p>
              <ul>
                <li><img src={mail_icon} alt="" />Contact-manickvasagam3@gmail.com</li>
                <li> <img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li> <img src={location_icon} alt="" />77 Massachusetts Ave, Cambridge <br /> MA  02139, United States</li>
              </ul>
            </div>
            <div className="contact-col">
               <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label>Write your message here</label>
                <textarea name='message' rows='6' placeholder='Enter your message here' required></textarea>
                <button className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
               </form>
               <span>{result}</span>
            </div>
        </div>  
)
}

export default Contact