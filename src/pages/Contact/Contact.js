import React from 'react';
import emailjs from "emailjs-com";
import { Form, FormInput, Button, FormTextInput } from '../../components/ContactForm/ContactForm.elements';

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
      <div className="input1">
        <FormInput type="text" placeholder="Name" name="name"/>
      </div>
      <div className="input2">
        <FormInput type="email" placeholder="Email Address" name="email"/>
      </div>
      <div className="input3">
        <FormInput type="text" placeholder="Subject" name="subject"/>
      </div>
      <div className="input4">
        <FormTextInput id="" cols="30" rows="8" placeholder="Your message" name="message"></FormTextInput>
      </div>
      <Button type="submit" className="submitbutton">Send Message</Button>
    </Form>
  )
};
