import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const Navegator = () =>{
    const isPrimaryView = ({isActive}) => (isActive ? "active" : "notActive")
    
    return(
        <>
        <Navbar bg="dark" >
            <Container className="d-flex justify-content-between">
                <Navbar.Brand>
                    <img
                    src="../../src/imgs/pokemongo3_w.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <div className='d-flex'>
                    <h5 className='text-light m-1'> <NavLink className={isPrimaryView} to="/">Home</NavLink></h5>
                    <h5 className='text-light m-1'> <NavLink className={isPrimaryView} to="/pokemon/:name">Pokemon</NavLink></h5>
                </div>
            </Container>
        </Navbar>
        </>
    )
    
}

export default Navegator
