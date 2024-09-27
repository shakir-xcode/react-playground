import React, {useState} from 'react'

const IndexAsKey = () => {
    const [todos, setTodos] = useState([
        'Learn React',
        'Build a Todo App',
        'Explore Hooks'
      ]);

      const [sorted, setSorted] = useState(false);
    
      const addTodo = () => {
        setTodos([...todos, 'New Task' ]);
      };
    
      const deleteTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
      };
    
      return (
        <div>
          <button onClick={addTodo}>Add Todo</button>
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <input className='bg-white border-2' value={todo} onChange={(e) => {
                  const newTodos = [...todos];
                  newTodos[index] = e.target.value;
                  setTodos(newTodos);
                }} />
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </li>
            ))}
          </ul>
          <button onClick={() => {
            setTodos(todos.sort())
            setSorted(true);
          }}>Sort</button>
        </div>
      );
    }
export default IndexAsKey