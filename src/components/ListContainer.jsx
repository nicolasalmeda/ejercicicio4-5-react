import React, {useState,useEffect} from "react"
import { Input } from "./Input"
import '../css/listContainer.css'

export const ListContainer = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  return (
    <div className='list-container'>
      <h2 className="title-h2">
        Bienvenido
      </h2>
      <Input onAddTask={addTask}/>
      <ul className="list-task">
        {tasks.map((task, index) => (
          <li key={index}>
          {task}
          <button className="btn-delete" onClick={() => deleteTask(index)}>X</button>
        </li>
        ))}
      </ul>
    </div>
  )
}
