import Meta from "../components/Meta";

const ContactScreen = () => {
  return (
    <>
      <Meta title="Contact Us" />
      <div className="contact-body">
        <p>CONTACT US</p>
        <div className="contact-body-text">
          Reach us at our Mobile line:{" "}
          <a href="tel:+234812345678">0812345678</a>
        </div>
        <div className="contact-body-text">
          Email us at:{" "}
          <a href="mailto:customersupport@raneda.com">
            customersupport@raneda.com
          </a>
        </div>
        <div className="contact-body-text">Raneda Nigeria Limited</div>
        <br />
        <div className="contact-body-text">House no. Street, Estate</div>
        <br />
        <div className="contact-body-text">Abuja, Nigeria</div>
        <br />
        <br />
        <p>FOLLOW RANEDA</p>
      </div>
    </>
  );
};

export default ContactScreen;
