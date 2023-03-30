import { Footer, InfoSection, Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

// Pages
import Home from "./pages/HomePage/Home";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import SignUp from "./pages/SignUp/SignUp";


// Components
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/sign-up' element={<SignUp />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



//old way of doing this 
// import { InfoSection, Navbar } from "./components";
// import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
// import { GlobalStyle } from "./globalStyles";


// // Pages
// import Home from "./pages/HomePage/Home";

// function App() {
//   return (
//     <Router>
//       <GlobalStyle />
//       <Navbar />
//       <Switch>
//         <Route path='/' exact component={Home} />

//       </Switch>
  
    
//     </Router>
//   );
// }

// export default App;