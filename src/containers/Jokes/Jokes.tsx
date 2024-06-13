import {useState} from 'react';
import JokeList from '../../components/Joke/JokeList/JokeList';

const Jokes = () => {
  const [jokes,setJokes]=useState()
  return (
    <div>
      Jokes
      <JokeList/>
    </div>
  );
};

export default Jokes;