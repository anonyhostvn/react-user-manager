import React, {Component} from 'react' ; 
import styled from 'styled-components' ; 
import axios from 'axios';
import {Link} from 'react-router-dom'; 

const Wrapper = styled.div`
    padding-left : 20rem ; 
    display : flex ; 
    flex-direction: column ; 
` ; 

const Input = styled.input`
    width : 15rem ; 
` ; 

const Button = styled.button`
    width : 5rem ; 
` ; 

const Form = styled.form`
    display : flex ; 
    flex-direction: column ; 
` ; 

const Result = styled.h4`
    color : ${props => (props.status === "true") ? 'green' : 'red'} ; 
` ; 

export default class AddUser extends Component {
    constructor(props) {
        super (props) ; 
        this.state = {
                name : "",
                national : "", 
                email : "", 
                status : null
        }
    }

    HandleChange = event => {
        const {name, value}= event.target;  
        this.setState({
            [name] : value
        }) ;    
    }

    HandleAdding = () => {
        const data = {
            name : this.state.name,   
            email : this.state.email, 
            national : this.state.national
        } ; 

        axios.post("http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users/" , data)
        .then(response => {
            console.log(response.status) ; 
            if (response.status === 201) {
                    this.setState({
                        status : true
                    }) ; 
            }   
        })
        .catch(error => {
            console.log(error) ; 
            this.setState({
                status : false
            }) ; 
        }) ; 
    }

    render () { 

        return (
            <Wrapper>
                <Link to="/"> Go home </Link>
                <h1> Add new user </h1>
                <Form>
                    <Input type="text" name="name" value={this.state.name} onChange={this.HandleChange} placeholder="Enter Name"/>
                    <Input type="text" name="national" value={this.state.national} onChange={this.HandleChange} placeholder="Enter national"/>
                    <Input type="text" name="email" value={this.state.email} onChange={this.HandleChange} placeholder="Enter email"/>
                </Form>
                <Button onClick={this.HandleAdding}> Submit </Button>
                {
                    (this.state.status !== null)
                        ? (this.state.status === true)
                            ? (<Result status="true"> Create Succesfully </Result>)
                                : (<Result status="false"> Create Failed </Result>)
                        : (null) 
                }
            </Wrapper>
        ) ; 
    }
}