import { useState } from "react";
import "./assets/styles/style.scss";
import FormSection from "./components/FormSection";
import TableSection from "./components/TableSection";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleSave = (todo) => {
    if (editTodo) { 
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id ? { ...todo, id: editTodo.id } : t
      );
      setTodos(updatedTodos);
      setEditTodo(null);
    }else{
    const newTodo = { ...todo, id: Date.now() };
    setTodos([...todos, newTodo]);
    }
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  return (
    <>
      <h1 className="text-center mt-3">Todo Manager</h1>
      <p className="text-center text-muted mb-0">
        Organize your tasks efficiently
      </p>
      <div className="row mx-0">
        <div className="col-md-6">
         <FormSection onSave={handleSave} editTodo={editTodo} />
        </div>
     <div className="col-md-6"> 
      <TableSection todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
     </div>
      </div>
    </>
  );
};

export default App;