import logo from './logo.svg';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';
import Users from './hooks/Users';

import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from './context/cartContext';
import Login from './context/Login';

class App extends Component {
  handleLoggedIn = (username) => {
    console.log('Getting the user: ' + username);
    const user = { name: 'Dom' }; // simulates getting a user from a db
    this.setState({ currentUser: user }); // update context
  }

  state = { currentUser: null };

  render() {
    return (
      <CartContext.Provider value={{ cart: [] }}>
        <UserContext.Provider 
          value={{ // any component in our component tree can access these values
            currentUser: this.state.currentUser, 
            onLoggedIn: this.handleLoggedIn 
          }}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;

// function App() {
//   return (
//     <Users />
//   );
// }

// export default App;
