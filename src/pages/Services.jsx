import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChartLine, FaHandshake, FaBullhorn, FaUsers, FaLightbulb, FaGlobe } from 'react-icons/fa';

const ServicesContainer = styled.div`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 1rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 0;
  }
`;

const ServiceCard = styled(motion.div)`
  background: ${props => props.theme.colors.secondary};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadows.small};
  transition: all ${props => props.theme.transitions.standard};
  border: 1px solid ${props => props.theme.colors.gray.light};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid #000;
  transition: all 0.3s ease;
  
  svg {
    font-size: 24px;
    color: #000;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
    background: #000;
    border-color: #000;
    
    svg {
      color: white;
      transform: scale(1.1);
    }
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.gray.medium};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const FeatureList = styled.ul`
  list-style: none;
  
  li {
    margin-bottom: 0.5rem;
    padding-left: 1.5rem;
    position: relative;
    color: ${props => props.theme.colors.gray.dark};
    
    &:before {
      content: '•';
      position: absolute;
      left: 0;
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const Services = () => {
  const services = [
    {
      icon: <FaChartLine />,
      title: "Business Development",
      description: "Strategic planning and execution for sustainable business growth",
      features: [
        "Market analysis and opportunity identification",
        "Growth strategy development",
        "Revenue stream optimization"
      ]
    },
    {
      icon: <FaHandshake />,
      title: "Client Relations",
      description: "Building and maintaining strong client partnerships",
      features: [
        "Key account management",
        "Client satisfaction programs",
        "Relationship building strategies"
      ]
    },
    {
      icon: <FaBullhorn />,
      title: "Marketing Strategy",
      description: "Comprehensive marketing solutions for brand growth",
      features: [
        "Digital marketing campaigns",
        "Brand positioning",
        "Marketing analytics"
      ]
    },
    {
      icon: <FaUsers />,
      title: "Team Leadership",
      description: "Effective team management and development",
      features: [
        "Team building and motivation",
        "Performance management",
        "Strategic leadership"
      ]
    },
    {
      icon: <FaLightbulb />,
      title: "Strategic Planning",
      description: "Long-term business strategy development",
      features: [
        "Business model innovation",
        "Competitive analysis",
        "Strategic roadmap creation"
      ]
    },
    {
      icon: <FaGlobe />,
      title: "Market Expansion",
      description: "Geographic and market segment expansion strategies",
      features: [
        "Market entry planning",
        "Distribution network development",
        "International business development"
      ]
    }
  ];

  return (
    <ServicesContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services & Expertise
      </Title>
      
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <IconWrapper>
              {service.icon}
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <FeatureList>
              {service.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </FeatureList>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;