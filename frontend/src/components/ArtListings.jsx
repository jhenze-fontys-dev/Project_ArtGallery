import ArtListing from "./ArtListing";

const ArtListings = ({ artworks }) => {
  if (!artworks || artworks.length === 0) {
    return <p>Deze collectie bevat nog geen kunstwerken.</p>;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {artworks.map((art) => (
        <ArtListing key={art.id} art={art} />
      ))}
    </div>
  );
};

export default ArtListings;
