import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import MobileNavigator from './sessions/mobileNavigator';
import Home from './sessions/home';
import Team from './sessions/team';
import Techs from './sessions/techs';
import Contact from './sessions/contact';
import styled from 'styled-components';

const BodyApp = styled.div`
  background: rgb(209,95,107);
  background: linear-gradient(180deg, rgba(209,95,107,1) 22%, rgba(255,201,106,1) 100%);
`;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <BodyApp>
            <MobileNavigator />
            <Home />
            <Team />
            <Techs />
            <Contact />
          </BodyApp>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
