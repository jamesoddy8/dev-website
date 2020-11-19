import React from 'react';
import { Button } from '../../globalStyles';
import { FormInput, Form } from './ContactForm.elements';

const ContactForm = () => {
  function sendEmail(e) {

  }

  return(
    <Form>
      <FormInput type="text" placeholder="Name" name="name"/>
      <FormInput type="email" placeholder="Email Address" name="email"/>
      <FormInput type="text" placeholder="Subject" name="subject"/>
    <textarea className="form-control" id="" cols-"30" rows="8" placeholder="Your message" name="message"></textarea>
      <Button fontBig>Send your interest</Button>

    </Form>
  )

};

export default ContactForm;
