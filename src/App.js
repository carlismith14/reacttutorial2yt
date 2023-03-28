

import { InfoSection, Navbar } from "./components";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";


// Pages
import Home from "./pages/HomePage/Home";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar></Navbar>
    <Routes>
        <Route path='/' exact component={Home} />
    </Routes>
    
    </Router>
  );
}

export default App;
