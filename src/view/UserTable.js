import React, {Component} from 'react' ; 
import axios from 'axios' ; 
import '../styles/UserTable.css' ; 
import styled from 'styled-components' ; 
import {Link } from 'react-router-dom' ; 

const Wrapper = styled.div`

` ; 


export default class UserTable extends Component {

    constructor (props) {
        super(props) ; 
        this.state = {data : []} ; 
    }

    componentDidMount() {
        axios.get('http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users')
        .then (
            response => { 
                this.setState({data : response.data}) ; 
            }
        )
        .catch (
            error => console.log(error)
        )
    }

    HandleDelete = RmoveID => {
        if (Number(RmoveID) === 1) {
            alert("You can not delete admin") ; 
            return ; 
        } 
        const url = `http://5ce63f590adb8e0014a6ed73.mockapi.io/api/v1/users/${RmoveID}` ; 
        axios.delete(url)
        .then (
            res => {
                console.log(res) ; 
                if (res.status === 200) {
                    alert ("Delete Succesfully") ; 
                }
                const NewData = this.state.data.filter(temp => temp.id !== RmoveID) ; 
                this.setState({
                    data : NewData
                }) ; 
            }
        )
        .catch (
            error => {
                console.log(error) ; 
                alert("Delete Failed") ; 
            }
        ) ; 
    }

    render () {

        return (
            <Wrapper>
                <h1 className="header"> User </h1>
                <Link to="/add"> Add User </Link>
                <table className="content-table">
                    <thead>
                    <tr>
                        <th> id </th>
                        <th> name </th>
                        <th> national  </th>
                        <th> email </th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* {DisplayContent} */}
                        {this.state.data.map(
                            user => (
                                <tr key={user.id}>
                                    <th> {user.id} </th>
                                    <th> {user.name} </th>
                                    <th> {user.national} </th>
                                    <th> {user.email} </th>
                                    <th> <button onClick={() => this.HandleDelete(user.id)}> Delete </button></th>
                                    <th> <Link to={{pathname : `/edit/${user.id}`}}> Edit </Link></th>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </Wrapper>
        ) ; 
    }
}