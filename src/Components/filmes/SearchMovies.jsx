import { Icon } from "@iconify/react";
import { useState } from "react";

const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGExMmJmZWM5NjVkNzJkYzQxOTAwMTk0MzI0ZTAxYyIsIm5iZiI6MTc1NTcyNzEzNi4yNCwic3ViIjoiNjhhNjQ1MjBjM2ZhMmYzZTA0ZmQyODRmIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.JTgVcH9EnwM0scHCMPFlx3kVs3Hx2uVjoNUNUNF6Rkg";

const SearchMovies = ({ onFavoriteAdded }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${query}`,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${API_TOKEN}`,
        },
      }
    );

    const data = await res.json();
    setResults(data.results || []);
  };

  const addFavorite = async (movie) => {
    try {
      const response = await fetch(
        "https://back-travel.onrender.com/api/favorites",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tmdbId: movie.id,
            title: movie.title || movie.name,
            overview: movie.overview,
            posterPath: movie.poster_path,
            releaseDate: movie.release_date || movie.first_air_date,
            mediaType: movie.media_type,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      alert("Agregado a favoritos");
      onFavoriteAdded();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Filmes e seriados </h2>

      <form onSubmit={searchMovies}>
        <input
          type="text"
          placeholder="Ej: Batman"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: "20px" }}>
        {results.map((movie) => (
          <div key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%" }}
            />
            <h4>{movie.title || movie.name}</h4>
            <button onClick={() => addFavorite(movie)}>
              <Icon icon="material-symbols:favorite-outline" width="24" height="24" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;