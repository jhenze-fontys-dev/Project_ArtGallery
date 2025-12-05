import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]); // array van string MET-ids
  const [loading, setLoading] = useState(false);

  // Initial load uit backend (user_id = 1)
  useEffect(() => {
    const loadFavorites = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/favorites");
        if (!res.ok) {
          console.error("Kon favorieten niet ophalen");
          return;
        }
        const data = await res.json();
        const ids = data.map((row) => String(row.met_object_id));
        setFavorites(ids);
      } catch (err) {
        console.error("Fout bij initialiseren favorieten:", err);
      } finally {
        setLoading(false);
      }
    };

    loadFavorites();
  }, []);

  const isFavorite = (id) => {
    const idStr = String(id);
    return favorites.includes(idStr);
  };

  const toggleFavorite = async (id) => {
    const idStr = String(id);

    // eerst state aanpassen, dan backend aanroepen
    if (favorites.includes(idStr)) {
      // verwijderen
      setFavorites((prev) => prev.filter((favId) => favId !== idStr));
      try {
        await fetch(`/api/favorites/${idStr}`, {
          method: "DELETE",
        });
      } catch (err) {
        console.error("Fout bij verwijderen favoriet:", err);
      }
    } else {
      // toevoegen
      setFavorites((prev) => [...prev, idStr]);
      try {
        await fetch("/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ metObjectId: idStr }),
        });
      } catch (err) {
        console.error("Fout bij toevoegen favoriet:", err);
      }
    }
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, toggleFavorite, loading }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites moet binnen FavoritesProvider gebruikt worden");
  }
  return ctx;
}
