import styled from "styled-components";

import { global } from "../../styles/colors";

export const Container = styled.section`
  background-color: ${global.background};

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding-top: 4em;
`;

export const Subtitle = styled.h2`
  font-size: 2em;
  font-weight: 700;
  padding: 0 1em;
  text-align: center;
`;

export const DifferentialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
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
`;

export const DifferentialDescription = styled.text`
  font-size: 1em,;
  font-weight: 500;
  text-align: center;
  margin: 0;
`;

export const CallUsButton = styled.button`
  width: 12em;
  height: 3.2em;

  border-radius: 8px;
  margin-top: 2em;
`