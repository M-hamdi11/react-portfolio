const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "TypeScript", level: 70 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "VS Code", level: 90 },
      { name: "Vite", level: 80 },
      { name: "npm", level: 80 },
      { name: "draw.io / UML", level: 65 },
    ],
  },
];

const badges = [
  "Responsive Design",
  "React Router",
  "REST APIs",
  "OOP",
  "Problem Solving",
  "Teamwork",
];

export default function Skills() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          My{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400">
          Technologies and tools I use to build things.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-800/50"
          >
            <h3 className="mb-6 text-xl font-semibold">{group.title}</h3>

            <div className="space-y-5">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-1 flex justify-between text-sm font-medium">
                    <span>{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {badges.map((b) => (
          <span
            key={b}
            className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 transition hover:-translate-y-1 dark:bg-blue-500/10 dark:text-blue-300"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}