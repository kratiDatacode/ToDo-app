import { FaEdit, FaTrash } from "react-icons/fa";

const TableSection = ({ todos, onDelete , onEdit}) => {
  return (
    <>
      <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
        <div className="col-md-10">
          <div className="row mx-0 d-flex justify-content-center align-items-center">
            <div className="col-md-6 p-4 rounded shadow bg-white">
              <h3>Your Todos</h3>
              <table className="table table-bordered table-striped text-center align-middle">
                <thead className="table-primary">
                  <tr>
                    <th>Sno.</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Priority</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {todos.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-muted">
                        No todos added yet.
                      </td>
                    </tr>
                  ) : (
                    todos.map((todo, index) => (
                      <tr key={todos.id}>
                        <td>{index + 1}</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td>{todo.priority}</td>
                        <td>
                          <button 
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={()=>onEdit(todo)}
                          >
                            <FaEdit />
                          </button>
                          <button
                           className="btn btn-sm btn-outline-danger"
                           onClick={()=>onDelete(todo.id)}
                           >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableSection;