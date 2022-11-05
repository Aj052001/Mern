import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <>
      <div className="top">
        <div className="top_contact">
          <div className="top_contact_phone">Phone</div>
          <div className="top_contact_phone_number">+91-9660299601</div>
        </div>

        <div className="top_contact">
          <div className="top_contact_email">Email</div>
          <div className="top_contact_email_email">Ajsingh052001@gmail.com</div>
        </div>
        <div className="top_contact">
          <div className="top_contact_address">Address</div>
          <div className="top_contact_address_address">Sikar,Raj,india</div>
        </div>
      </div>

      <div className="bottom">
        <div className="box_contact">
          <div className="border">
          <div className="title_contact">
            <h1>Get in Touch</h1>
          </div>
          <div className="field_contact">
            <div className="field_contact_name">
            
              <input placeholder="Your Name" />
            </div>
            <div className="field_contact_name">
             
              <input placeholder="Your Email" />
            </div>
            <div className="field_contact_name">
              
              <input placeholder="Your Phone Number" />
            </div>
          </div>
          <div className="message_contact">
            
            <textarea placeholder="Message"></textarea>
          </div>
          <div className="button_contact">
            <button type="submit">Submit</button>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

