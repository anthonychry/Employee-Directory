import React, { Component } from "react";
import Container from "./Container";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import Row from "./Row";
import Header from "./Header";
import TableHead from "./TableHead";

class UserContainer extends Component {
    state = {
        solution: [],
        search: "",
        sort: false
    }

    searchUsers = () => {
        API.search()
            .then(res => {
                this.setState({
                    solution: res.data.results
                })
                console.log(res.data);
            })
            .catch(err => console.log(err))
    };

    componentDidMount() {
        this.searchUsers();
    }

    sortUserNames = (users) => {
        var ascending = users.sort();
        var descending = users.reverse();

        // if 
    };

    render() {
        console.log(this.state.solution)
        return (
            <Container>
            <Header />
                <SearchForm />
                <TableHead />
                {this.state.solution.map((user) => 
                    <Row 
                        thumbnail={user.picture.thumbnail}
                        first={user.name.first}
                        last={user.name.last}
                        cell={user.cell}
                        email={user.email}
                        dob={user.dob.date}
                        ></Row>)}
            </Container>
        )
    }
}
export default UserContainer;