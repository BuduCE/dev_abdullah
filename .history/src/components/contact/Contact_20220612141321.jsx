import React, { useRef } from 'react'
import "./Contact.css"
import Phone from  '../../images/phone.jpg'
import Location from '../../images/location.jpg'
import Message from '../../images/message.jpg'

const Contact = () => {
    const formRef = useRef()


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='cont'>
        <div className="cont-bg"></div>
        <div className="cont-container">

          <div className="cont-left">
            <div className="cont-title">Let's build for you</div>
            <div className="cont-item">
              <div className="cont-item-content">
                <img src={Phone} alt="" className="cont-icon" />
                +234 701 732 0766
              </div>
              <div className="cont-item-content">
                <img src={Location} alt="" className="cont-icon" />
                Iba Housing Estate, New Zone B2, Block 2 Flat 1
              </div>
              <div className="cont-item-content">
                <img src={Message} alt="" className="cont-icon" />
                Contact oladejiabdullah17@gmail.com
              </div>
            </div>
          </div>

          <div className="cont-right">
            <p className="cont-desc">
              <b>What's your name</b> Get in touch, I am always available for freelancing if the right project comes along me. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form ref= {formRef} onSubmit={handleSubmit}>
              <input type="text" placeholder='Name' name='user_mame' />

              <input type="text" placeholder='Subject' name='user-subject' />

              <input type="text" placeholder='Email' name='user_email' />

              <textarea rows="5" placeholder='message' name='message'/>

              <button type= value="send">Submit</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact