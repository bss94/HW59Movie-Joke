import './App.css';
import MovieNote from './containers/MovieNote/MovieNote';

const App = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row mt-3">
        <div className="col-3">

        </div>
        <div className="col-9">
          <MovieNote/>
        </div>
      </div>
    </div>
  );
};

export default App;
