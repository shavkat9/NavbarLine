import Navbar from "./Components/Navbar/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Skills from "./Components/Skills";
import About from './Components/About';
import Contact from "./Components/Contact";
import Signup  from "./Components/Signup";


const  App = () =>  {
  return (
   <Router>
     < Navbar />
     
     <Switch>
      <Route path="/" component={Home} exact>
        <Home />
      </Route>
      <Route path="/about" component={About} exact>
        <About />
      </Route>
      <Route path="/skills" component={Skills} exact>
        <Skills />
      </Route>
      <Route path="/contact" component={Contact} exact>
        <Contact />
      </Route> 
      <Route path="/signup" component={Signup} exact>
        <Signup />
      </Route>
     </Switch>
   </Router>
  );
};

export default App;
 