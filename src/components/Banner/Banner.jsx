const Banner = () => {
  return (
    <div
      className="hero min-h-[650px]"
      style={{
        backgroundImage: "url('./images/cover.png')",
        borderRadius: "24px",
      }}
    >
      <div className="hero-overlay bg-opacity-10 rounded-3xl"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-3xl md:text-5xl font-bold">
            Discover an exceptional cooking class tailored for you!
          </h1>
          <p className="mb-5">
            Private cooking classes by chefs are a fun and engaging way to
            improve one’s cooking skills. Whether a beginner or an expert, there
            is always something new to learn from a professional chef.
          </p>
          <button className="btn btn-accent rounded-full mr-5">
            Explore Now
          </button>
          <button className="btn btn-outline rounded-full text-white">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
