import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 80px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 6rem;
  padding-top: 2rem;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 750px;
  height: auto;
  border-radius: 5%;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.span`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 500;
  color: ${props => props.theme.colors.primary};
  text-align: center;
  
  &:after {
    content: '👋';
    margin-left: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  line-height: 1.2;
  margin-bottom: 2rem;
  max-width: 800px;
  font-weight: 600;
  
  span {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const LatestShotsButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 100px;
  font-weight: 500;
  font-size: 0.9rem;
  margin-top: 2rem;
`;

const ClientSection = styled.section`
  margin-top: 4rem;
`;

const ClientLogos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  align-items: center;
  justify-items: center;
  margin-top: 2rem;
  padding: 0 1rem;
  
  img {
    max-width: 100px;
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      max-width: 140px;
    }
  }
`;

const ServicesSection = styled.section`
  margin-top: 6rem;
  text-align: center;
`;

const ServiceTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const ServiceCard = styled.div`
  text-align: left;
  padding: 2rem;
  background: ${props => props.theme.colors.gray.light};
  border-radius: ${props => props.theme.radii.medium};
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 0.95rem;
  }
`;

const ContactSection = styled.section`
  margin-top: 6rem;
  text-align: center;
`;

const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ContactButton = styled(motion.a)`
  padding: 0.8rem 2rem;
  border-radius: 100px;
  font-weight: 500;
  text-decoration: none;
  
  &.primary {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.secondary};
  }
  
  &.secondary {
    background: ${props => props.theme.colors.gray.light};
    color: ${props => props.theme.colors.primary};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <ProfileSection>
        <ProfileName>Hi! I am Krisha Kothari</ProfileName>
          <ProfileImage src="/profile.webp" alt="Profile" />
          
        </ProfileSection>
        
        <Title>
          I am a Business Development Manager <br />
          helping brands <span>grow</span> <br />
          their business.
        </Title>
        
        <LatestShotsButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Latest Brands Collaborations
        </LatestShotsButton>
      </HeroSection>

      <ClientSection>
        <ClientLogos>
          <img src="/logos/amazon.png" alt="Amazon" />
          <img src="/logos/cornitos.png" alt="Cornitos" />
          <img src="/logos/drbatra.png" alt="Dr. Batra's" />
          <img src="/logos/giveindia.png" alt="Give Indiay" />
          <img src="/logos/indusind.png" alt="Indusind" />
        </ClientLogos>
      </ClientSection>

      <ServicesSection>
        <ServiceTitle>
          Currently working with The Minimalist <br />
          <span>to boost their brand presence.</span>
        </ServiceTitle>

        <ServicesGrid>
          <ServiceCard>
            <h3>UX & UI</h3>
            <p>Designing interfaces that are intuitive, efficient, and enjoyable to use.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Web & Mobile App</h3>
            <p>Transforming ideas into exceptional web and mobile app experiences.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Design & Creative</h3>
            <p>Crafting visually stunning designs that connect with your audience.</p>
          </ServiceCard>
          <ServiceCard>
            <h3>Development</h3>
            <p>Bringing your vision to life with the latest technology and design trends.</p>
          </ServiceCard>
        </ServicesGrid>
      </ServicesSection>

      <ContactSection>
        <ServiceTitle>
          Tell me about your <br />
          next project
        </ServiceTitle>
        <ContactButtons>
          <ContactButton 
            href="mailto:krishakothari67@gmail.com" 
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </ContactButton>
          <ContactButton 
            href="https://wa.me/919920619855" 
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            WhatsApp
          </ContactButton>
        </ContactButtons>
      </ContactSection>
    </HomeContainer>
  );
};

export default Home;