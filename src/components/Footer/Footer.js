import React from 'react';
import { Button } from '../../globalStyles';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FooterContainer, FooterSubscription, FooterSubHeading, FooterSubText, Form, FormInput, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, SocialIcon } from './Footer.elements';

const Footer = () => {
  return (
    <FooterContainer>
    {/* <FooterSubscription>
      <FooterSubHeading>
        Contact me here or at any of these links.
      </FooterSubHeading>
      <FooterSubText>
        You can contact me at any time.
      </FooterSubText>
      <Form>
        <FormInput name="email" type="email" placeholder="Your Email"/>
      <Button fontBig>Send your interest</Button>
      </Form>
      </FooterSubscription> */}
      {/* <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About me</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Videos</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to='/sign-up'>How it works</FooterLink>
            <FooterLink to='/'>Link 1</FooterLink>
            <FooterLink to='/'>Link 2</FooterLink>
            <FooterLink to='/'>Link 3</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer> */}
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcons>
              <SocialIconLink to={'https://www.linkedin.com/in/james-oddy-a203b8188/'} target="_blank" aria-label="Linkedin">
              <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink to='/' target="_blank" aria-label="Instagram">
              <FaInstagram />
              </SocialIconLink>
              <SocialIconLink to={'https://github.com/jamesoddy8'} aria-label="GitHub">
              <FaGithub />
              </SocialIconLink>
            </SocialIcons>
          </SocialLogo>
        </SocialMediaWrap>
      </SocialMedia>
      {/* <SocialIcon>
        James Oddy
      </SocialIcon> */}
      <WebsiteRights>
        James Oddy 2021 ©
      </WebsiteRights>
    </FooterContainer>
  );
};

export default Footer;
