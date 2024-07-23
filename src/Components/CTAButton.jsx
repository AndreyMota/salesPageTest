import styled from 'styled-components';

const StyledLink = styled.a`
  background-image: linear-gradient(to right, #007BFF, #0056B3); /* Gradiente de azul */
  color: #FFFFFF; /* Cor do texto para contraste */
  text-decoration: none;
  max-width: 600px;
  padding: 15px 30px; /* Ajuste o padding conforme necessário */
  font-size: 1.2em;
  display: block;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  text-align: center;
  margin: 20px auto;
  box-shadow: 0px 14px 56px -11px #0056B3; /* Sombra azul escura */

  &:hover {
    background-image: linear-gradient(to right, #9E6EDC, #6E44FF); /* Gradiente ao passar o mouse */
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 12px 24px; /* Ajuste o padding para telas menores */
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 10px 20px; /* Ajuste o padding para dispositivos muito pequenos */
  }
`;

const CTAButton = ({ link, children }) => {
  return (
    <StyledLink href={link} target="_self">
      {children}
    </StyledLink>
  );
};

export default CTAButton;



/* const CTAButton = styled.button`
  background-color: #007BFF;
  color: #121212;
  border: none;
  padding: 15px 30px;
  font-size: 1.2em;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  border-radius: 5px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #9E6EDC;
  }

  @media (max-width: 768px) {
    font-size: 1em;
    padding: 10px 20px;
  }

  @media (max-width: 480px) {
    font-size: 0.9em;
    padding: 8px 16px;
  }
`; */