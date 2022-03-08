import React from 'react'
import { useSelector } from 'react-redux'

function Navbar() {
    const taskobj=useSelector(store=>store)
    return (
        <div style={{ backgroundColor: 'white', borderRadius: '50px', marginTop: '30px' }}>
            <h4 style={{ fontFamily: 'math' }}>Total Remaining Tasks : {taskobj.taskitems.length}</h4>

        </div>
    )
}

export default Navbar