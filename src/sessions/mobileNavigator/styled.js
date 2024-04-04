import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { HashLink as Link } from 'react-router-hash-link';

import { global, mobileNavigator } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 4em;
  width: 100%;

  position: fixed;

  z-index: 1000;

  transition: 0.5s;
  background-color: ${(props) => props.transparent ? mobileNavigator.topBarTransparent : mobileNavigator.topBar};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 700;
  color: ${global.title};

  padding-left: 1em;
`;

export const MenuContainer = styled(Menu)`
  align-self: flex-end;
  background-color: ${mobileNavigator.background};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 50%;

  padding-top: 2em;
`;

export const MenuItem = styled(Link)`
  color: ${mobileNavigator.itemFont};

  font-size: 1.15em;
  font-weight: 700;

  margin-bottom: 1em;
`;
