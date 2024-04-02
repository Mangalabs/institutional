import styled from "styled-components";

import { global } from "../../styles/colors";

export const Container = styled.div`
  background-color: ${global.background};

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

`;