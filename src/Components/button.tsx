interface IButtonProps{
   classname?:string,
   text?:string,
   icon?:any,
   onClick?:()=>void,
   value?:any
}

const Button =(props : IButtonProps)=>{
 return(
   <div className="">
      <button className={`bg-gray-50 text-gray-900 py-2 w-full rounded-md hover:bg-gray-500  hover:text-gray-50 ${props.classname}`} onClick={props.onClick} value={props.value}> {props.text} {props.icon}</button>
   </div>
 )
}


export default Button ;
