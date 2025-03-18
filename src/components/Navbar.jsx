const Navbar = () =>{
    return(
        <>
           <header className="p-5 flex justify-between">
            <h1 className="font-semibold text-red-500 text-2xl">Onlinex</h1>
            <div className="flex space-x-6">
                <button className="text-lg font-semibold hover:text-red-500">Add User</button>
                <a href="/allUser"><button className="text-lg font-semibold border px-4 py-2 border-red-500 hover:text-white hover:bg-red-500 transition">Other Users</button></a>
            </div>
           </header>

        </>
    )
}
export default Navbar;







