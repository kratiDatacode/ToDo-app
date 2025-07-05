const FormSection = () =>{

    return(
        <>
         <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
            <div className="col-md-10">
                <div className="row mx-0 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 p-4 rounded shadow bg-white">
                      <h3>Add New Todo:</h3>
                      <form className="d-flex flex-column">
                        <label htmlFor="title">Title*</label>
                        <input 
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter todo title"
                        className="form-control mb-3"
                        />
                        <label htmlFor="description">Description</label>
                        <input 
                        type="text"
                        id="description"
                        name="description"
                        placeholder="Enter todo description(optional)"
                        className="form-control mb-3"
                        />
                        <label htmlFor="priority">Priority</label>
                        <select
                         id="priority"
                         name="priority"
                         className="form-control mb-3"
                        >
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                        </select>
                        <button type="submit" className="btn btn-primary">Add Todo</button>
                      </form>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default FormSection;