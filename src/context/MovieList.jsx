import React, { Component } from 'react';
import UserContext from './userContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
    static contextType = UserContext; // allows userContext to be accessed anywhere

    componentDidMount() {
        console.log('context', this.context); // this.context returns current user object
    }
    
    render() {
        return (
            <UserContext.Consumer>
                { userContext => (
                    <div>
                        Movie List {userContext.currentUser ? userContext.currentUser.name : ''} <MovieRow />
                    </div> 
                )}
            </UserContext.Consumer>
        );
    }
}

// MovieList.contextType = UserContext; 

export default MovieList;