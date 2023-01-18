//All of our endpoints
import axios from 'axios';
const baseURL= 'http://localhost:3001/todos'//our base URL

export const getTodos = () => {
    const URL = baseURL;
    const response = axios.get(URL) //using axios's getting functionality 
    return response
}

//SHOW TODO
export const getTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response = axios.get(URL)
    return response
}
//EDIT TODO
export const editTodo = (id, updatedTodo) => {
    const URL = `${baseURL}/${id}`;
    const response = axios.put(URL, updatedTodo)
    return response
}

// CREATE THE TODO (new todo)
export const NewTodo = (todo) => {
    const URL = baseURL
    const response =axios.post(URL, todo)
    return response
}
//DELETE THE TODO
export const deleteTodo = (id) => {
    const URL = `${baseURL}/${id}`
    const response =axios.delete(URL)
    return response
}




