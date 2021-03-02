import './App.css';import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import About from './Components/About'
import Home from './Components/Home'
import Products from './Components/Products'
import TopNavbar from './Components/TopNavbar'
import Register from './Components/Register'
import Product from './Components/Product'
import Receipts from './Components/Receipts'
import FileView from './Components/FileView'
import CreateReceipt from './Components/CreateReceipt'
import {Button} from 'react-bootstrap'


function App() {

const dataName=[
  {user:
    {name: 'nikko',
    age: 27
  }
  },
  {user:{
    name:'hazelle',
    age: 28
  }
  }
]

  return (
    <Router>

      <div className="App">
      <TopNavbar />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/home" component={Home}/>
            <Route path="/fs" component={()=><FileView data={dataName} keyWord="name"/>}/>
            <Route path="/products" exact component={Products}/>
              <Route path="/products/register" component={Register}/>
              <Route path="/products/:id" component={Product}/>
            <Route path="/receipts" exact component={Receipts}/>
            <Route path="/receipts/create/:id"  component={CreateReceipt}/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
