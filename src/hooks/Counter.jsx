import React, { useState, Fragment } from 'react'; // useState is a hook
import useDocumentTitle from './useDocumentTitle';

function Counter(props) {
    // const array = useState(0);
    // const count = array[0]; // === to this.state.count
    // const setState = array[1];  // === to this.setState()
    
    // the values passed into useState are just initial variables
    const [count, setCount] = useState(0);  
    const [name, setName] = useState("");

    useDocumentTitle(`${name} has clicked ${count} times!`); // call custom hook

    return (
        <Fragment>
            <input type="text" onChange={ e => setName(e.target.value) }></input>
            <div>
                {name} has clicked {count} times!
            </div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </Fragment>
    );
}

export default Counter;