function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Tailwind"];

  return (
    <section className="py-20 text-center">

      <h2 className="text-3xl font-semibold mb-10">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">

        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 rounded-full text-sm hover:bg-cyan-400 hover:text-black transition"
          >
            {skill}
          </span>
        ))}

      </div>

    </section>
  );
}

export default Skills;