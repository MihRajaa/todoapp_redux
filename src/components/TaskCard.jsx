import React from 'react'
import { useDispatch } from 'react-redux'
import {deleteTask,completeTask} from '../redux/Actions'
import EditTask from './EditTask'

const TaskCard = ({task}) => {
    const dispatch = useDispatch()
    return (
        <div>
            <h2 className={task.isDone ? "done" : ""} >  {task.action}  </h2>
            <button onClick={()=>dispatch(deleteTask(task.id))} >Delete</button>
            <button onClick={()=>dispatch(completeTask(task.id))} >Complete</button>
            <EditTask task={task} />
        </div>
    )
}

export default TaskCard
