export default function CartPage() {
  const items = [
    { name: 'Nuras Bistro Combo', qty: 1, price: '1 800 ₸' },
    { name: 'Coffee Spot Latte', qty: 2, price: '1 800 ₸' },
    { name: 'City Ride', qty: 1, price: '900 ₸' },
  ];

  const total = '4 500 ₸';

  return (
    <main className="cart-page">
      <div className="page-header">
        <h1>Shopping cart</h1>
        <a href="/" className="primary-button">Home</a>
      </div>

      <div className="cart-list">
        {items.map((item) => (
          <div key={item.name} className="item-card">
            <h3>{item.name}</h3>
            <div className="meta">Qty: {item.qty}</div>
            <div className="price-row">
              <span className="price">{item.price}</span>
              <button className="secondary" type="button">Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="summary-box">
        <h3>Total: {total}</h3>
        <button className="primary-button" type="button">Checkout</button>
      </div>
    </main>
  );
}
