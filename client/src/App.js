import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About'
import Home from './Components/Home'
import Products from './Components/Products'
import TopNavbar from './Components/TopNavbar'
import Register from './Components/Register'
import Product from './Components/Product'
import Receipts from './Components/Receipts'
import CreateReceipt from './Components/CreateReceipt'
import {Button} from 'react-bootstrap'


function App() {



  return (
    <Router>

      <div className="App">
      <TopNavbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route path="/products" exact component={Products}/>
              <Route path="/products/register" component={Register}/>
              <Route path="/products/:id" component={Product}/>
            <Route path="/receipts" exact component={Receipts}/>
            <Route path="/receipts/create"  component={CreateReceipt}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
