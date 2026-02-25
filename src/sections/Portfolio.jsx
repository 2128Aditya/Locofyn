const Portfolio = () => {
  const images = [
    "photo-1522335789203-aabd1fc54bc9",
    "photo-1558611848-73f7eb4001a1",
    "photo-1504674900247-0877df9cc836",
  ];

  return (
    <section className="py-24 text-center">
      <h2 className="text-3xl font-bold mb-12">Our Work</h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {images.map((id, i) => (
          <img
            key={i}
            src={`https://images.unsplash.com/${id}`}
            className="rounded-xl hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;