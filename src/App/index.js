import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];


function App() {

  const[todos, setTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
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

  // console.log('Los usuarios buscan todos de ' + searchValue);
  console.log('Log 1');

  // // se ejecuta despues de cada render
  // React.useEffect(() => {
  //   console.log('Loooooooog 2');
  // });

  // // se ejecuta solo una vez
  // React.useEffect(() => {
  //   console.log('Loooooooog 2');
  // }, []);

  // se ejecuta al cambiar totalTodos
  React.useEffect(() => {
    console.log('Loooooooog 2');
  }, [totalTodos]);

  console.log('Log 3');

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
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

// function TodoCount(props){
//   return(
//     <h1>
//       Completaste
//       {props.completed} de 
//       {props.total} TODOs
//     </h1>
//   );
// }

export default App;
