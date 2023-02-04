import { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import searchIcon from './assets/search.svg'
import './assets/navbar.css'

const API_URL = 'https://www.omdbapi.com/?apikey=<your_api_key>';

const ListMovie = () => {
    const [movies,setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('')
  const searchMovies = async(title)=>{
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search);
}




useEffect( ()=>{
  searchMovies('Dragon Ball')
},[] );

  return (
    <>
    <nav>
        <div className='logo'>Movie</div>
        <ul>
            <li>
                <input placeholder='search for movies' id="" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <img src={searchIcon} onClick={()=>searchMovies(searchTerm)} alt="" />
            </li>
        </ul>
    </nav>
    <div className='main'>
      {
        movies?.length>0
        ?(
        <div className="container">
          {movies.map((movie)=>(
            < MovieCard movie1={movie} key={movie.imdbID} />
          ))}
        </div>
        ) : (
          <div className="empty">
            <h2>no movies found</h2>
          </div>
        )
      }
    </div>
    </>
  )
}

export default ListMovie