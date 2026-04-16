import weatherImg from "../assets/weather.jpg";

const projects = [
  {
    title: "Weather App",
    desc: "Real-time weather app using API integration.",
    image: weatherImg,
    live: "https://weather-app-ten-tan-92.vercel.app",
  },
  {
    title: "Project Two",
    desc: "Another cool project",
    image: weatherImg,
    live: "#",
  },
  {
    title: "Project Three",
    desc: "Something impactful",
    image: weatherImg,
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-black text-white">

      <h2 className="text-4xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden"
          >

            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-56 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col items-center justify-center text-center p-4">

              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {project.desc}
              </p>

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:scale-105 transition"
              >
                View Project
              </a>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;