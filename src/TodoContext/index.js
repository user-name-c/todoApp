import React from 'react';
import { useLocalStorage } from './useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider ({children}){
    const [todos, setTodos, loading, error] = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openModal, setOpenModal] = React.useState(false);
    
    const completedTodos = todos.filter(
      todo => !!todo.completed
    ).length;
    
    const totalTodos = todos.length;
  
    const searchedTodos = todos.filter(
      (todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      }
    );
    const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex = newTodos.findIndex(
          (todo) => todo.text == text
        );
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
    const newTodos= [...todos];
    const todoIndex = newTodos.findIndex(
        (todo) => todo.text ==text
    );
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
    };

    return(
    <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
    );
}

export{TodoContext, TodoProvider};