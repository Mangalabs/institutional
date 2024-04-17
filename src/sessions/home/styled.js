import styled from "styled-components";

import { global } from "../../styles/colors";

export const Container = styled.section`
  background-color: ${global.background};
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('https://img.freepik.com/fotos-gratis/close-up-hands-concept_23-2149151165.jpg?t=st=1713326042~exp=1713329642~hmac=251ea301fea63fefa0556df6e0c130175b22c1f5ddd9c7bba4cf4b81109a9bd1&w=1380');
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 4em 2em 4em 2em;

  

  @media (min-width: 768px) {
    padding: 10em 2em 10em 2em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  padding: 0 1em;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
  }
`;

export const DifferentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 10em;
    margin-bottom: 5em;
    margin-top: 5em;
  }
`;

export const Differential = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1.5em 0;
`;

export const DifferentialTittle = styled.h3`
  font-size: 1em,;
  font-weight: 600;
  text-align: center;
  margin: 0.2em 0;

  @media (min-width: 768px) {
    font-size: 2em;
    font-weight: 600;
    text-align: center;
  }
`;

export const DifferentialDescription = styled.p`
  font-size: 1em,;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.5em;
    font-weight: 500;
  }
`;

export const CallUsButton = styled.button`
  width: 12em;
  height: 3.2em;
  border-radius: 8px;
  margin-top: 2em;
`