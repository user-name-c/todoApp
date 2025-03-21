import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {
        searchValue,
        setSearchValue,
    } = React.useContext(TodoContext);
    
    return(
        <input 
        placeholder="Cortar cebolla"
        className='TodoSearch'
        value={searchValue}
        onChange={(event) =>{
            // console.log('Escribiste en el TodoSearch');
            // console.log(event);
            // console.log(event.target);
            setSearchValue(event.target.value);
            }
        }
        />
    );
}

export {TodoSearch};