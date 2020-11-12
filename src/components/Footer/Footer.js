import React from 'react';
import { Button } from '../../globalStyles';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinkTitle, FooterLink } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
    <FooterSubscription>
      <FooterSubHeading>
        Contact me for here at any of these links.
      </FooterSubHeading>
      <FooterSubText>
        You can contact me at any time.
      </FooterSubText>
      <Form>
        <FormInput name="email" type="email" placeholder="Your Email"/>
      <Button fontBig>Send your interest</Button>
      </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About me</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon>
              James Oddy
            </SocialIcon>
            <WebsiteRights>
              James Oddy 2020 ©
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href={'https://www.linkedin.com/in/james-oddy-a203b8188/'} target="_blank" aria-label="Linkedin">
              <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target="_blank" aria-label="Instagram">
              <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href={'https://github.com/jamesoddy8'} target="_blank" aria-label="GitHub">
              <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialLogo>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
