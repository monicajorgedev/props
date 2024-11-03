import { useState } from 'react';
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);

  const addTask = (text) => {
    setTasks([...tasks, {id: tasks.length+1, text: text, completed: false}])
  }

  const deleteTask = (id)=> {
    setTasks(tasks.filter(task => task.id !== id));
  }

  const maskAsCompleted = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task))
  }
  
  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={addTask}/>
      {tasks.map((element)=> (
        <Task {...element} deleteTask={deleteTask} maskAsCompleted={maskAsCompleted} key={element.id}/>
      ))}
    </>
  );
};

export default App;
