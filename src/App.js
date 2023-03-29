import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Products from './components/Products';

export default function App() {
  return (
    // <Router>
    //     <Route exact path="/" component={Home} />
    //     <Route path="/Products" component={Products} />
    // </Router>
    <div>
    <Products />
  </div>
  );
}
