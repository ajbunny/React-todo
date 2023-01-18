import React from 'react'
import { useState, useEffect } from 'react'
import { getTodo, deleteTodo } from "../services/todos-api"
import { useParams, useNavigate } from 'react-router-dom'

export default function Todo() {
    //setting up the main page
    const nav = useNavigate()
    // destructuring the id parameter for use - this method must have parameters
    const { id } = useParams() 
    // setting up our state
    const [todo, setTodo] = useState ({}) 
    useEffect (()=> {
        getTodo(id)// get the one ToDo from the api using the id
        .then(res => setTodo(res.data))
    }, [])

    const deleteTheTodo = () => {
        //delete function goes here
        deleteTodo(id)
        //navigate back to the main page
        nav('/')
    }
    return(
        <div>
            <h1>Todo:</h1>
            <h3>Description: {todo.description}</h3>
           <h4>  Complete: <input type='checkbox'
            defaultChecked={todo.complete}/></h4>
            <button onClick={() => {nav('/${id}/edit')}}>Edit</button>
            <button onClick={deleteTheTodo}>Delete</button>
            <button onClick={() => {nav('/')}}>Main</button>
        </div>
    )
}