import React, {Component} from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import Main from './components/page/Main';
import Button from './components/MyAppBar';

class App extends Component {
    render(){
        return(
            <div>
                <Link to ='/home' ><Button>Home</Button></Link>&nbsp;&nbsp;
                <Link to ='/profile' ><Button>profile</Button></Link>&nbsp;&nbsp;
                <Link to ='/portofolio' ><Button>Portofolio</Button></Link>&nbsp;&nbsp;
                <Link to ='/contact' ><Button>Contact</Button></Link>&nbsp;&nbsp;
                <hr/>
                <Main/>
            </div>
        )
    }
}

export default App;
