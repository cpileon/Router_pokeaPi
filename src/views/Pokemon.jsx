import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';



const Pokemon = () =>{
    const [pokemon, setPokemon] = useState([]);
    const { name } = useParams()
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const getPoke = async(nombre) => {
        const newUrl = url + nombre
        console.log(newUrl)
        const res = await fetch(newUrl);
        const data = await res.json();
        console.log(data)

        const src_dw = data.sprites.other.dream_world.front_default
        const name = data.species.name.charAt(0).toUpperCase() + data.species.name.slice(1)
        let src_RB
        let src_Y
        let src_G
        let src_S
        let src_C
        if (data.sprites.versions["generation-i"]["red-blue"].front_default) {src_RB = data.sprites.versions["generation-i"]["red-blue"].front_default} else {return} 
        if (data.sprites.versions["generation-i"]["yellow"].front_default) {src_Y = data.sprites.versions["generation-i"]["yellow"].front_default} else {return} 
        if (data.sprites.versions["generation-ii"]["gold"].front_default) {src_G = data.sprites.versions["generation-ii"]["gold"].front_default} else {return} 
        if (data.sprites.versions["generation-ii"]["silver"].front_default) {src_S = data.sprites.versions["generation-ii"]["silver"].front_default} else {return} 
        if (data.sprites.versions["generation-ii"]["crystal"].front_default) {src_C = data.sprites.versions["generation-ii"]["crystal"].front_default} else {return} 

        const stats = data.stats.map((stat) =>({
            name: stat.stat.name,
            base_stat: stat.base_stat
        }))

        const types = data.types.map(({ type })=>(type["name"]))
        console.log(types)
        console.log(stats)
        console.log(src_RB)
        console.log(src_G)
        console.log(src_S)
        console.log(src_C)

        console.log(src_dw)

        setPokemon({name, stats, src_dw, src_RB, src_Y, src_G, src_S, src_C, types})
        console.log(pokemon)
    }

    useEffect(()=>{getPoke(name)}, [])

    return(
        <>
        <Container className='mt-5'>
            <div className='filaMain row'>
                <div className='contenedorData col'>
                    <h1>{pokemon.name}</h1>
                    <div className='contenedorTipos'>
                        <h4>Tipos: </h4>
                            <div className={`cajaTipo ${pokemon.types && pokemon.types[0]}`}> 
                                <img src={`../../src/imgs/${pokemon.types && pokemon.types[0]}.svg`} />
                                {pokemon.types && pokemon.types[0].toUpperCase()}
                            </div> 
                        {(pokemon.types && pokemon.types[1]) ? 
                            <div className={`cajaTipo ${pokemon.types && pokemon.types[1]}`}>
                                <img src={`../../src/imgs/${pokemon.types && pokemon.types[1]}.svg`} />
                                {pokemon.types && pokemon.types[1].toUpperCase()}
                            </div> : null}
                    </div>
                    <div className="img_dw">
                    <img src={pokemon.src_dw} alt={pokemon.name} />
                </div>
            </div>

        <div className='contenedor_sprites col'>
            <div className='row'>
                <div className='col'>
                    <div className='sprite'>
                    <p>Pokemon Red/Blue</p>
                    <img src={pokemon.src_RB} alt="Sprite Pokemon Red/Blue" />
                    </div>
                </div>
                <div className='col'>
                    <div className='sprite'>
                    <p>Pokemon Yellow</p>
                    <img src={pokemon.src_Y} alt="Sprite Pokemon Yellow" />
                    </div>             
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='sprite'>
                    <p>Pokemon Silver</p>
                    <img src={pokemon.src_S} alt="Sprite Pokemon Silver" />
                    </div>
                </div>
                <div className='col'>
                    <div className='sprite'>
                    <p>Pokemon Gold</p>
                    <img src={pokemon.src_G} alt="Sprite Pokemon Gold" />
                    </div>
                </div>
                <div className='col'>
                    <div className='sprite'>
                    <p>Pokemon Crystal</p>
                    <img src={pokemon.src_C} alt="Sprite Pokemon Crystal" />
                    </div>
                </div>
            </div>
        </div>

            <div className='contenedorStats col'>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td><strong>HP</strong></td>
                            <td>{pokemon.stats && pokemon.stats[0].base_stat}</td>
                        </tr>
                        <tr>
                            <td><strong>Ataque</strong></td>
                            <td>{pokemon.stats && pokemon.stats[1].base_stat}</td>
                        </tr>
                        <tr>
                            <td><strong>Defensa</strong></td>
                            <td>{pokemon.stats && pokemon.stats[2].base_stat}</td>
                        </tr>
                        <tr>
                            <td><strong>Ataque especial</strong></td>
                            <td>{pokemon.stats && pokemon.stats[3].base_stat}</td>
                        </tr>
                        <tr>
                            <td><strong>Defensa especial</strong></td>
                            <td>{pokemon.stats && pokemon.stats[4].base_stat}</td>
                        </tr>
                        <tr>
                            <td><strong>Velocidad</strong></td>
                            <td>{pokemon.stats && pokemon.stats[5].base_stat}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            </div>
        </Container>
        </>
    )
}

export default Pokemon