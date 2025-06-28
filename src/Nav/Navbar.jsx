

const Navbar = () => {
    return (
      <nav className = "z-50">
        <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
            <div className="flex items-center flex-1">
                <h2 className="text-3xl font-bold text-pink-500">Beauty</h2>
            </div>
            <div>
                <ul className="flex gap-8 mr-16 text-[18px]">
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Home</li>
                    </Link>
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Shop</li>
                    </Link>
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Blogs</li>
                    </Link>
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Pages</li>
                    </Link>
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Produc</li>
                    </Link>
                    <Link to = "/">
                        <li className="hover:text-pink-400 transition border border-white hover-pink-400 cursor-pointer">Contact</li>
                    </Link>                    
                </ul>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;