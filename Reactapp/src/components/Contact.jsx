import React from "react";
function Contact(){
    return(
        <div className="contact-container">
            <div className="contact-left">
            <div className="map mb-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.5327263231125!2d30.088148373116155!3d-1.9394623366849733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6eb4b136305%3A0xfa7ecaf4c40f3383!2skLab!5e0!3m2!1sen!2srw!4v1738315273112!5m2!1sen!2srw"
                    width="100%"
                    height="400"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            
        <div className="contact1">
        <h1 Leave Us a Message></h1>
        <h4>Name*</h4>
        <input placeholder="" ></input>
        <input placeholder="" ></input>
        <h4>Email*</h4>
        <input placeholder=""></input>
        <h4>Comment or Message</h4>
        <input placeholder=""></input><br/>
        <button className="button1">Submit</button>
        
        <div classNmae="contact-right">
            <ul>
            <li>Our Store</li>
            <li>501-521 Fashion Ave, New York, NY 10018, USA</li>
            <li>PHONE:</li>
            <li>+1 212 244 2681</li>
            <li>E-MAIL:</li>
            <li>office@example.org</li>
            <li>Store Hours</li>
            <li>Sun: Closed</li>
            <li>Mon to Sat: 10 AM – 5:30 PM</li>
            </ul>
            </div>
        </div>
        </div>
        </div>

    )
}
export default Contact