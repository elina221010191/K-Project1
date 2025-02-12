import '../styles/Contact.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsAsterisk } from "react-icons/bs";
import { useForm } from "react-hook-form";
import axios from 'axios';

function Contact() {
    const { register, handleSubmit } = useForm();

    const onsend = async (data) => {
        try {
            const formData = {
                names: data.names,
                email: data.email,
                subject: data.subject,
                message: data.message
            };

            const response = await axios.post(
                "https://botiga-kvf9.onrender.com/contact/createContact",
                formData,
                {
                    headers: {
                        "Content-Type": "application/json"
                    }
                }
            );

            console.log("Contact message sent successfully:", response.data);
        } catch (error) {
            console.error("Error sending message:", error.response?.data || error.message);
        }
    };

    return (
        <section className="container mt-5">
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

            <div className="formClass">
                <div className="col-md-4">
                    <h1>Leave Us a Message</h1><br/><br/>
                    <form className="p-4 border rounded bg-light" onSubmit={handleSubmit(onsend)}>
                        <div className="mb-3">
                            <label className="form-label">Full Name </label><BsAsterisk className="asteriskIcon" />
                            <input type="text" className="form-control" placeholder="Full Names"
    {...register('names', { required: true })}
    />
</div>

<div className="mb-3">
    <label className="form-label">Email </label> <BsAsterisk className="asteriskIcon" />
    <input type="email" className="form-control" placeholder="Enter your email"
        {...register('email', { required: true })}
    />
</div>

<div className="mb-3">
    <label className="form-label">Subject </label> <BsAsterisk className="asteriskIcon" />
    <input type="text" className="form-control" placeholder="Subject"
        {...register('subject', { required: true })}
    />
</div>

<div className="mb-3">
    <label className="form-label">Comment or Message</label>
    <textarea className="form-control" rows="4" placeholder="Write your message here..."
        {...register('message', { required: true })}
    />
</div>

<button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>

                <div className="otherInf">
                    <h2>Our Store</h2> <br/><br/>
                    <p>501-521 Fashion Ave, New York, NY 10018, USA</p><br/>
                    <p>PHONE: </p>
                    <p>+1 212 244 2681 </p> <br/>
                    <p>E-MAIL: </p>
                    <p>office@example.org </p> <br/>
                    <h2> Store Hours </h2>
                    <p> Sun: Closed </p>
                    <p> Mon to Sat: 10 AM – 5:30 PM </p>
                </div>
            </div>
        </section>
    );
}

export default Contact;
