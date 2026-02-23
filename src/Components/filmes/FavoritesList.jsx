import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";


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
    await fetch(
      `https://back-travel.onrender.com/api/favorites/${id}`,
      { method: "DELETE" }
    );

    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Na lista </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, 200px)", gap: "20px" }}>
        {favorites.map((fav) => (
          <div key={fav._id}>
            <img
              src={`https://image.tmdb.org/t/p/w300${fav.posterPath}`}
              alt={fav.title}
              style={{ width: "100%" }}
            />
            
            <h4>{fav.title}</h4>
            {/* <p>{fav.releaseDate}</p> */}

            {/* <button onClick={() => deleteFavorite(fav._id)}> */}
              <Icon onClick={() => deleteFavorite(fav._id)} icon="material-symbols:delete-outline" width="24" height="24" />
            {/* </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;