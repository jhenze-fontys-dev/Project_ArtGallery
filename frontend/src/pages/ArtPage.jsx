import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFavorites from "../hooks/useFavorites";

const ArtPage = () => {
  const { id } = useParams(); // MET objectID uit de URL, bv "2"
  const { isFavorite, toggleFavorite } = useFavorites();

  const [artData, setArtData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
        );

        if (!res.ok) {
          throw new Error(`Kan object ${id} niet ophalen`);
        }

        const data = await res.json();
        setArtData(data);
      } catch (err) {
        setError(err.message || "Er ging iets mis bij het ophalen van het kunstwerk");
      } finally {
        setLoading(false);
      }
    };

    fetchArt();
  }, [id]);

  const handleToggleFavorite = () => {
    // we gebruiken id uit de URL als favorieten-ID
    toggleFavorite(id);
  };

  if (loading) {
    return (
      <section className="p-8 max-w-3xl mx-auto">
        <p>Bezig met laden...</p>
      </section>
    );
  }

  if (error || !artData) {
    return (
      <section className="p-8 max-w-3xl mx-auto">
        <Link to="/collections" className="text-blue-600 underline text-sm">
          ← Terug naar collecties
        </Link>
        <p className="mt-4 text-red-600">
          {error || "Kon geen gegevens voor dit kunstwerk laden."}
        </p>
      </section>
    );
  }

  const {
    title,
    artistDisplayName,
    objectDate,
    medium,
    primaryImageSmall,
    objectURL,
  } = artData;

  return (
    <section className="p-8 max-w-3xl mx-auto">
      <Link to="/collections" className="text-blue-600 underline text-sm">
        ← Terug naar collecties
      </Link>

      <div className="mt-4">
        <h1 className="text-3xl font-bold mb-2">{title || `Kunstwerk #${id}`}</h1>

        {artistDisplayName && (
          <p className="text-lg text-gray-700 mb-1">{artistDisplayName}</p>
        )}

        <p className="text-sm text-gray-500 mb-2">
          {objectDate && <span>{objectDate}</span>}
          {objectDate && medium && " · "}
          {medium && <span>{medium}</span>}
        </p>

        <button
          onClick={handleToggleFavorite}
          className="mb-4 px-4 py-2 border rounded-md text-sm"
        >
          {isFavorite(id)
            ? "★ Verwijder uit favorieten"
            : "☆ Voeg toe aan favorieten"}
        </button>

        {primaryImageSmall ? (
          <img
            src={primaryImageSmall}
            alt={title}
            className="w-full h-auto rounded mb-4"
          />
        ) : (
          <p className="mb-4 text-sm text-gray-500">
            Geen afbeelding beschikbaar voor dit object.
          </p>
        )}

        {objectURL && (
          <a
            href={objectURL}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline text-sm"
          >
            Bekijk dit kunstwerk op de website van The Met
          </a>
        )}
      </div>
    </section>
  );
};

export default ArtPage;
