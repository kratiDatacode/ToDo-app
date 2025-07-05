const FormSection = () =>{
    return(
        <>
         <section className="row mx-0 py-5 my-5 d-flex justify-content-center align-items-center">
            <div className="col-md-10">
                <div className="row mx-0">
                    <div className="col-md-6">
                      <h3>Add Task :</h3>
                      <form className="d-flex flex-column">
                        <label htmlFor="title">Title:</label>
                        <input 
                        type="text"
                        id="title"
                        name="title"
                        />
                        <label htmlFor="description">Description:</label>
                        <input 
                        type="text"
                        id="description"
                        name="description"
                        />
                        <label htmlFor="due">Due Date:</label>
                        <input 
                        type="text"
                        id="due"
                        name="due"
                        />
                      </form>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default FormSection;