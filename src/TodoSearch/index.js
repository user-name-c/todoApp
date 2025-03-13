import React from 'react';
import './TodoSearch.css';

function TodoSearch(
    {searchValue, setSearchValue}
) {
    
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