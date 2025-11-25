import { Outlet, Link } from "react-router-dom";

export default function ArtLayout() {
  return (
    <div className="art-layout">
      <header className="museum-header">
        <div className="museum-header-inner">
          <div className="museum-logo">Museum</div>

          <nav className="museum-nav">
            <Link to="/">Home</Link>
            <Link to="/allArt">Alle Kunst</Link>
            <Link to="/allCollections">Alle Collecties</Link>
          </nav>
        </div>
      </header>

      <main className="museum-wrapper">
        <Outlet /> 
        </main>
    </div>
  );
}