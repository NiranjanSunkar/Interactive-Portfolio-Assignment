const Skills = () => {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React"],
    Backend: ["Node.js", "Express", "Python"],
    Database: ["MongoDB"],
    Tools: ["Git"],
  };

  return (
    <section className="py-24 bg-gray text-gray-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable and reliable web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900">
                {category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
