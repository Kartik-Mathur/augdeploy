import { useEffect, useState } from 'react';
import './App.css';
import axios from './utils/axios.js';

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data } = await axios.get('/todos');
        console.log(data);
        setTodos(data.todos);
      }
      catch (err) {
        alert(err);
      }
    }

    getTodos();

  }, [])
  return (
    <div className="App">
      Hello World
      {todos.map((t, indx) => <div key={indx}>{t}</div>)}
    </div>
  );
}

export default App;
