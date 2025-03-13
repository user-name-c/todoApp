import'./TodoCounter.css'

function TodoCounter({total, completed}) {
    return(
        <h1 className="TodoCounter">
            { total === completed
                ? 'Felicidades, completaste todos los TODOs!!'
                : `Has completado ${completed} de ${total} TODOs`
            }
        </h1>
    );
}

export { TodoCounter };