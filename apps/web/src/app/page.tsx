const services = [
  {
    title: 'Restaurants',
    description: 'Fresh meals and home delivery from top local kitchens.',
    action: 'Order food',
  },
  {
    title: 'Cafes',
    description: 'Coffee, desserts, breakfast, and quick snacks.',
    action: 'Browse cafe',
  },
  {
    title: 'Taxi',
    description: 'Fast rides, airport transfers, and city travel.',
    action: 'Book ride',
  },
];

const markets = ['Қазақша', 'Qaraqalpaqsha', 'Русский'];

export default function HomePage() {
  return (
    <main className="page-shell">
      <nav className="topbar">
        <div className="brand">Tamga Zakaz</div>
        <div className="nav-links">
          <a href="#services">Xizmatlar</a>
          <a href="#about">Biz haqımızda</a>
          <a href="#contact">Bağlanıs</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">3 in 1 delivery</span>
          <h1>Food, coffee, and city rides—all in one app.</h1>
          <p>
            Tamga Zakaz brings restaurants, cafés, and taxi services together in one modern,
            multilingual platform built for fast delivery and comfortable ordering.
          </p>

          <div className="cta-row">
            <button className="primary">Order now</button>
            <button className="secondary">Book a taxi</button>
          </div>

          <div className="language-row">
            {markets.map((lang) => (
              <span key={lang} className="lang-pill">
                {lang}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <span className="mini-label">{service.title}</span>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <button>{service.action}</button>
          </article>
        ))}
      </section>

      <section id="about" className="stats">
        <div>
          <strong>10k+</strong>
          <span>Orders every month</span>
        </div>
        <div>
          <strong>120+</strong>
          <span>Restaurants and cafes</span>
        </div>
        <div>
          <strong>24/7</strong>
          <span>Taxi support</span>
        </div>
      </section>
    </main>
  );
}
