import { useState } from "react"
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from "../Images/Logo.png"
import Menu from "../Images/menu.png"

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <nav className="navbar">
                <ul className="logo">
                    <img src={Logo} alt="logo" />
                </ul>
                <ul className="nav-list">
                    <li>Features</li>
                    <li>Exchanges</li>
                    <li>How it works!</li>
                    <li>Blog</li>
                    <li>About Us</li>
                    <div className="signin">
                        <button>Sign In</button>
                    </div>
                </ul>
                <ul className="menu" onClick={handleShow}>
                    <img src={Menu} alt="menu" />
                </ul>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><img src={Logo} alt="logo" /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="nav-list-mobile">
                            <li>Features</li>
                            <li>Exchanges</li>
                            <li>How it works!</li>
                            <li>Blog</li>
                            <li>About Us</li>
                            <div className="signin-mobile">
                                <button>Sign In</button>
                            </div>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </nav>
        </div>
    )
}

export default Header