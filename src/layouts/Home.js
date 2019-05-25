import React, {Component} from 'react' ; 
import {Route, Link , Switch} from 'react-router-dom' ; 
import styled from 'styled-components' ; 

import '../styles/MainLayout.css' ; 
// import HomeRouter from '../routes/HomeRouter' ; 
import UserTable from '../view/UserTable' ; 
import Profile from '../view/Profile' ; 

const Navbar = styled.div`
    padding : 2rem ; 
    background-color : papayawhip ; 
    display: flex ; 
    flex-direction: column ; 
    position: fixed ; 
    z-index: 100 ; 
    height : 100vh ; 
` ; 

const CPart = styled.div`
    display: flex ; 
    flex-direction: column ;
    padding-left: 20rem ; 
` ; 

export default class Home extends Component {

    constructor(props) {
        super(props) ; 
        this.HandleLinking = this.HandleLinking.bind(this) ; 
        this.state = {
            view : "/"
        } ; 
    }

    HandleLinking(linker) {  
        this.setState({
            view : {linker}
        }) ; 
    }

    render () {
        return (
            <div className="main-container">
                <Navbar>
                    <h1> User Manger </h1>
                    <Link to="/"> Home </Link>
                    <Link to="/profile"> Profile </Link>
                </Navbar>

                <CPart> 
                    <Switch>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/" component={UserTable}/>
                    </Switch>
                </CPart>
            </div>
        ) ; 
    }
}