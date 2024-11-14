import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import { useForm } from 'react-hook-form';

const ContactContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1.5fr;
    gap: 3rem;
    padding: 0;
  }
`;

const ContactInfo = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 10px;
  height: fit-content;
  width: 100%;
  border: 1px solid ${props => props.theme.colors.gray.light};
  box-shadow: ${props => props.theme.shadows.small};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  svg {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.accent};
    margin-right: 1rem;
  }
  
  p {
    margin: 0;
    color: ${props => props.theme.colors.gray.dark};
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.2rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.gray.light};
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transitions.standard};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
    opacity: 0.7;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem 1.2rem;
  background: ${props => props.theme.colors.background};
  border: 1px solid ${props => props.theme.colors.gray.light};
  border-radius: 10px;
  font-size: 1rem;
  font-family: inherit;
  min-height: 150px;
  color: ${props => props.theme.colors.text.primary};
  transition: all ${props => props.theme.transitions.standard};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.accent};
    box-shadow: ${props => props.theme.shadows.small};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text.secondary};
    opacity: 0.7;
  }
`;

const SubmitButton = styled(motion.button)`
  background: #000;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 100px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: all ${props => props.theme.transitions.standard};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  a {
    color: ${props => props.theme.colors.gray.dark};
    font-size: 1.5rem;
    transition: color ${props => props.theme.transitions.standard};
    
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get in Touch
      </Title>
      
      <ContentWrapper>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ContactItem>
            <FaPhone />
            <p>+91 983312505</p>
          </ContactItem>
          <ContactItem>
            <FaEnvelope />
            <p>krishakothari67@gmail.com</p>
          </ContactItem>
          <ContactItem>
            <FaMapMarkerAlt />
            <p>Mumbai, India</p>
          </ContactItem>
          
          <SocialLinks>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </SocialLinks>
        </ContactInfo>

        <Form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div>
            <Input
              {...register("name", { required: "Name is required" })}
              placeholder="Your Name"
            />
            {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
          </div>
          
          <div>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              placeholder="Your Email"
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </div>
          
          <div>
            <TextArea
              {...register("message", { required: "Message is required" })}
              placeholder="Your Message"
            />
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </div>
          
          <SubmitButton
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default Contact; 