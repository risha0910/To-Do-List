import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
function Todoitem({ task }) {

    const dispatch = useDispatch()
    const [show, setshow] = useState('none')
    const[newtask,setnewtask]=useState('')
    function deletetask(task) {
        dispatch({ type: 'DELETE_TASK', payload: task })


    }
    function edittask(){
        setshow('inline')

    }
    function finaledit(task){
        dispatch({type:'EDIT_TASK',payload:{oldtask:task, newtask:newtask}})
        setshow('none')

    }


    return (
        <div>
            <div className='row justify-content-center'>
                <div className="col-md-9" style={{paddingTop:'12px'}}>
                    <h5>{task}</h5>
                </div>
                <div className='col-md-1'>
                    <button className='btn btn-success m-1'style={{padding:'6px'}} onClick={edittask}>Edit</button>
                </div>
                <div className='col-md-1' style={{paddingRight:'80px'}}>
                    <button className='btn btn-danger m-1' onClick={() => deletetask(task)}>Delete</button>
                </div>
                <input type="text" style={{display:show}} value={newtask} onChange={(e)=>{setnewtask(e.target.value)}}/>
                <button style={{display:show}} className="taskbtn m-1" onClick={()=>{finaledit(task)}}>Update</button>



            </div>
            <hr/>


        </div>
    )
}

export default Todoitem