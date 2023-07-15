

interface ICustomerLayoutProps{
    children: React.ReactNode;
}

const CustomerLayout = ( {children} : ICustomerLayoutProps) =>{
    return(
        <main className="bg-gray-800 min-h-[100vh] text-gray-200 p-5 flex justify-center flex-auto">
            
            <div className=" py-3 text-center w-[90%] sm:w-[70%] flex flex-col gap-4">
            {children}
            </div>

        </main>
    );
}

export default CustomerLayout