const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-10 shadow-lg">
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Hi, I’m{" "}
            <span className="font-semibold text-white">
              Niranjan Sunkaraboina
            </span>
            , a passionate Full Stack Developer who enjoys building modern,
            scalable, and user-friendly web applications.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed">
            I love turning ideas into real-world products using React, Node.js,
            and Express, and I’m continuously exploring AI-powered features to
            enhance user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;



