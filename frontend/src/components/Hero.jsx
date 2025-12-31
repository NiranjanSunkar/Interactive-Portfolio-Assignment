const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gray-900 text-white px-6">
      <div className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I’m Niranjan 👋
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Full Stack Developer building scalable web applications and
          AI-powered experiences using modern technologies.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <a href="#projects" className="px-6 py-3 bg-blue-600 rounded-lg">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 border rounded-lg">
            Let’s Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;



