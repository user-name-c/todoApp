import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
        <button className="CreateTodoButton"
        onClick = {
            ()=> {console.log('le diste click');
            // console.log(event);
            // console.log(event.target);
            // setOpenModal(state => !state);
            }
        }
        >+</button>
    );
}

export { CreateTodoButton };