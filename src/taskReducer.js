const initialData={
    taskitems:[]
}
function taskReducer(state=initialData,action){
    switch(action.type){
        case 'ADD_TASK':return{
            ...state,
            taskitems:[...state.taskitems, action.payload]
        }
        case 'DELETE_TASK':return{
            ...state,
            taskitems: state.taskitems.filter((task)=>task!=action.payload)
        }
        case 'EDIT_TASK':return{
            ...state,
            taskitems:state.taskitems.map((task)=>{
                if(task==action.payload.oldtask)
                task=action.payload.newtask
                return task
            })
        }
    }
    return state
}
export default taskReducer