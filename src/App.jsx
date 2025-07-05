import "./assets/styles/style.scss";
import FormSection from "./components/FormSection"
import TableSection from "./components/TableSection"

const App = () => {
 
  return (
    <>
      <h1 className="text-center mt-3">Todo Manager</h1>
      <p className="text-center text-muted">Organize your tasks efficiently</p>
      <FormSection/>
      <TableSection/>
    </>
  )
}

export default App