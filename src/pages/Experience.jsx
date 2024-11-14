import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendar } from 'react-icons/fa';

const ExperienceContainer = styled.div`
  min-height: 100vh;
  padding: 120px 2rem 4rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 4rem;
  position: relative;
  display: inline-block;
  text-align: center;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${props => props.theme.colors.accent};
  }
`;

const Timeline = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: calc(100% - 4rem);
    background: ${props => props.theme.colors.gray.light};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      left: 16px;
    }
  }
`;

const TimelineCard = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    margin-left: 32px;
  }
`;

const TimelineContent = styled.div`
  width: 45%;
  background: ${props => props.theme.colors.secondary};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.medium};
  position: relative;
  margin: ${props => props.position === 'left' ? '0 auto 0 0' : '0 0 0 auto'};
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    margin: 0;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme.colors.accent};
  }
`;

const Duration = styled.p`
  color: ${props => props.theme.colors.gray.medium};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.gray.dark};
`;

const Achievements = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 3rem;
    padding: 0;
  }
`;

const BrandCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  
  img {
    max-width: 150px;
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.12);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const Experience = () => {
  const experiences = [
    {
      company: "The Minimalist",
      duration: "2022 - Present",
      position: "Business Development Manager",
      achievements: [
        "Onboarded high-profile clients including Amazon, Nykaa, IndusInd Bank",
        "Managed key client relationships and prepared commercial proposals",
        "Represented at marquee events like Brand Equity and IAMAI"
      ]
    },
    {
      company: "Tikitar Group of Companies",
      duration: "2020 - 2022",
      position: "Business Development Executive",
      achievements: [
        "Secured major projects with Walmart Chennai, ABB Bangalore, JP Morgan Chase",
        "Expanded market presence to Delhi, Bangalore, and Dubai",
        "Led digital marketing initiatives and webinar organization"
      ]
    },
    {
      company: "The Wedding Trunk",
      duration: "2019 - 2020",
      position: "Intern",
      achievements: [
        "Managed client research and vendor coordination",
        "Drove social media engagement strategies",
        "Conducted market research and analysis"
      ]
    }
  ];

  const brands = [
    {
      name: "Amazon",
      logo: "/logos/amazon.png"
    },
    {
      name: "Cornitos",
      logo: "/logos/cornitos.png"
    },
    {
      name: "Dr Batra's",
      logo: "/logos/drbatra.png"
    },
    {
      name: "Give India",
      logo: "/logos/giveindia.png"
    },
    {
      name: "IndusInd Bank",
      logo: "/logos/indusind.png"
    }
  ];

  return (
    <ExperienceContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Brands Collaborated With
      </Title>

      <BrandsGrid>
        {brands.map((brand, index) => (
          <BrandCard
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <img 
              src={brand.logo} 
              alt={brand.name} 
              title={brand.name}
            />
          </BrandCard>
        ))}
      </BrandsGrid>

      <Title
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ marginTop: '6rem' }}
      >
        Professional Journey
      </Title>
      
      <Timeline>
        {experiences.map((exp, index) => (
          <TimelineCard
            key={exp.company}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <TimelineContent position={index % 2 === 0 ? 'left' : 'right'}>
              <CompanyName>
                <FaBriefcase />
                {exp.company}
              </CompanyName>
              <Duration>
                <FaCalendar />
                {exp.duration}
              </Duration>
              <Position>{exp.position}</Position>
              <Achievements>
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </Achievements>
            </TimelineContent>
          </TimelineCard>
        ))}
      </Timeline>
    </ExperienceContainer>
  );
};

export default Experience; 