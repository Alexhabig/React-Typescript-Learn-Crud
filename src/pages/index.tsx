import { useState } from "react";
import CustomerLayout from "../layout/customer";
import Input from "../Components/input";
import Button from "../Components/button";
import Task from "../Components/checker";
import {INewTodo, ITodo } from "../types";
import Todo from "../Components/todo";
import Modal from "../Components/modal";


const Home = () => {

    const completeTodo =(todoid:number)=>{
        const currentTodos = [...todos]
        currentTodos.forEach((todo:ITodo)=> {
            if (todo.id === todoid){
                todo.status = !todo.status
            }
        })

        setTodos(currentTodos)
    }

    const deleteTodo = (todoid:number) =>{
        setTodos((todos:ITodo[]) =>{
            return todos.filter((todo:ITodo)=> todo.id !== todoid)
        });
    };

    const [isOpen,setIsopen] = useState(false);

    const [showModal, setShowModal] = useState(false);

    const closeModal = () =>{
        setShowModal(false);

        setNewTodo({
            title: "",
            desc: "",
        });
    };

    const [newTodo, setNewTodo] = useState<INewTodo>({
        title: "",
        desc: "",
        status: false,
    })

    const [todos, setTodos] = useState<ITodo[]>([
        {
            id:1,
            title: "Study",
            desc: "Learn Code",
            status: false,
            createdAt: new Date(),
            UpdatedAt: new Date(),
        }
    ]);
    
    const updateTodo = () =>{
        setTodos((todos:ITodo[]) =>{
            todos.forEach((todo:ITodo)=> {
                if (todo.id === newTodo.id){
                    todo.title = newTodo.title
                    todo.desc = newTodo.desc

                }
            })
            return todos;
        })
        clearNewTodo();
    }

    const saveNewTodo = () =>{
        
        setTodos([...todos,{
            ...newTodo,
            id: todos.length+1,
            createdAt: new Date(),
            UpdatedAt: new Date(),
        }]);

        clearNewTodo()
    }

    const clearNewTodo = ()=>{
        setNewTodo({
            title: "",
            desc: "",
        })
    }

    return(
        <main className="">
            {/* <Button classname="" text="Close" onClick={()=>{setIsopen(!isOpen)}}/>
            <div style={{width: isOpen ? '300px' : '0px'}} className={`flex-none transition-all duration-150 ease-in-out`} onClick={()=>{setIsopen(!isOpen)}}>
                sadasd
                
            </div> */}

             <CustomerLayout>
                
                <h1 className="text-2xl">Todo-List  </h1>
                {/* <div className="flex gap-4 text-gray-400 justify-center sm:justify-end">
                    <Task text="Pending Task" value={5}/>
                    <Task text="Done Task" value={3}/>
                </div> */}
                {/* //list of task */}
                <div className="bg-gray-700 p-2 rounded-md flex flex-col border">
                    {todos.map((todo:ITodo)=>(
                        
                        <Todo todo={todo} setNewTodo={setNewTodo} onDelete={deleteTodo} onComplete={completeTodo}/> 
                    ))}
                </div>

                <div>
                    <Button text="Add Task" onClick={()=>setShowModal(true)}/>
                </div>

                <Modal
                isOpen = {showModal || newTodo?.id ? true : false}
                onClose={closeModal}
                >
                    <div>
                        <strong>Insert New Task</strong>
                        <div className="flex flex-col gap-3">
                            <div className="">
                                <form 
                                className="flex flex-col gap-3"
                                onSubmit={(e)=>e.preventDefault()}>
                                    {/* {JSON.stringify(newTodo)} */}
                                    <Input 
                                        type="text" 
                                        placeholder={"Title"} 
                                        onChange={(e)=>
                                            setNewTodo({
                                                ...newTodo,
                                                title: e.target.value
                                            })
                                        }
                                        value={newTodo.title}
                                    />
                                    <Input 
                                        type="text" 
                                        placeholder={"Description"} 
                                        onChange={(e)=>
                                            setNewTodo({
                                                ...newTodo,
                                                desc: e.target.value
                                            })
                                        }
                                        value={newTodo.desc}
                                    />
                                </form>
                            </div>
                            <div>
                                <Button 
                                text={`${newTodo?.id ? 'Update' : 'Add'}`} 
                                onClick={()=> newTodo?.id ? updateTodo() : saveNewTodo()}/>
                            </div>
                        </div>
                    </div>
                </Modal> 

            </CustomerLayout>
            
        </main>
       
    );
};

export default Home