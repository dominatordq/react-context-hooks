import React, { useContext } from 'react';
import UserContext from './userContext';
import CartContext from './cartContext';

// Context in a functional component
function MovieRow(props) {
    const userContext = useContext(UserContext); // returns our user context object
    const cartContext = useContext(CartContext); // returns our cart context object
    
    // console.log('context', userContext);
    console.log('Cart context', cartContext);

    return (
        <div>
            Movie Row {userContext.currentUser ? userContext.currentUser.name : ''}
        </div>
    );
}

export default MovieRow;