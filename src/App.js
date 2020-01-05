import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import Prices from './Prices';


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <ul>
                    <li><Link to='/Contact'>Contact us</Link></li >
                    <li><Link to='/Prices'>Prices</Link></li>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Home'>Home</Link></li>
                    <li class="contact-data">+48 735 800 009</li>
                    <li>info@bewarsaw.com</li>
                </ul>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Services" component={Services} />
                    <Route path="/Prices" component={Prices} />
                </div></BrowserRouter>
        )
    }

}


export default App;