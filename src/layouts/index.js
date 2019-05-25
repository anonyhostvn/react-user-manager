import React, {Component} from 'react' ; 
import {Route, Switch} from 'react-router-dom' ; 
// import LayoutRouter from '../routes/LayoutRouter' ; 
import Home from './Home' ; 
import AddUser from './AddUser';
import EditUser from './EditUser';

export default class index extends Component {
    render () {
        return (
            <Switch>
                <Route path='/edit/:id' component={EditUser}/>
                <Route exact path="/add" component={AddUser}/>
                <Route path="/" component={Home}/>
            </Switch>
        ) ; 
    }
}