import { useState } from "react";
import "./assets/styles/style.scss";
import FormSection from "./components/FormSection"
import TableSection from "./components/TableSection"

const App = () => {

  const [todos,setTodos]=useState([]);

  const handleSave = (todo) =>{
    const newTodo = {...todo,id:Date.now()};
    setTodos([...todos,newTodo]);
    console.log("Todo added :",newTodo)
  }

  const handleDelete = (id) => {
    const filteredTodos = todos.filter(todo => todo.id!==id);
    setTodos(filteredTodos);
  };

  return (
    <>
      <h1 className="text-center mt-3">Todo Manager</h1>
      <p className="text-center text-muted mb-0">Organize your tasks efficiently</p>
      <FormSection onSave={handleSave}/>
      <TableSection todos={todos} onDelete={handleDelete}/>
    </>
  )
}

export default App