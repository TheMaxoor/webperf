import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Header.jsx';
import Pages from './Pages.jsx';
import Home from './Home.jsx';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.mineBitcoin(1500);
    }
    mineBitcoin(duration) {
        const start = new Date().getTime();
        while (new Date().getTime() < start + duration) {
            // TODO(tony): Make $$$
        }
    }
    render() {
        return (
            <Router>
               
                    <div>
                        <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/brrto" component={Pages.Brrto} />
                        <Route path="/pezza" component={Pages.Pezza} />
                        <Route path="/fesh" component={Pages.Fesh} />
                        <Route path="/soop" component={Pages.Soop} />
              
                    </div>
    
            </Router>
        );
    }
}

export default App;
