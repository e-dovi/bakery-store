// style.js

import styled from 'styled-components';

export const Card = styled.div`
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  margin: 1rem auto;
  margin-bottom:50%;
  max-width: 95%;
  width: 100%;
  max-width: 300px; /* Prevents being too wide */
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
  box-sizing: border-box;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const Heading = styled.h2`
  font-family: 'Pacifico', cursive;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 1rem;
 
`;

/*export const Label = styled.label`
  font-weight: 600;
  display: block;
  margin-bottom: 0.5rem;
`;*/

export const Input = styled.input`
  width: 100%;
  min-width: 0; // ensures shrinkability in flexbox
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
`;


export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
`;

export const ToppingButton = styled.button`
  padding: 0.4rem 0.8rem;
  border-radius: 6px;
  border: 1px solid #aaa;
  background-color: ${(props) => (props.active ? '#eee' : '#fff')};
  cursor: pointer;
  &:hover {
    background-color: #f8f8f8;
  }
`;
export const Label = styled.label`
  display: block;
  font-weight: 600;
  color: #6c4d28; /* warm bakery tone */
  margin-bottom: 0.25rem;
  text-transform: capitalize;
`;


export const ByoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;
