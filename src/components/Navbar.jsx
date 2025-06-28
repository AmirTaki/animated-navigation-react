const Navbar = ({show}) => {
    return(
        <div className={show ? "sidenav active" : "sidenav"} >
            <img src="" alt="logo"  className="logo" />
            <ul>
                <li><a href="/">Home</a></li>
            </ul>
            <ul>
                <li><a href="/">About</a></li>
            </ul>
            <ul>
                <li><a href="/">Contact us</a></li>
            </ul>
        </div>
    )
}
export default Navbar