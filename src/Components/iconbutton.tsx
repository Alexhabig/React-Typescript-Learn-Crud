interface IIconbtnProps{
    classname?:string
    text?:string
    icon?:any
    onClick?:()=>void
}

const Iconbtn = (props:IIconbtnProps) =>{
    return(
        <div className="">
            <button className={props.classname} onClick={props.onClick}>{props.text} {props.icon}</button>
            
        </div>
    );
}

export default Iconbtn