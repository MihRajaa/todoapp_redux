import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/Actions'

const AddTask = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(text));
        setText("")
    };
    return (
        <div>
            <h1>Hello</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleChange} />
                <button type="submit" >Add</button>
            </form>
        </div>
    )
}

export default AddTask
