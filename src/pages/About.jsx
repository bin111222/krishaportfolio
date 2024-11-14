import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 100px 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 120px 2rem 4rem;
  }
`;

const Section = styled(motion.section)`
  margin-bottom: 4rem;
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 2rem;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const PersonalInfo = styled(motion.div)`
  flex: 1;
  background: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.small};
  border: 1px solid ${props => props.theme.colors.gray.light};
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text.primary};
  }
`;

const EducationCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};  // Changed from secondary
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.small};
  border: 1px solid ${props => props.theme.colors.gray.light};
  transition: transform ${props => props.theme.transitions.standard};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.text.primary};  // Added text color
    
    svg {
      color: ${props => props.theme.colors.primary};  // Changed from accent
    }
  }

  p {
    color: ${props => props.theme.colors.text.secondary};  // Changed from gray.medium
    margin-bottom: 0.5rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SkillsContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text.primary};
`;

const Skills = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  align-content: start;
`;

const SkillTag = styled(motion.span)`
  background: #000;  // Using solid black for better visibility
  color: #fff;      // White text
  padding: 0.6rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  display: inline-block;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
`;

const EducationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          About Me
        </Title>
        <Content>
          <PersonalInfo
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Based in Mumbai, I'm a Business Development Manager with a passion for 
              creating strategic growth opportunities and building lasting client relationships. 
              With over 4 years of experience, I've successfully managed accounts for 
              leading brands while consistently driving business expansion.
            </p>
          </PersonalInfo>
          <SkillsContainer>
            <SkillsTitle>Skills & Expertise</SkillsTitle>
            <Skills>
              {[
                'Business Strategy',
                'Client Relations',
                'Sales',
                'Marketing',
                'Team Leadership',
                'Digital Marketing'
              ].map((skill) => (
                <SkillTag
                  key={skill}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {skill}
                </SkillTag>
              ))}
            </Skills>
          </SkillsContainer>
        </Content>
      </Section>

      <Section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <Title>Education</Title>
        <EducationContainer>
          <EducationCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>
              <FaGraduationCap />
              Graduate Degree in Arts
            </h3>
            <p>Economics Major, Commerce Minor</p>
            <p>Ramnarain Ruia College - Mumbai</p>
          </EducationCard>
          <EducationCard
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <h3>
              <FaGraduationCap />
              Higher Secondary Education
            </h3>
            <p>Ramnarain Ruia College - Mumbai</p>
          </EducationCard>
        </EducationContainer>
      </Section>
    </AboutContainer>
  );
};

export default About;