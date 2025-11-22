import { useParams } from 'react-router-dom';
import ArtListings from '../components/ArtListings';

const dummyArtworks = [
  {
    id: 10,
    title: 'Sterrennacht',
    artist: 'Vincent van Gogh',
    image: 'https://via.placeholder.com/300x200?text=Sterrennacht',
  },
  {
    id: 11,
    title: 'Het Meisje met de Parel',
    artist: 'Johannes Vermeer',
    image: 'https://via.placeholder.com/300x200?text=Meisje+met+de+Parel',
  },
  {
    id: 12,
    title: 'De Schreeuw',
    artist: 'Edvard Munch',
    image: 'https://via.placeholder.com/300x200?text=De+Schreeuw',
  },
];

const CollectionPage = () => {
  const { id } = useParams();

  return (
    <section className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        Collectie #{id}
      </h1>
      <p className="mb-4">Geselecteerde kunstwerken in deze collectie:</p>

      <ArtListings artworks={dummyArtworks} />
    </section>
  );
};

export default CollectionPage;

