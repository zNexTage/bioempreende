import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';



const Header = () => {
    return (
        <header>
            <Navbar bg="bio-dark-blue" expand="md" variant="dark" className="p-2" collapseOnSelect >
                <Navbar.Brand href="#home">
                    BioEmpreende
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about-us">Sobre nós</Nav.Link>
                        <Nav.Link href="#services">Serviços</Nav.Link>
                        <Nav.Link href="#contact">Contato</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;