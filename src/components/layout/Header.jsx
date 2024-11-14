import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '/logo.png';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.5rem 2rem;
  background: ${props => props.scrolled ? 
    'rgba(255, 255, 255, 0.98)' : 
    'rgba(255, 255, 255, 1)'
  };
  z-index: 1000;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.scrolled ? '0 1px 0 rgba(0, 0, 0, 0.1)' : 'none'};
  transform: translateY(${props => props.hidden ? '-100%' : '0'});
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.img`
  width: 162px;
  height: 60.6px;
  transition: transform ${props => props.theme.transitions.standard};
  
  &:hover {
    transform: rotate(-5deg);
  }
`;

const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.1rem;
  color: ${props => props.theme.colors.primary};
`;

const NavLinks = styled.div`
  display: none;
  gap: 2.5rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  position: relative;
  color: ${props => props.theme.colors.text.secondary};
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem;
  transition: color ${props => props.theme.transitions.standard};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
  }
`;

const LatestShotsButton = styled(motion.button)`
  display: none;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  border-radius: 100px;
  font-weight: 500;
  font-size: 0.9rem;
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => props.theme.colors.secondary};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          
          setScrolled(currentScrollY > 50);
          lastScrollY = currentScrollY;
          ticking = false;
        });
        
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <HeaderContainer 
      scrolled={scrolled} 
      hidden={hidden}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <Nav>
        <LogoContainer to="/">
          <Logo src={logo} alt="KK Logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink 
            to="/" 
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About
          </NavLink>
          <NavLink 
            to="/experience"
            className={location.pathname === "/experience" ? "active" : ""}
          >
            Experience
          </NavLink>
          <NavLink 
            to="/services"
            className={location.pathname === "/services" ? "active" : ""}
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact
          </NavLink>
        </NavLinks>

        
        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <HiX /> : <HiMenu />}
        </MobileMenuButton>
      </Nav>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/experience" onClick={() => setIsOpen(false)}>Experience</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>Services</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </HeaderContainer>
  );
};

export default Header; 