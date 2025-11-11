import Link from "next/link";

export default function AboutPage() {
  const skills = {
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    backend: ["Node.js", "Express", "REST API"],
    tools: ["Git", "VS Code", "Figma", "Postman"],
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">О себе</h1>
          <p className="text-xl text-white/80">
            Немного информации о моём пути в разработке
          </p>
        </div>

        <div className="space-y-12">
          {/* About Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Привет! 👋</h2>
            <div className="space-y-4 text-white/80 text-lg leading-relaxed">
              <p>
                Я разработчик, который увлечён созданием современных веб-приложений.
                Мой путь в программировании начался с изучения основ, и теперь я
                постоянно изучаю новые технологии и улучшаю свои навыки.
              </p>
              <p>
                DevJournal — это мой личный проект, где я документирую свой опыт,
                делюсь проектами и мыслями о разработке. Здесь вы найдёте мои работы,
                заметки и всё, что связано с моим развитием как разработчика.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Навыки</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.frontend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-lg border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.backend.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-lg border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-white/90">
                  Инструменты
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.tools.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 rounded-lg border border-white/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6">Связь</h2>
            <div className="space-y-4 text-white/80">
              <p>
                Хотите связаться или обсудить проект? Вы можете найти меня здесь:
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/dvmnelnur-fullstack/devjournal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center pt-8">
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition inline-block"
            >
              Посмотреть мои проекты
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}

