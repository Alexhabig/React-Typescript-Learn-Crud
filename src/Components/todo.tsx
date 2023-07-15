
import * as fi from "react-icons/fi"
import Iconbtn from "./iconbutton";
import {ITodoProps } from "../types";



const Todo = ({todo, setNewTodo,onDelete,onComplete}:ITodoProps) =>{
    
    console.log(
        {   
        id: todo.id,
        desc: todo.desc,
        title: todo.title,
        }
    )

    return(
        <div className="flex  rounded-sm py-1 gap-x-10 px-4 items-center border-b-2 justify-between min-w-[70%]">
            <div className={`flex flex-col text-left ${todo?.status && 'line-through text-green-400'}`}>
                <strong>
                    {todo.title}
                </strong>
                <small className="text-justify">
                    {todo.desc}
                </small>
            </div>
            <div className="flex align-center gap-3">
                <Iconbtn icon={<fi.FiCheckCircle />} onClick={()=>onComplete(todo.id)}/>
                
                <Iconbtn 
                    icon={<fi.FiEdit2 />} 
                    onClick={()=> setNewTodo({
                        id: todo.id,
                        desc: todo.desc,
                        title: todo.title,
                })}
                />
                <Iconbtn icon={<fi.FiTrash2 />} onClick={()=>onDelete(todo.id)}/>
            </div>
        </div>
    );
}

export default Todo

