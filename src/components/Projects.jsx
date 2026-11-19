import { useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";

const initialProjects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "A responsive online store with cart and product filtering.",
    tags: ["React", "Tailwind"],
    image:project1,
    live: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Search any city and get live weather data from an API.",
    tags: ["React", "API"],
    image:project2,
    live: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "Add, edit and delete tasks with local storage support.",
    tags: ["React", "Tailwind"],
    image:project3,
    live: "#",
    github: "#",
  },
];

const filters = ["All", "React", "API", "Tailwind"];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [filter, setFilter] = useState("All");

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(filter));

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
      </div>

      {/* أزرار الفلتر */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* الكروت */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-800/50"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-48 w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-500/10 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-2 text-center text-sm font-medium text-white transition hover:opacity-90"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* لو مفيش مشاريع */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-gray-500">No projects found.</p>
      )}
    </section>
  );
}