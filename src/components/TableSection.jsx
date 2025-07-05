const TableSection = () =>{
    return(
        <>
         <section className="row mx-0 py-5 d-flex justify-content-center align-items-center">
            <div className="col-md-10">
                <div className="row mx-0 d-flex justify-content-center align-items-center">
                    <div className="col-md-6 p-4 rounded shadow bg-white">
                     <h3>Your Todos</h3>
                     <table className="table table-bordered table-striped text-center align-middle">
                        <thead className="table-primary" >
                            <tr>
                                <th>Sno.</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Priority</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>buy clothes</td>
                                <td>for tomorrow event</td>
                                <td>low</td>
                            </tr>
                        </tbody>
                     </table>
                    </div>
                </div>
            </div>
         </section>
        </>
    )
}

export default TableSection;