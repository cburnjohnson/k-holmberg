import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PictureState from './context/picture/PictureState';
import CartState from './context/cart/CartState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Alerts from './components/layout/Alerts';
import BackgroundImages from './components/layout/BackgroundImages';

function App() {
    return (
        <PictureState>
            <CartState>
                <AlertState>
                    <Router>
                        <div className='container'>
                            <Navbar />
                            <Alerts />
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route
                                    exact
                                    path='/gallery'
                                    component={Gallery}
                                />
                            </Switch>
                            <BackgroundImages />
                        </div>
                    </Router>
                </AlertState>
            </CartState>
        </PictureState>
    );
}

export default App;
