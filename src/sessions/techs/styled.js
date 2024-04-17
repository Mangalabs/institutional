import styled from "styled-components";

import { global, techs } from "../../styles/colors";

export const Container = styled.section`
  background-color: ${global.background};
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0em 2em 4em 1em;

  @media (min-width: 768px) {
    margin: auto;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0em;
  @media (min-width: 768px) {
    font-size: 3em;
  }
`;

export const SessionDescription = styled.p`
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  margin-top: 0em;
  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const TechsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media(min-width: 768px){
    width: 50%;
  }
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;
  border: 1px solid ${techs.cardBorder};
  background-color: ${techs.cardBackground};
  margin-bottom: 2em;

  @media(min-width: 768px){
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-bottom: 2em;
  }
`;

export const TechLogo = styled.img`
  object-fit: contain;
  width: 5em;
  height: 5em;
`;

export const TechName = styled.h3`
  font-size: 1.15em;
  font-weight: 800;
  text-align: center;
  color: ${techs.descriptionFontColor};
`;
