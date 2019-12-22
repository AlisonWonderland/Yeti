import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Userpage from './components/Userpage';

function val() {
    console.log("hi");
    return 5;
}

class App extends React.Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route path="/userpage" component={Userpage} />
            </Router>
        );
    }
}

export default App;
