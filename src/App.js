
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import LogIn from './components/LogIn/LogIn';
import NotFound from './components/NotFound/NotFound';
import Register from './components/Register/Register';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="">

      <Router> 
        <Header>
        </Header>
         <Switch>

           <Route exact path = "/">
             <Home></Home>
           </Route>

          <Route exact path="/home">
            <Home></Home>
          </Route>

          <Route exact path="/services">
            <Services> </Services>
          </Route>

          <Route exact path="/about">
            <AboutUs></AboutUs>
          </Route>

          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="/register">
           <Register> </Register>
          </Route>

          <Route exact path="/login">
            <LogIn></LogIn>
          </Route>

          <Route  path="*">
            <NotFound> </NotFound>
          </Route>

         </Switch>

         <Footer></Footer>
      </Router>
      



    </div>
  );
}

export default App;
