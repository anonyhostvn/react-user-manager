import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 
import axios from 'axios';
// import { BrowserRouter as Router, Route, Link} from 'react-router-dom' ; 

const Wrapper = styled.div` 
    padding-left : 20rem ; 
    padding-top : 3rem ; 
`; 

const Header = styled.h2`
    text-align:  center ; 
` ; 

export default class Profile extends Component {

    constructor(props) {
        super(props) ; 
        this.state = {
            data : []
        } ; 
    }

    componentDidMount() {
        axios.get("http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users/1")
        .then (
            res => this.setState({
                data : res.data
            })
        )
        .catch (
            error => console.log(error)
        )
    }

    render () {
        return (
            <Wrapper>
                <Header> Profile </Header>
                <ul>
                    <li> Id : {this.state.data.id} </li>
                    <li> Name : {this.state.data.name} </li>
                    <li> Nation : {this.state.data.national} </li>
                    <li> Email : {this.state.data.email} </li>
                </ul>
            </Wrapper>
        ) ; 
    }
}