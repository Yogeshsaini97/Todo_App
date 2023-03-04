import React from 'react'
import "./Todo.css"
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle,TextField } from "@mui/material";

const Todo = () => {

    return (
        <div className="todo">
            <div className="innerdiv"><div style={{color:"#0092cd"}}>to</div>do</div>
           <div className="innerdiv"> <div ><TextField id="outlined-light" label="Add a new task" variant="outlined" style={{backgroundColor:"#282c34",width:"80%",borderRadius:"0.5rem"}}  /><Button variant="contained">Create</Button></div></div>
            <div className="innerthirddiv">
            <div className="createTask">
            <div>Create tasks</div>
            <div>Completed</div>

            </div>
            <div className="Dynamictask" >
            <div className="Dynamictaskinside" style={{}}>dsdsds</div>

</div>

            
            
            </div>
        </div>
    )
}

export default Todo
