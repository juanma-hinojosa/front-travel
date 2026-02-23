import { useState } from "react";
import SearchMovies from "../Components/filmes/SearchMovies";
import FavoritesList from "../Components/filmes/FavoritesList";

function FilmesPage() {
  const [view, setView] = useState("search");
  const [refresh, setRefresh] = useState(false);

  return (
    <div style={{ padding: "20px" }} className="poppins-regular" >
      <h1 className="playwrite-at-title" >🎬🍿 Filmes e Seriados para assistir juntos</h1>

      {/* Botones de navegación */}
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => setView("search")}
          style={{
            marginRight: "10px",
            background: view === "search" ? "#111" : "#ccc",
            color: view === "search" ? "#fff" : "#000",
          }}
        >
          Buscar Películas
        </button>

        <button
          onClick={() => setView("favorites")}
          style={{
            background: view === "favorites" ? "#111" : "#ccc",
            color: view === "favorites" ? "#fff" : "#000",
          }}
        >
          Ver Favoritos
        </button>
      </div>

      {/* Render condicional */}
      {view === "search" && (
        <SearchMovies
          onFavoriteAdded={() => setRefresh(!refresh)}
        />
      )}

      {view === "favorites" && (
        <FavoritesList key={refresh} />
      )}
    </div>
  );
}

export default FilmesPage;