import{TodoCounter} from './TodoCounter';
import{TodoSearch} from './TodoSearch';
import{TodoList} from './TodoList';
import{TodoItem} from './TodoItem';
import logo from './platzi.webp';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCounter/>
      <TodoSearch/>
    
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
    
      {/* <CreateTodoButton/> */}
    </div>
  );
}

function TodoCount(props){
  return(
    <h1>
      Completaste
      {props.completed} de 
      {props.total} TODOs
    </h1>
  );
}

export default App;
