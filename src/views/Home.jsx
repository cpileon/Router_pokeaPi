import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Home = () => {

    const url = "https://pokeapi.co/api/v2/pokemon/";
    const [pokeList, setPokeList] = useState([]);
    const [name, setName] = useState("");

 
    const getList = async() => {
        const res = await fetch(url);
        const { results } = await res.json();
        console.log(results)
        setPokeList(results)
    }

    useEffect(() => {
        getList()
    },[])

    const navigate = useNavigate();

    const pokePage = () =>{
       console.log(name)
       navigate(`/pokemon/${name}`)
    }

    return(
        <>
            <Container>
                <h1>Bienvenido a pokedex</h1>
                <img src="../../src/imgs/pokedex.png" alt="" />
                <Form>
                    <Form.Select aria-label="Default select example" onChange={(e)=>setName(e.target.value)}>
                        <option>Selecciona un pokemon</option>
                        {pokeList.map((poke, id)=>(
                            <option key={id} value={poke.name}>
                                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                            </option>
                        ))}
                    </Form.Select>
                    <Button onClick={pokePage}>
                        <div className='d-flex gap-1'>
                        Buscar <img src="../../src/imgs/pokehand_w.svg"/>
                        </div>
                    </Button>
                    
                </Form>
            </Container>
        </>
    )

}
export default Home