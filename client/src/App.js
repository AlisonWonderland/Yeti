import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Signup from './components/Signup';
import Userpage from './components/Userpage';
import Browse from './components/Browse';

import './styles/styles.module.css';

function val() {
    console.log("hi");
    return 5;
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/browse" component={Browse} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route path="/userpage" component={Userpage} />
            </Router>
        );
    }
}

export default App;
