import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PictureState from './context/picture/PictureState';
import CartState from './context/cart/CartState';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';

function App() {
    return (
        <PictureState>
            <CartState>
                <Router>
                    <div className='container'>
                        <Navbar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path='/gallery' component={Gallery} />
                        </Switch>
                    </div>
                </Router>
            </CartState>
        </PictureState>
    );
}

export default App;
