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
            <Container className=' d-flex justify-content-center text-center'>
                <div className='homeContainer m-3'>
                    <h1 className='text-dark'>Bienvenido a pokedex</h1>
                    <img src="../../src/imgs/poketrainer.svg" alt="Pokedex" className='pokemonGo m-2'/>
                    <div className='d-flex align-items-baseline '>
                        <img src="../../src/imgs/pokeball.svg" width="15px"/> 
                        <p> ¡Selecciona uno de los pokemons de la lista y haz click en Buscar para obtener sus datos!</p>
                        <img src="../../src/imgs/pokeball.svg" width="15px"/> 
                    </div>
                    <div className='d-flex align-items-baseline '>
                        <img src="../../src/imgs/pokeball.svg" width="15px"/> 
                        <p> La información mostrada en esta App proviene de <a href="https://pokeapi.co/">PokeAPI</a></p>
                        <img src="../../src/imgs/pokeball.svg" width="15px"/> 
                    </div>
                    <Form>
                        <Form.Select aria-label="Default select example" onChange={(e)=>setName(e.target.value)}>
                            <option>Selecciona un pokemon</option>
                            {pokeList.map((poke, id)=>(
                                <option key={id} value={poke.name}>
                                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                                </option>
                            ))}
                        </Form.Select>
                        <Button className="m-2" onClick={pokePage}>
                            <div className='boton d-flex gap-1'>
                            Buscar <img src="../../src/imgs/pokehand_w.svg"/>
                            </div>
                        </Button>
                    </Form>
                </div>
            </Container>
        </>
    )

}
export default Home