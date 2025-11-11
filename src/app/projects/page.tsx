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
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 pt-12">
          <h1 className="text-5xl md:text-7xl font-semibold mb-6 text-gray-900 tracking-tight">Мои проекты</h1>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Коллекция моих работ — от веб-приложений до экспериментов с новыми технологиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-6">
                <h2 className="text-3xl font-semibold text-gray-900">{project.title}</h2>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === "completed"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : project.status === "in-progress"
                      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                      : "bg-blue-50 text-blue-700 border-blue-200"
                  }`}
                >
                  {statusLabels[project.status]}
                </span>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-6">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 transition flex items-center gap-2 group/link text-sm font-medium"
                  >
                    GitHub
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition flex items-center gap-2 group/link text-sm"
                  >
                    Демо
                    <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-gray-600 mb-6 text-lg">Хотите увидеть больше?</p>
          <Link
            href="https://github.com/dvmnelnur-fullstack"
            target="_blank"
            className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition inline-block text-sm"
          >
            Посмотреть на GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}

