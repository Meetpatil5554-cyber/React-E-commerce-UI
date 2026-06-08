function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Watch",
      price: "$199"
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: "$149"
    },
    {
      id: 3,
      name: "Smartphone",
      price: "$699"
    },
    {
      id: 4,
      name: "Sneakers",
      price: "$99"
    }
  ];

  return (
    <section className="products">
      <h2>Trending Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src="https://via.placeholder.com/250"
              alt={product.name}
            />

            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;