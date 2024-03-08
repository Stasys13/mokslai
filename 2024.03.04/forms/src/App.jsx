import { useState } from 'react'
import Form from '../components/form/Form';
import './App.css'

const App = () => {
  // CREATE
  // Update Formos sablonas
  const [data, setData] = useState({
    name: '',
    topic: '',
    message: ''
  });
  
  const handleChange = (e) => {
      // console.log(e.target.value);
      // console.log(e.target.name);
      setData({ ...data, [e.target.name] : e.target.value });
  }


  // CRUD: CREATE - READ - UPDATE - DELETE

  return (
    <>
      <form>
        
        <div className="mb-3">
          <input type="text" 
            className="form-control"
            placeholder="Iveskite savo varda"
            name="name"
            onChange={handleChange} 
            />
        </div>
        <div className="mb-3">
          <input type="text" 
            className="form-control"
            placeholder="Iveskite tema"
            name="topic"
            onChange={handleChange} 
            />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Iveskite zinute"
            name="message"
            onChange={handleChange}
           ></textarea>
        </div>
        <div>Vardas: {data.name}</div>
        <div>Tema: {data.topic}</div>
        <div>Zinute: {data.message}</div>
      </form>
      <Form />
    </>
  )
}

export default App
