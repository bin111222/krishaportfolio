import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;
    
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 30px;
      height: 2px;
      background: ${props => props.theme.colors.accent};
    }
  }
`;

const QuickLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.standard};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.accent};
  }
  
  a {
    color: ${props => props.theme.colors.secondary};
    text-decoration: none;
    transition: color ${props => props.theme.transitions.standard};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  a {
    color: ${props => props.theme.colors.secondary};
    font-size: 1.5rem;
    transition: all ${props => props.theme.transitions.standard};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
      transform: translateY(-3px);
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  color: ${props => props.theme.colors.gray.medium};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>About</h3>
          <p>Business Development Manager with expertise in strategic growth, client relations, and market expansion.</p>
          <SocialLinks>
            <motion.a
              href="https://www.linkedin.com/in/krisha-kothari-14951a186/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/krishakothari98/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
            >
              <FaInstagram />
            </motion.a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Quick Links</h3>
          <QuickLinks>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/experience">Experience</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </QuickLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact</h3>
          <ContactInfo>
            <ContactItem>
              <FaPhone />
              <a href="tel:+919833125505">+91 983312505</a>
            </ContactItem>
            <ContactItem>
              <FaEnvelope />
              <a href="mailto:krishakothari67@gmail.com">krishakothari67@gmail.com</a>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>© {new Date().getFullYear()} Krisha Kothari. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 