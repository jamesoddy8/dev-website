import React from 'react';
import emailjs from "emailjs-com";
import { Form, FormInput } from '../../components/ContactForm/ContactForm.elements';
import { Button } from "../../globalStyles";

export default function ContactUs() {

  function sendEmail(e) {

    e.preventDefault();

        emailjs.sendForm('service_hre5xho', 'template_s1ne1le', e.target, 'user_ykWgeLrRqKbfCmZwruIjz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
  }

  return(
    <Form onSubmit={sendEmail}>
      <div className="col-8 form-group mx-auto">
        <FormInput type="text" placeholder="Name" name="name"/>
      </div>
      <div className="col-8 form-group pt-2 mx-auto">
        <FormInput type="email" placeholder="Email Address" name="email"/>
      </div>
      <div className="col-8 form-group pt-2 mx-auto">
        <FormInput type="text" placeholder="Subject" name="subject"/>
      </div>
      <div className="col-8 pt-3 mx-auto">
        <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
      </div>
      <Button type="submit">Send Message</Button>
    </Form>
  )
};
