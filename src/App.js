
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
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="">

     <AuthProvider>
        <Router>
          {/* -----------Header route---------------- */}
          <Header>
          </Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>
            {/* -----------Home route---------------- */}
            <Route exact path="/home">
              <Home></Home>
            </Route>
            {/* -----------Services route---------------- */}
            <Route exact path="/services">
              <Services> </Services>
            </Route>

            {/* -----------About route---------------- */}
            <Route exact path="/about">
              <AboutUs></AboutUs>
            </Route>
            {/* -----------contact route---------------- */}
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            {/* -----------Register route---------------- */}
            <Route exact path="/register">
              <Register> </Register>
            </Route>
            {/* -----------Login route---------------- */}
            <Route exact path="/login">
              <LogIn></LogIn>
            </Route>
            {/* -----------Unknown or error  route---------------- */}
            <Route path="*">
              <NotFound> </NotFound>
            </Route>

          </Switch>
          {/* -----------Route route---------------- */}
          <Footer></Footer>
        </Router>

     </AuthProvider>



    </div>
  );
}

export default App;
