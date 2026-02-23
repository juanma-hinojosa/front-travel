import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";


const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {
    const res = await fetch(
      "https://back-travel.onrender.com/api/favorites"
    );
    const data = await res.json();
    setFavorites(data);
  };

  const deleteFavorite = async (id) => {
    const confirmDelete = window.confirm("¿Eliminar de favoritos?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `https://back-travel.onrender.com/api/favorites/${id}`,
        { method: "DELETE" }
      );

      if (response.ok) {
        toast.success("Eliminado de favoritos ❤️‍🔥");
        fetchFavorites();
      } else {
        toast.error("Error al eliminar");
      }
    } catch (error) {
      toast.error("Error del servidor");
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Na lista </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 150px)", gap: "20px" }}>
        {/* {favorites.map((fav) => (

          <div key={fav._id} style={{ position: "relative" }}>
            <img
              src={`https://image.tmdb.org/t/p/w300${fav.posterPath}`}
              alt={fav.title}
              style={{ width: "100%", display: "block" }}
            />

            <Icon
              onClick={() => deleteFavorite(fav._id)}
              icon="material-symbols:delete-outline"
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

            <h4>{fav.title}</h4>
          </div>
        ))} */}

        {favorites.map((fav) => (

  <div
    key={fav._id}
    style={{
      position: "relative",
      overflow: "hidden",
      borderRadius: "8px"
    }}
  >
    <img
      src={`https://image.tmdb.org/t/p/w300${fav.posterPath}`}
      alt={fav.title}
      style={{
        width: "100%",
        display: "block"
      }}
    />

    {/* ICONO ELIMINAR */}
    <Icon
      onClick={() => deleteFavorite(fav._id)}
      icon="material-symbols:delete-outline"
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
        color: "white",
      }}
    >
      <h4
        style={{
          margin: 0,
          fontSize: "14px",
          fontWeight: "600"
        }}
      >
        {fav.title}
      </h4>
    </div>

  </div>
))}
      </div>
    </div>
  );
};

export default FavoritesList;