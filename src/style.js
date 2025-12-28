// styles.js
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: radial-gradient(circle at top left, #fdf2f8, #fae8ff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeInUp} 0.6s ease-in-out both;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Tabs = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 1rem;
`;

export const TabsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.5rem;
  background-color: #f5d0fe;
  border-radius: 1rem;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
`;

export const TabsTrigger = styled.button`
  flex: 1 1 45%;
  min-width: 120px;
  padding: 0.6rem 1rem;
  background-color: ${({ active }) => (active ? '#a855f7' : 'transparent')};
  color: ${({ active }) => (active ? '#fff' : '#9333ea')};
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${({ active }) => (active ? '#9333ea' : '#f3e8ff')};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #f0abfc;
  }

  @media (max-width: 500px) {
    flex: 1 1 100%;
    font-size: 0.95rem;
  }
`;

export const IntroSection = styled.section`
  text-align: center;
  padding: 1rem;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;

  h2 {
    font-size: 2rem;
    color: #a21caf;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
  }
`;

export const LogoImage = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 9999px;
  background-color: #fff;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.54);
  margin-bottom: 1rem;
  object-fit: contain;

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`;

export const SiteTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #db2777;
  margin-bottom: 0.5rem;
  font-family: 'Pacifico', cursive;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

export const WelcomeText = styled.p`
  font-size: 1rem;
  color: #6b7280;
  max-width: 36rem;
  margin: 0 auto;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const ContentWrapper = styled.main`
  margin: 0 auto;
  padding: 2rem 1rem 3rem;
  flex: 1;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: #f5d0fe;
  text-align: center;
  padding: 0.75rem 1rem;
  font-size: 0.875rem;
  color: #6b21a8;
  z-index: 1000;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);

  p {
    max-width: 100%;
    word-wrap: break-word;
    overflow-wrap: break-word;
    white-space: normal;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    padding: 0.5rem 0.5rem;

    p {
      padding: 0 0.5rem;
    }
  }
`;

export const ByoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  padding: 2rem;
  background: radial-gradient(circle at top left, #fdf4ff, #fae8ff);
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  animation: ${fadeInUp} 0.6s ease-in-out both;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Card = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.5s ease both;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const CartScroll = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  padding-right: 1rem;
  padding-left: 1rem;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
`;

export const CardImage = styled.img`
  max-width: 50%;
  max-height: 50%;
  height: auto;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
`;

export const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #a21caf;
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-bottom: 0.25rem;
  text-transform: capitalize;
  color: #6b21a8;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #f0abfc;
    border-color: #e879f9;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.6rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: #fff;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #f0abfc;
    border-color: #e879f9;
  }
`;

export const ToppingButton = styled.button`
  padding: 0.35rem 1rem;
  font-size: 0.875rem;
  border-radius: 9999px;
  border: 2px solid #e0e0e0;
  background-color: ${({ selected }) => (selected ? '#a855f7' : '#fff')};
  color: ${({ selected }) => (selected ? '#fff' : '#4b5563')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ selected }) => (selected ? '#9333ea' : '#f3f4f6')};
  }

  &:active {
    animation: ${pulse} 0.3s;
  }
`;

export const Button = styled.button`
  background-color: #a21caf;
  color: white;
  font-weight: 600;
  padding: 0.6rem 1.25rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #86198f;
  }

  &:active {
    animation: ${pulse} 0.3s;
  }
`;

export const Price = styled.p`
  font-size: 0.75rem;
  font-weight: 500;
  color: #9333ea;
  margin: 0.5rem 0;
`;

export const CakeName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #4c1d95;
`;

export const ScrollArea = styled.div`
  max-height: 400px;
  overflow-y: auto;
  padding-right: 0.5rem;
  border-radius: 1rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d8b4fe;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  background-color: #f5d0fe;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const Logo = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #a21caf;
  font-family: 'Pacifico', cursive;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-weight: 600;
  color: ${({ active }) => (active ? '#7e22ce' : '#6b7280')};
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  border-bottom: ${({ active }) => (active ? '2px solid #7e22ce' : 'none')};
  transition: color 0.2s ease;

  &:hover {
    color: #9333ea;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 2rem;
  background-color: #fef3f9;
  animation: ${fadeInUp} 0.6s ease-in-out both;
`;

export const TabsContent = styled.div`
  background-color: white;
  border-radius: 1.25rem;
  padding: 2rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  animation: ${fadeInUp} 0.5s ease both;
`;

export const HeaderSection = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem 2rem;
  text-align: center;
  background-color: transparent;
`;
