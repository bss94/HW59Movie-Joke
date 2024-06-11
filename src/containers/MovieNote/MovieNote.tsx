import {useState} from 'react';
import MovieForm from '../../components/Movie/MovieForm/MovieForm';
import MovieList from '../../components/Movie/MovieList/MovieList';
import {Movie} from '../../types';

const MovieNote = () => {
  const [movies,setMovies]=useState<Movie[]>([
    {name:'Pirates',id:'01'},
    {name:'Aladdin',id:'02'},
    {name:'Armageddon',id:'03'},
  ]);

  const addMovie = (movie:Movie) => {
    setMovies(prev => [...prev,movie])
  }
  const editMovie = (movie:Movie) => {
    setMovies(prev =>{
      return prev.map(el=>{
        if(el.id===movie.id){
          return {...el, name:movie.name};
        }
        return el;
      })
    })
  }
  const removeMovie = (movie:Movie) => {
    setMovies(prev => {
     return prev.filter(el=>el.id!==movie.id)
    })
  }
  console.log(movies);
  return (
    <div>

      <MovieForm addToList={addMovie}/>

      <MovieList/>

    </div>
  );
};

export default MovieNote;