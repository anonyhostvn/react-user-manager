import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 

const Wrapper = styled.div`
    position : absolute ; 
    height : 100% ;
    width : 30% ; 
    background-color: papayawhip ; 
` ; 

export default class Navbar extends Component {
    render () {
        return (
            <Wrapper>
                <h1> User manager </h1>
                <ul>        
                    <li> <a href="/"> Home </a> </li>
                    <li> <a href="/profile"> Profile </a> </li>
                    <li> Setting </li>
                </ul>
            </Wrapper>
        ) ;
    }
}