interface IInputProps {
    type: 'text' | 'email' | 'password'| 'number',
    className?: string,
    value?: any
    placeholder:string,
    onChange?: (e:any)=>void
}
    

const Input =(props:IInputProps) =>{
    return(
        <div className="text-gray-800 ">
            <input type={props.type} className={`text-gray-200 bg-gray-700 outline-none rounded-sm py-2 px-1 w-full ${props.className}`} value={props.value} placeholder={props.placeholder} onChange={props.onChange}/>
        </div>
    );
};

export default Input;