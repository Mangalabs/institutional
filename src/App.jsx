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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <MobileNavigator />
            <Home />
            <Team />
            <Techs />
            <Contact />
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
