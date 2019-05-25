import React, {Component} from 'react' ; 
import axios from 'axios';
import styled from 'styled-components' ; 
import {Link} from 'react-router-dom' ;

const Key = styled.p`
    color : green ; 
` ; 

const Table = styled.table`
    border : 1px solid red ; 
    margin-bottom : 1rem ; 
` ; 

const Wrapper = styled.div`
    padding-left : 40% ; 
` ; 

export default class EditUser extends Component {
    constructor(props) {
        super(props) ; 
        this.state ={
            id : this.props.match.params.id,
            name : "" , 
            national : "" , 
            email : ""
        }
    }

    componentDidMount () {
        let x = this.props.match.params.id ; 
        axios.get(`http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users/${x}`)
        .then (
            res => {
                console.log(res) ; 
                const newState = {
                    name : res.data.name,
                    national : res.data.national , 
                    email : res.data.email
                }

                this.setState(newState) ; 
            }
        )
        .catch (
            error => {
                console.log(error) ; 
            }
        )
    }

    HandleChange = (event) => {
        const {name , value} = event.target ; 
        this.setState({
            [name] : value 
        }) ; 
    }

    HandleClick = () => {
        const dataChange = {
            name : this.state.name, 
            national : this.state.national, 
            email : this.state.email
        }
        const url = `http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users/${this.state.id}` ;
        axios.put(url , dataChange)
        .then(
            res => {
                console.log(res) ; 
                if (res.status === 200) alert("Edit Successfully") ; 
            }
        )
        .catch (
            error => {
                console.log(error) ; 
                alert("Edit Failed") ; 
            }
        )
    }

    render () {  
        return (
            <Wrapper>
                <Link to="/"> Go home </Link>
                <h1> Edit User </h1>
                <Table>
                    <thead>
                        <tr>
                            <th> Key </th>
                            <th> Value </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th> <Key> id </Key> </th>
                            <th>
                                <input type="text" value={this.state.id} disabled/>
                            </th>
                        </tr>
                        <tr>
                            <th><Key> name </Key></th>
                            <th> <input name="name" type="text" value={this.state.name} onChange={this.HandleChange}/> </th>
                        </tr>
                        <tr>
                            <th> <Key> national </Key></th>
                            <th> <input name="national" type="text" value={this.state.national} onChange={this.HandleChange}/> </th>
                        </tr>
                        <tr>
                            <th> <Key> email </Key></th>
                            <th> <input name="email" type="text" value={this.state.email} onChange={this.HandleChange}/> </th>
                        </tr>
                    </tbody>
                </Table>

                <button onClick={this.HandleClick}> Change </button>
            </Wrapper>
        ) ; 
    }
}