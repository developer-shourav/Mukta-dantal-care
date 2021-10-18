
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

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

         </Switch>
      </Router>
      



    </div>
  );
}

export default App;
