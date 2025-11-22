import { Link } from 'react-router-dom';

const ArtListing = ({ art }) => {
  return (
    <article className="border rounded-md p-4 shadow-sm">
      <h3 className="text-lg font-semibold mb-2">{art.title}</h3>
      <p className="text-sm text-gray-700 mb-2">{art.artist}</p>
      <img
        src={art.image}
        alt={art.title}
        className="w-full h-auto rounded mb-3"
      />
      <Link
        to={`/art/${art.id}`}
        className="text-blue-600 underline text-sm"
      >
        Bekijk kunstwerk
      </Link>
    </article>
  );
};

export default ArtListing;
