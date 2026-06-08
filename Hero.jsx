function Hero() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      <div>
        <h1>Luxury Shopping Experience</h1>
        <p>
          Discover premium products with unbeatable prices and modern design.
        </p>
        <button>Shop Now</button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b"
        alt="shopping"
        style={{
          width: "400px",
          height: "250px",
          objectFit: "cover",
          borderRadius: "15px",
        }}
      />
    </section>
  );
}

export default Hero;