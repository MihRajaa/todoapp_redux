import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./ActionTypes"

export const addTask = (text) =>
{
    return {
        type: ADD_TASK,
        payload: text
    }
}

export const completeTask = (id) =>
{
    return {
        type: COMPLETE_TASK,
        payload: id,
    }
}

export const deleteTask = (id) =>
{
    return {
        type: DELETE_TASK,
        payload: id,
    }
}

export const editTask = (id, edited) =>
{
    return {
        type: EDIT_TASK,
        payload: {id,edited}
    }
}