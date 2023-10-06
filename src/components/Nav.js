import { Link } from "react-router-dom";
function Nav()
{
    return(
    
        <nav class="navbar bg-dark">
            <Link to = '/' class = "navbar-brand text-light">Ethnus</Link>
        <div class="nav" >
            <Link to="/home" class="nav-link text-light">HOME</Link>
            <Link to="/blog" class="nav-link text-light">MENU</Link>
            <Link to="/about" class="nav-link text-light">ABOUT</Link>
            <Link to="/contact" class="nav-link text-light">CONTACT</Link>
        </div>
        
    </nav>
        
    )
}
export default Nav;