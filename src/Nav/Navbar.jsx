
const Navbar = () => {
    return (
      <nav className = "z-50">
        <div className="h-10vh flex justify-between lg:py-5 px-20 py-20 border-b">
            <div>
                <h2>Beauty</h2>
            </div>
            <div>
                <ul>
                    <Link><li>Home</li></Link>
                    <Link><li>Shop</li></Link>
                    <Link><li>Blogs</li></Link>
                    <Link><li>Pages</li></Link>
                    <Link><li>Produc</li></Link>
                    <Link><li>Contact</li></Link>                    
                </ul>
            </div>
        </div>
      </nav>
    )
}

export default Navbar;