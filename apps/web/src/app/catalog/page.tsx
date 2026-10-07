export default function CatalogPage() {
  const products = [
    { name: 'Nuras Bistro', type: 'Restaurant', price: '1 800 ₸', rating: '4.8' },
    { name: 'Coffee Spot', type: 'Cafe', price: '900 ₸', rating: '4.6' },
    { name: 'City Ride', type: 'Taxi', price: '900 ₸', rating: '4.9' },
    { name: 'Baqtiyar Cafe', type: 'Cafe', price: '1 200 ₸', rating: '4.9' },
  ];

  return (
    <main className="catalog-page">
      <div className="page-header">
        <h1>Catalog</h1>
        <a href="/" className="primary-button">Back home</a>
      </div>

      <div className="catalog-grid">
        {products.map((item) => (
          <div key={item.name} className="item-card">
            <h3>{item.name}</h3>
            <div className="meta">{item.type} • {item.rating} ★</div>
            <div className="price-row">
              <span className="price">{item.price}</span>
              <button className="primary-button" type="button">Add</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
