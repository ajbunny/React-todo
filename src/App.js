import logo from './logo.svg';
import './App.css';

import AllToDos from "./components/AllTodos";
import NewTodo from "./components/NewTodo";
import EditTodo from "./components/EditTodo";
import Todo from "./components/Todo";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Todos from './components/AllTodos';



function App() {
  return (
    <div className="App">
      <div id='title'><h1>To-Do List</h1> </div>

    <Router>
      <Routes>
        <Route path='/'element={<AllToDos />} />
        <Route path='/:id' element={<Todo />} />
        <Route path='/:id/edit' element={<EditTodo />} />
      </Routes>
    </Router>

    {/* <Form /> */}
  
    </div>
  );
}

export default App;
