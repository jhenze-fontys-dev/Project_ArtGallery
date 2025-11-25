import { Link } from "react-router-dom";
import artworks from "../artworks.json";

export default function NavArt() {
  const collectionIds = Array.from(
    new Set(artworks.map((art) => art.collection_id))
  ).sort((a, b) => a - b);

  return (
    <section className="collection-nav-page">
      <h1 className="collection-nav-heading">Collecties</h1>
      <p className="collection-nav-subtitle">
        Blader door de verschillende collecties en ontdek de werken.
      </p>

      <div className="collection-nav-grid">
        {collectionIds.map((id) => {
          const previewArtworks = artworks
            .filter((art) => art.collection_id === id)
            .slice(0, 3);

          return (
            <Link
              key={id}
              to={`/art/collections/${id}`}
              className="collection-card"
            >
              <h2 className="collection-card-title">Collectie {id}</h2>
              <p className="collection-card-meta">
                {previewArtworks.length} voorbeeldwerken
              </p>

              <div className="collection-card-preview">
                {previewArtworks.map((art) => (
                  <img
                    key={art.id}
                    src={`/images/${art.image}`}
                    alt={art.title}
                  />
                ))}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
