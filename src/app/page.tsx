import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Git",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 text-center">
        <AnimatedSection>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Добро пожаловать в DevJournal 🚀
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={100}>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Личный проект разработчика — место, где я делюсь идеями, заметками и кодом.
          </p>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <Link
              href="/projects"
              className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 hover:scale-105 transition-all shadow-lg hover:shadow-xl"
            >
              Мои проекты
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 hover:scale-105 transition-all"
            >
              О себе
            </Link>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={300}>
          <SocialLinks />
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-8 text-center">О проекте</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto text-center text-white/80 space-y-4">
          <AnimatedSection delay={100}>
            <p className="text-lg">
              DevJournal — это мой личный дневник разработчика, где я документирую свой путь в программировании.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-lg">
              Здесь вы найдёте мои проекты, заметки о разработке, интересные находки и мысли о технологиях.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <AnimatedSection>
          <h2 className="text-4xl font-bold mb-12 text-center">Технологии</h2>
        </AnimatedSection>
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill} delay={index * 50}>
              <div className="px-6 py-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 hover:scale-110 transition-all cursor-default">
                {skill}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Готовы посмотреть мои работы?</h2>
        <p className="text-white/80 mb-8 text-lg">
          Изучите мои проекты или почитайте блог о разработке
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/projects"
            className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition"
          >
            Посмотреть проекты
          </Link>
          <Link
            href="/blog"
            className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition"
          >
            Читать блог
          </Link>
        </div>
      </section>
    </div>
  );
}
