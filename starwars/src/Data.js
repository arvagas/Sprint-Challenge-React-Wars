import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Card from './Card'
import ButtonContainer from './styles/StylesButtonContainer'
import CardGrid from './styles/StylesCardGrid'

function Data() {
    // Values related to SWAPI
    const swapi = 'https://swapi.co/api'
    const swapiCategory = 'people'
    
    const [url, setUrl] = useState(`${swapi}/${swapiCategory}/`)
    const [characters, setCharacters] = useState([])
    const [nextPage, setNextPage] = useState('')
    const [prevPage, setPrevPage] = useState('')

    useEffect(() => {
        axios.get(`${url}`)
        .then(response => {
            console.log('SWAPI online:', response)
            const data = response.data.results
            const next = response.data.next
            const prev = response.data.previous

            setCharacters(data)
            setNextPage(next)
            setPrevPage(prev)
        })
        .catch(error => {
            console.log('API retrieval failed:', error)
        })
    }, [url])

    return (
        <div>
            <ButtonContainer>
                {!prevPage ? <button disabled>Previous</button> : <button onClick={()=>setUrl(prevPage)}>Previous</button>}
                {!nextPage ? <button disabled>Next</button> : <button onClick={()=>setUrl(nextPage)}>Next</button>}
            </ButtonContainer>

            <CardGrid>
                {characters.map(char=> (
                    <Card name={char.name} height={char.height} mass={char.mass} hairColor={char.hair_color} eyeColor={char.eye_color} skinColor={char.skin_color} birthYear={char.birth_year} gender={char.gender} homeWorld={char.homeworld}/>
                ))}
            </CardGrid>
        </div>
    )
}

export default Data