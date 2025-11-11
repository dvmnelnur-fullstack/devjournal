import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  status: "completed" | "in-progress" | "planned";
}

const projects: Project[] = [
  {
    id: 1,
    title: "DevJournal",
    description: "Личный портфолио и блог разработчика, созданный с использованием Next.js, React и TypeScript. Современный дизайн с тёмной темой и адаптивной вёрсткой.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/dvmnelnur-fullstack/devjournal",
    liveUrl: "https://devjournal-one.vercel.app",
    status: "completed",
  },
  {
    id: 2,
    title: "Проект 2",
    description: "Описание вашего следующего проекта. Здесь вы можете рассказать о функциональности, технологиях и особенностях проекта.",
    technologies: ["React", "Node.js", "MongoDB"],
    status: "in-progress",
  },
  {
    id: 3,
    title: "Проект 3",
    description: "Планируемый проект. Добавьте информацию о ваших будущих проектах здесь.",
    technologies: ["Next.js", "TypeScript"],
    status: "planned",
  },
];

const statusColors = {
  completed: "bg-green-500/20 text-green-400 border-green-500/30",
  "in-progress": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  planned: "bg-blue-500/20 text-blue-400 border-blue-500/30",
};

const statusLabels = {
  completed: "Завершён",
  "in-progress": "В разработке",
  planned: "Запланирован",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Мои проекты</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Коллекция моих работ — от веб-приложений до экспериментов с новыми технологиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs border ${statusColors[project.status]}`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    GitHub →
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-white transition"
                  >
                    Демо →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white/60 mb-6">Хотите увидеть больше?</p>
          <Link
            href="https://github.com/dvmnelnur-fullstack"
            target="_blank"
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition inline-block"
          >
            Посмотреть на GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

