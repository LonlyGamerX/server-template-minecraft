import React from "react";
import Container from "react-bootstrap/Container";

const Contact = () => {
  return (
    <>
      <Container>
        <h4 className="mt-3 text-center text-white">Contact Us</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-white">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-white">
              Email address
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label text-white">
              Subject
            </label>
            <select className="form-select">
              <option selected value="1">
                Refund
              </option>
              <option value="2">Account Recovery</option>
              <option value="3">Item/s not received after 24h</option>
              <option value="4">Info about a banned user</option>
              <option value="5">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label text-white">
              Message
            </label>
            <textarea className="form-control" id="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn bg-transparent text-white white-outline mb-3">
            Send
          </button>
        </form>
      </Container>
    </>
  );
};

export default Contact;
