import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <div className='container'>
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
