import './TodoForm.css';
import React from 'react';
import { TodoContext } from '../TodoContext';


function TodoForm(){
    const{setOpenModal, addTodo} = React.useContext(TodoContext);

    //se crea un estado para guardar el nuevo todo
    const[newTodoValue, setnewTodoValue] = React.useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onChange = (event) => {
        setnewTodoValue(event.target.value);
    };

    return(
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <label>Escribe tu nueva tarea </label>
        <textarea placeholder="Cortar cebolla para el almuerzo"
        value={newTodoValue}
        onChange={onChange}
        />
        <div className='TodoForm-buttonContainer'>
            <button className="TodoForm-button TodoForm-button--cancel" 
            onClick={onCancel}>
                Cancelar
            </button>
            <button className="TodoForm-button TodoForm-button--add"
            onClick={onSubmit}>
                Añadir
            </button>
        </div>
        
      </form>  
    );
}

export {TodoForm};