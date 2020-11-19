import React from 'react';
import { ContactForm } from '../../components';
import { Form, FormInput } from '../../components/ContactForm/ContactForm.elements';
import { Button } from '../../globalStyles';

const Home = () => {
  function sendEmail(e) {

  }

  return(
    <Form>
      <FormInput type="text" placeholder="Name" name="name"/>
      <FormInput type="email" placeholder="Email Address" name="email"/>
      <FormInput type="text" placeholder="Subject" name="subject"/>
    <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
      <Button fontBig>Send your interest</Button>

    </Form>
  )
};

export default Home
