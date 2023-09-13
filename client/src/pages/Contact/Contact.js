import circle from "../../assets/images/mobile.png";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="reach-header">Reach out for any enquery</h1>
      <div className="center-side-contact">
        <img src={circle} alt="" className="circle" />
        <div className="left-side-contact">
          <h1 className="contact-header">Contact us for cheesy delight</h1>
          <p className="para-header">
            have hour stuff listen to your appetite!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
