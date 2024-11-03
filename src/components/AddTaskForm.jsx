import { useState } from "react"

const AddTaskForm = ({addTask}) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e)=> {
        e.preventDefault()
        addTask(value)
        setValue('')
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={value} 
            onChange={(e)=> setValue(e.target.value)} 
            placeholder="Agregar nueva tarea"/>
            <button type="submit">Agregar</button>
        </form>
    </>
    )
}

export default AddTaskForm