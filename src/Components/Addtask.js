import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Addtask() {
    const [taskname, settaskname] = useState('')
    const taskobj = useSelector(store=>store)
    const dispatch = useDispatch()
    function addtask() {
        dispatch({ type: 'ADD_TASK', payload: taskname })
        console.log(taskobj.taskitems)
    }
    return (
        <div>
            
            <div className="row justify-content-center" style={{ fontFamily: 'math'}}>

                <div className="col-md-6 p-3" style={{backgroundColor:'white',borderRadius:'10px'}}>
                <h5 style={{fontFamily:'math'}}>My TO-DO Tasks</h5>
                    <input type="text" className='form-control w-75' style={{ display: 'inline' }} value={taskname} placeholder="Enter New Task" onChange={(e) => { settaskname(e.target.value) }} />
                    <button className='taskbtn' onClick={addtask}>Add Task</button></div>
            </div>
        </div>
    )
}

export default Addtask