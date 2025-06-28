

const Navbar = () => {
    return (
      <nav className = "z-50">
        <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
            <div className="flex items-center flex-1">
                <h2 className="text-3xl font-bold text-pink-500">Beauty</h2>
            </div>
            <div>
                <ul className="flex gap-8 mr-16 text-[18px]">
             
                        <li className="hover:text-pink-400 transition border-b-2 border-white  hover:border-pink-400 cursor-pointer">Shop</li>
                        <li className="hover:text-pink-400 transition border-b-2 border-white hover:border-pink-400 cursor-pointer">Home</li>
                        <li className="hover:text-pink-400 transition border-b-2 border-white  hover:border-pink-400 cursor-pointer">Blogs</li>
                        <li className="hover:text-pink-400 transition border-b-2 border-white  hover:border-pink-400 cursor-pointer">Pages</li>
                        <li className="hover:text-pink-400 transition border-b-2 border-white  hover:border-pink-400 cursor-pointer">Produc</li>
                        <li className="hover:text-pink-400 transition border-b-2 border-white  hover:border-pink-400 cursor-pointer">Contact</li>
                    <div className="group">
                        <button className="text-pink-400">Producct</button>
                        <div className = "hidden group-hover:flex flex-col absolute left-0 p-10 w-full bg-white z-20 text-black durtion-300"></div>
                    </div>
                </ul>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;