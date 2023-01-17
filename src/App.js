import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';

function App() {
  
  const [items, setItems] = useState([
    {id: 1, name: "Buy shopping", priority: "high"},
    {id: 2, name: "Clean bathroom", priority: "low"},
    {id: 3, name: "Pay CodeClan", priority: "high"},
    {id: 4, name: "Take dog for walk", priority: "high"}
  ])

  const [newItem, setNewItem] = useState("")

  const [priority, setPriority] = useState("")

  const handleItemInput = (evt) => {
    setNewItem (evt.target.value)
  } 

  const saveNewItemWithPriority = (evt) => {
    evt.preventDefault()
    const newItemObject = {id: Date.now(), name: newItem, priority: priority}
    const newListOfItems = [...items, newItemObject]
    setItems(newListOfItems)
    setNewItem("")
    setPriority("")
  }

  const completedItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
  }

  const handlePriorityChange = (evt) => {
    setPriority(evt.target.value);
  }
  
  const toDoList = items.map((item) => {
    return ( 
    <li key={(item.id)} className={item.priority} >
      {item.name}
      <button onClick={() => {completedItem(item.id)}}>Completed</button>
    </li>
  )
  })

  return (
    <div className="App">
    <h1> To Do List </h1>

    <hr></hr>


    <ul>
      {toDoList}
    </ul>

    <form onSubmit={saveNewItemWithPriority}>
      <label htmlFor="new-item"> Add new Item</label>
      <input id="new-item" type="text" value={newItem} onChange={handleItemInput} />
      <label htmlFor="low-priority">Low Priority</label>
      <input type="radio" id="low-priority" name="priority" value="low" checked={priority === "low"} onChange={handlePriorityChange}/>
      <label htmlFor="high-priority">High Priority</label>
      <input type="radio" id="high-priority" name="priority" value="high" checked={priority === "high"} onChange={handlePriorityChange}/>
      <input type="submit" value="Save New Item" ></input>
    </form>


  </div>
  )
}

export default App;
