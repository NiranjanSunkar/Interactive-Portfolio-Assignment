const HireMeVideo = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gray-900 text-white px-6">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-light-800">
          Why Should You Hire Me?
        </h2>

        <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg aspect-video bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/oulY7GwGjS0"
            title="Why Hire Me - Niranjan"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          In this short video, I share my background, mindset, and why I would be
          a valuable addition to your engineering team.
        </p>
        <p>8074045278 || niranjansunkaraboina@gmail.com </p>
      </div>
    </section>
  );
};

export default HireMeVideo;



