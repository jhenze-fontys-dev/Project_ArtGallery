import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <main className="museum-wrapper">
      {/* Intro / hero */}
      <section className="collection-page-header">
        <h1>Welkom in het Virtuele Museum</h1>
        <p className="collection-page-subtitle">
          Ontdek onze collecties, blader door kunstwerken en bekijk de nieuwste tentoonstellingen.
        </p>
      </section>

      {/* Drie “tegels” naar belangrijke delen van je site */}
      <section className="collection-nav-grid">
        {/* Collecties */}
        <Link to="/art" className="collection-card">
          <h2 className="collection-card-title">Collecties</h2>
          <p className="collection-card-meta">
            Verken de verschillende kunstcollecties.
          </p>
          <div className="collection-card-footer">
            Bekijk een overzicht met voorproefjes van de kunstwerken.
          </div>
        </Link>

        

        {/* Over / placeholder */}
        <div className="collection-card">
          <h2 className="collection-card-title">Over dit project</h2>
          <p className="collection-card-meta">
            Een oefenproject met React, routing en een kunstcollectie.
          </p>
          <div className="collection-card-footer">
            Deze pagina gebruikt de bestaande museum-CSS-stijlen.
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
