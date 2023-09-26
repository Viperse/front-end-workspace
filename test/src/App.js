import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import "./App.css";

const Read = ({list, deleteMovie}) => {

  const onClick = (e) => {
    deleteMovie(e.target.id);   
  }

  return (
    <div>
      <h1>Movies</h1>
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.genre}</td>
              <td>{item.release_date}</td>
              <td><button onClick={onClick} id={item.id}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const Create = ({addMovie}) => {

  const onSubmit = (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const title = e.target.title.value;
    const genre = e.target.genre.value;
    const releaseDate = e.target.release_date.value;
    addMovie(id, title, genre, releaseDate);
    e.target.id.value = null;
    e.target.title.value = null;
    e.target.genre.value = null;
    e.target.release_date.value = null;
    
  }

  return (
    <div>
      <h1>Create Movie</h1>
      <form onSubmit={onSubmit}>
        <div>
          <input type='text' id='id' name='id' placeholder='input movie id' required/>
        </div>
        <div>
          <input type='text' id='title' name='title' placeholder='input movie title' required/>
        </div>
        <div>
          <input type='text' id='genre' name='genre' placeholder='input movie genre' required/>
        </div>
        <div>
          <label htmlFor='release_date'>출시일 : </label>
          <input type='date' id='release_date' name='release_date' required/>
        </div>
        <button type='submit'>Add Movie</button>
      </form>
    </div>
  )
}


const App = () => {
  const [movies, setMovies] = useState([
    {
      "id": 1,
      "title": "Movie 1",
      "genre" : "Drama",
      "release_date": "2022-01-01"
    },
    {
      "id": 2,
      "title": "Movie 2",
      "genre" : "Action",
      "release_date": "2022-02-01"
    },
    {
      "id": 3,
      "title": "Movie 3",
      "genre" : "Comedy",
      "release_date": "2022-03-01"
    }
  ]);

  const addMovie = (id, title, genre, release_date) => {

    let check = false;
    for(let movie of movies) {
      if(movie.id == id) {
        check = true;
      }
    }

    if(!check) {
      const newMovie = {
        id,
        title,
        genre,
        release_date
      };
  
      setMovies([...movies, newMovie]);
    }
    
  }

  const deleteMovie = (id) => {
    const newList = movies.filter((item) => item.id != id);
    setMovies(newList);
  }

  return (
    <BrowserRouter>
      <div className='router-link'>
        <Link to="/">List</Link>
        <Link to="/create">Add New Movie</Link>
      </div>
      <Routes>
        <Route path='/' element={<Read list={movies} deleteMovie={deleteMovie}/>}/>
        <Route path='/create' element={<Create addMovie={addMovie}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;