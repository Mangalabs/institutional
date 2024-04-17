import styled from "styled-components";

import { global, team } from "../../styles/colors";

export const Container = styled.section`
  background-color: ${global.background};

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0em 2em 4em 2em;

  @media (min-width: 768px) {
    padding: 5em 2em 4em 2em;
  }
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0em;

  @media (min-width: 768px) {
    font-size: 3em;
    font-weight: 700;
    text-align: center;
  }
`;

export const SessionDescription = styled.p`
  font-size: 1em;
  font-weight: 700;
  text-align: center;
  margin-top: 1em;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    margin-top: 4em;
    flex-direction: row;
    align-items: center;
    gap: 2em;
  }
`;

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 13em;
  border: 1px solid ${team.cardBorder};
  margin-bottom: 2em;

  @media (min-width: 768px) {
    width: 15em;
  }
`;

export const MemberDescriptionContainer = styled.div`
  height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  background-color: ${team.descriptionBackground};
  padding: 1em 1em;

  @media (min-width: 768px) {
    height: 15em;
  }
`;

export const MemberName = styled.h3`
  font-size: 1.15em;
  font-weight: 700;
  text-align: left;
  color: ${team.descriptionFontColor};
  margin: 0;

  @media (min-width: 768px) {
    font-size: 1.50em;
  }
`;

export const MemberDescription = styled.p`

  font-size: 0.95em;
  font-weight: 500;
  text-align: left;
  color: ${team.descriptionFontColor};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`;
