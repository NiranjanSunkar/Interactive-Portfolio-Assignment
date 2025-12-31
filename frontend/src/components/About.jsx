const About = () => {
  return (
    <section
      id="about"
      className="py-24 from-slate-50 to-slate-100 text-slate-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div>
          <p className="py-10 bg-gradient-to-bfrom-slate-50 to-slate-100 text-slate-800">
            Hi, I’m{" "}
            <span className="font-semibold text-dark">
              Niranjan Sunkaraboina
            </span>
            , a passionate Full Stack Developer who enjoys building modern,
            scalable, and user-friendly web applications.
          </p>

          <p className="bg-gradient-to-bfrom-slate-50 to-slate-100 text-slate-800">
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



