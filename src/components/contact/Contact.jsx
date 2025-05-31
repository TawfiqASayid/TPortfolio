import { faEnvelope, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "f1e70204-7bde-4e44-905b-1fe14c76ea61");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Your message was sent successfully!");
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        {/* <img src={horizontal_img} alt="horizontal line" /> */}
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let Talk</h1>
          <p>
            I am ready to take on exciting projects related to my field of
            expertise. Contact me and let’s achieve great things together!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <p>tofiqahmedsayid@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <p>+251 982109950</p>
            </div>
            <div className="contact-detail">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
              <p>Haramaya, Ethiopia</p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Your name..."
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Your email..."
            required
          />

          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            rows="8"
            placeholder="Enter your message..."
            required
          ></textarea>

          <button type="submit" className="contact-submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
