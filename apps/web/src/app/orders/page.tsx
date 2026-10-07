export default function OrdersPage() {
  const orders = [
    { id: 'O-101', service: 'Restaurant', status: 'Preparing', total: '3 200 ₸' },
    { id: 'O-102', service: 'Taxi', status: 'On the way', total: '1 200 ₸' },
    { id: 'O-103', service: 'Cafe', status: 'Delivered', total: '1 400 ₸' },
  ];

  return (
    <main className="orders-page">
      <div className="page-header">
        <h1>Orders</h1>
        <a href="/" className="primary-button">Home</a>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div key={order.id} className="item-card">
            <h3>{order.id}</h3>
            <div className="meta">{order.service}</div>
            <div className="meta">Status: {order.status}</div>
            <div className="price-row">
              <span className="price">{order.total}</span>
              <button className="primary-button" type="button">Track</button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
