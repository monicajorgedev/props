const Task = ({id, text, completed, deleteTask, maskAsCompleted }) => {

    return (
        <>
            <li>
                <p onClick={()=> maskAsCompleted(id)} 
            style={completed ? { textDecoration: 'line-through'}: {}}>{text}</p>
                <button onClick={() => deleteTask(id)}>Eliminar</button>
            </li>
            
        </>
    )
}

export default Task