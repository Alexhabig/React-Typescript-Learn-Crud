
interface ITaskProps{
    text:string,
    value?:any,
}

const Task = (props:ITaskProps) =>{
    return(
        <div className="bg-gray-300 text-gray-800 py-1 px-3 rounded-lg">{props.text} : {props.value}</div>
    );
}

export default Task