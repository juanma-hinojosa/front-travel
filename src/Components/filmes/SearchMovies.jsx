import { Icon } from "@iconify/react";
import { useState } from "react";
import { toast } from "react-toastify";

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

  // const addFavorite = async (movie) => {
  //   try {
  //     const response = await fetch(
  //       "https://back-travel.onrender.com/api/favorites",
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           tmdbId: movie.id,
  //           title: movie.title || movie.name,
  //           overview: movie.overview,
  //           posterPath: movie.poster_path,
  //           releaseDate: movie.release_date || movie.first_air_date,
  //           mediaType: movie.media_type,
  //         }),
  //       }
  //     );

  //     const data = await response.json();

  //     if (!response.ok) {
  //       alert(data.message);
  //       return;
  //     }

  //     alert("Agregado a favoritos");
  //     onFavoriteAdded();
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


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
        toast.warning(data.message || "Ya está en favoritos");
        return;
      }

      toast.success("Agregado a favoritos 💖");
      onFavoriteAdded();
    } catch (error) {
      toast.error("Error al agregar");
    }
  };

  return (
    <div>
      <h2>Filmes e seriados </h2>

      <form onSubmit={searchMovies}
        style={{ display: "flex", justifyContent: 'space-between' }}
      >
        <input
          type="text"
          placeholder="Ej: Batman"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        // style={{padding:'10px', maxWidth:'200px'}}
        />
        <button type="submit">
          <Icon icon="iconoir:search" width="24" height="24" />
        </button>
      </form>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, 150px)", gap: "20px" }}>
        {/* {results.map((movie) => (

          <div key={movie.id} style={{ position: "relative" }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", display: "block" }}
            />

            <Icon
              onClick={() => addFavorite(movie)}
              icon="material-symbols:favorite-outline"
              width="24"
              height="24"
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                padding: "4px",
                color: "white"
              }}
            />

            <h4>{movie.title || movie.name}</h4>
          </div>
        ))} */}

        {results.map((movie) => (

          <div
            key={movie.id}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "8px"
            }}
          >
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{
                width: "100%",
                display: "block"
              }}
            />

            {/* ICONO FAVORITO */}
            <Icon
              onClick={() => addFavorite(movie)}
              icon="material-symbols:favorite-outline"
              width="24"
              height="24"
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                cursor: "pointer",
                backgroundColor: "rgba(0,0,0,0.6)",
                borderRadius: "50%",
                padding: "4px",
                color: "white",
                zIndex: 2
              }}
            />

            {/* OVERLAY DEGRADADO + TEXTO */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                padding: "12px",
                background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                color: "white"
              }}
            >
              <h4
                style={{
                  margin: 0,
                  fontSize: "14px",
                  fontWeight: "600"
                }}
              >
                {movie.title || movie.name}
              </h4>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;