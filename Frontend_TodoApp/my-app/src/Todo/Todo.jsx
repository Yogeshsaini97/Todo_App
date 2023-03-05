import React,{useEffect,useState} from 'react'
import "./Todo.css"
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle,TextField } from "@mui/material";
import {fetchApi,deleteTask} from "../Controller/Controller.jsx"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


const Todo = () => {

    const [allTask, setAllTask] = useState(null);
    const [createTask,setCreateTask]=useState("");


    useEffect(() => {


        fetchData();
    
    }, [])

    const fetchData= async()=>
    {
        
       let myTasks=await fetchApi("GET",`http://localhost:5000/TodoApp/task`);
       setAllTask(myTasks.Data);



    }

    const CreatePayloadandsend=()=>
    {
     
     let payload={
            "email":"yogeshx@gmail.com",
            "task":createTask,
            "completed":false
        }



        fetchApi("POST",`http://localhost:5000/TodoApp/task`,payload).then(()=>
                    {alert("Task Created successfully");window.location.reload();}).catch(()=>{
                        alert("could not Created, please contact administrator")
                    })

    }

    const Updateandsend=async (id)=>
    {
     

        let result=await fetchApi("GET",`http://localhost:5000/TodoApp/task/${id}`)
    

        console.log(result.data.completed)
        let payload;

        if(result.data.completed===true)
        {
            
         payload={
            "completed":false
        }

        }
        else{
             payload={
                "completed":true
            }
        }

         



       let changedResult=await fetchApi("PUT",`http://localhost:5000/TodoApp/task/update/${id}`,payload);
       console.log(changedResult)

    }

    return (
        <div className="todo">
            <div className="innerdiv" style={{color:"#6256c0"}}><div style={{color:"#0092cd"}}>to</div>do</div>
           <div className="innerdiv"> <div className="Textfield" ><TextField value={createTask} onChange={(e)=>{setCreateTask(e.target.value)}} id="outlined-light" label="Add a new task" variant="outlined" style={{backgroundColor:"#282c34",width:"80%",borderRadius:"0.5rem"}}  /><Button variant="contained" onClick={()=>{CreatePayloadandsend()}}>Create</Button></div></div>
            <div className="innerthirddiv">
            <div className="createTask my-2" >
        
            <div style={{color:"#0092cd"}}>Created tasks {allTask && allTask.length} </div>
            <div style={{color:"#6256c0"}}>Completed </div>
            

            </div>
            <div className="Dynamictask" >
            {
                allTask && allTask.map((data,index)=>
                {
                    return  <>


                    <div className="Dynamictaskinside my-2" >{data.task}<div><DeleteForeverIcon onClick={()=>fetchApi("DELETE",`http://localhost:5000/TodoApp/task/delete/${data._id}`).then(()=>
                    {alert("Task deleted successfully");window.location.reload();}).catch(()=>{
                        alert("could not delete, please contact administrator")
                    })}/>
                    </div><div><button  onClick={()=>{Updateandsend(data._id)}}> mark as completed</button></div></div>
                    </>

                })
            }
           

</div>

            
            
            </div>
        </div>
    )
}

export default Todo
