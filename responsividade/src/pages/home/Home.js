import{useEffect, useState} from 'react';

import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import './styles.css';
import Cards from '../../components/Cards/Index';

function Home() {
const [movies, setMovies] = useState([]);

useEffect(()=>{
  async function loadMovie(){
    const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false',{
    method: 'GET'
  });
  const {results} = await response.json();
  console.log(results);
  setMovies(results)
  }
  loadMovie();
},[])

  return (
    <div className='containerHome'>
        
        <Header/>
        <section className='sectionMovies'>
          {movies.map((movie)=>(
            <Cards 
            key={movie.id} 
            cover={movie.poster_path} 
            title={movie.title}/>
          ))}
          
        </section>
        <Footer/>
    </div>
  );
}

export default Home;
