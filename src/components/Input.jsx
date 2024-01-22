import React, {useState} from "react"
import '../css/input.css'

export const Input = ({onAddTask}) => {
  const [task,setTask] = useState('')

  const handleInput = (e) => {
    setTask(e.target.value)
  }

  const handleKeyPress = (e) => {
    if(e.key === 'Enter' && task !== ''){
      onAddTask(task)
      setTask('')
    }
  }
  return (
    <div className="input">
      <h4>Ingrese tus tareas</h4>
      <input 
          type='text' 
          placeholder='Ingrese sus tareas'
          value={task}
          onChange={handleInput}
          onKeyDown={handleKeyPress}
      />
    </div>
  )
}
