const services = [
  { title: 'Restaurants', description: 'Fresh meals and home delivery in minutes.' },
  { title: 'Cafes', description: 'Coffee, desserts, and quick bites.' },
  { title: 'Taxi', description: 'Fast city rides and airport transfers.' },
];

const languages = ['Қазақша', 'Qaraqalpaqsha', 'Русский'];

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Tamga Zakaz</span>
          <h1>Delivery for food, coffee, and city rides.</h1>
          <p>
            One platform for restaurants, cafes, and taxi booking with multilingual support for
            Kazakh, Karakalpak, and Russian users.
          </p>
          <div className="cta-row">
            <button className="primary">Order now</button>
            <button className="secondary">Book a ride</button>
          </div>
          <div className="language-row">
            {languages.map((lng) => (
              <span key={lng} className="lang-pill">
                {lng}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="services">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <a href="#">Open</a>
          </article>
        ))}
      </section>
    </main>
  );
}
