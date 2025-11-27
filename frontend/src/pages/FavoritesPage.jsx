import { Link } from "react-router-dom";
import useFavorites from "../hooks/useFavorites";

const FavoritesPage = () => {
  const { favorites } = useFavorites(); // lijst met ids (strings of nummers)

  if (!favorites || favorites.length === 0) {
    return (
      <section className="p-8">
        <h1 className="text-3xl font-bold mb-4">Mijn favorieten</h1>
        <p>Je hebt nog geen favoriete kunstwerken.</p>
      </section>
    );
  }

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">Mijn favorieten</h1>

      <ul className="space-y-2">
        {favorites.map((id) => (
          <li key={id}>
            <Link
              to={`/art/${id}`}
              className="text-blue-600 underline text-sm"
            >
              Kunstwerk #{id}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FavoritesPage;
