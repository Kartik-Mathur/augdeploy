import { useEffect } from 'react';
import './App.css';
import axios from './utils/axios.js';

function App() {
  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data } = await axios.get('/todos');
        console.log(data);
      }
      catch (err) {
        alert(err);
      }
    }
    
    getTodos();

  })
  return (
    <div className="App">
      Hello World
    </div>
  );
}

export default App;
