import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import MobileNavigator from './sessions/mobileNavigator';
import Home from './sessions/home';
import Contact from './sessions/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <MobileNavigator />
            <Home />
            <Contact />
          </>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
