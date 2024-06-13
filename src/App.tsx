import './App.css';
import MovieNote from './containers/MovieNote/MovieNote';

const App = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-5">
        <div className="col-5">

        </div>
        <div className="col-7">
          <MovieNote/>
        </div>
      </div>
    </div>
  );
};

export default App;
