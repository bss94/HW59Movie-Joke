import React from 'react';
import JokeItem from '../JokeItem/JokeItem';

interface Props{

}
const JokeList:React.FC<Props> = () => {
  return (
    <div>
      JokeList
      <JokeItem/>
    </div>
  );
};

export default JokeList;