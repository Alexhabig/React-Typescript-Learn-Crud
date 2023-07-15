import Iconbtn from "./iconbutton"
import * as fa from "react-icons/fa";

interface IModalProps{
    isOpen :boolean,
    onClose : ()=>void,
    children?: React.ReactNode;
}

const Modal = ( {isOpen,onClose,children,} : IModalProps) => isOpen?(
    <div className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm flex justify-center items-center">
        <div className="bg-gray-600 rounded-md min-w-[40%] p-4 relative">
        <Iconbtn 
            icon={<fa.FaRegWindowClose />} 
            onClick={()=>onClose()} 
            classname=" absolute right-3 top-3 text-lg"
        />
        {children}
        </div>
    </div>
 ):null

export default Modal