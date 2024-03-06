import Navbar from "./components/Navbar";
import Index from "./pages/index"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

function App() {


  return (
    <>
      <div className="app w-100vw">
      <Navbar />
        <Index />
        </div>
    </>
  )
}

export default App
