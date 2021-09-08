import { ADD_TASK, COMPLETE_TASK, DELETE_TASK, EDIT_TASK } from "./ActionTypes";

const init = {
    tasks:[
        {id: Math.random(), action: "wake up", isDone: true},
        {id: Math.random(), action: "go out", isDone: false},
    ]
}

const reducer = (state=init , {type, payload}) =>
{
    switch (type) {
        case ADD_TASK:
            return{
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Math.random(),
                        action: payload,
                        isDone: false
                    }
                ]
            }
        case COMPLETE_TASK:
            return{
                ...state,
                tasks: state.tasks.map((el) => el.id === payload ? {...el, isDone: !el.isDone}: el)
            }
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(el=> el.id !== payload)
            }
        case EDIT_TASK:
            return {
                ...state,
                tasks: state.tasks.map(el=>el.id===payload.id?{...el,action:payload.edited}:el)
            }
    
        default:
            return state
    }
}

export default reducer;