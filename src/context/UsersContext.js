import React, { createContext, useReducer } from 'react';
import users from '../data/users';

const initialState = { users };
const UsersContext = createContext({});

export const UsersProvider = props => {

    function reducer(state, action){
        console.warn(action);
        return state;
    }
    
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UsersContext.Provider
            value={{ state, dispatch }}
        >
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersContext;