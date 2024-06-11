import React, {useState} from 'react';
import {Movie} from '../../../types';


interface Props{
  addToList:(movie:Movie)=>void
}
const initialState = {
  name:'',
  id:'',
}
const MovieForm:React.FC<Props> = ({addToList}) => {
  const [newMovie,setNewMovie]=useState<Movie>(initialState)

  const changeMovie = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNewMovie((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    addToList({
      ...newMovie,
      id: (Math.random()*1000).toString()
    });

    setNewMovie(initialState);
  };


  return (
    <form onSubmit={onFormSubmit}>
      <h4>Add new dish</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control"
          onChange={changeMovie}
          value={newMovie.name}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2">
        Create
      </button>
    </form>
  );
};

export default MovieForm;