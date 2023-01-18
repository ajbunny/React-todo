import { useNavigate } from "react-router-dom"
import {NewTodo} from '../services/todos-api'


export default function CreateTodo() {
    
    const nav = useNavigate()

    const New = (e) => {
        const todo = {description: e.target.description.value,
        complete: false}
        NewTodo(todo)
        nav('/')
    }

    return (
    <div id="create">
      <h4> Create a Todo</h4> 
        <form onSubmit={New}>
            <input type="text" name='description' />
            <input type='submit' />
            </form>
    </div>
    )
    }