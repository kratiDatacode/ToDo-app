import { useEffect, useState } from "react";

const FormSection = ({ onSave , editTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  
  useEffect(()=>{
    if(editTodo){
      setTitle(editTodo.title);
      setDescription(editTodo.description);
      setPriority(editTodo.priority);
    }else{
      setTitle('');
      setDescription('');
      setPriority('Medium');
    }
  },[editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title,
      description,
      priority,
    };

    onSave(newTodo);

    setTitle("");
    setDescription("");
    setPriority("Medium");
  };

  return (
    <>
      <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="row mx-0 d-flex justify-content-center align-items-center">
            <div className="col-md-12 p-4 rounded shadow bg-white">
              <h3>Add New Todo:</h3>
              <form onSubmit={handleSubmit} className="d-flex flex-column">
                <label htmlFor="title">Title*</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  required
                  placeholder="Enter todo title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control mb-3"
                />
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  id="description"
                  name="description"
                  value={description}
                  placeholder="Enter todo description (optional)"
                  className="form-control mb-3"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <label htmlFor="priority">Priority</label>
                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  className="mb-3"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
                <button type="submit" className="btn btn-primary">
                 {editTodo ? "Update Todo" : "Add Todo"}
                </button>
              </form>
            </div>
          </div>
        </div> 
      </section>
    </>
  );
};

export default FormSection;