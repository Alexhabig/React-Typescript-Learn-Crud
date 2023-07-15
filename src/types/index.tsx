export interface INewTodo{
    id?:number,
    title:string,
    desc: string,
    status?:boolean,
}

export interface ITodo{
    id:number,
    title:string,
    desc: string,
    status?:boolean,
    createdAt?: Date,
    UpdatedAt?: Date,
}


export interface ITodoProps{
    todo : ITodo
    onDelete: (todoid:number) => void
    onComplete: (todoid:number) =>void
    setNewTodo:React.Dispatch<React.SetStateAction<INewTodo>>
}

