import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <h1>Rent-A-Car</h1>
            <ul className='NavBarMenu'>
                <a href="#"><li>Catálogo</li></a>
                <a href="#"><li>Servicios</li></a>
                <a href="#"><li>Oficinas</li></a>
                <a href="#"><li>Contacto</li></a>
            </ul>
        </nav>
    )
}

export default NavBar;