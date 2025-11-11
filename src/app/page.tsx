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
      {/* Hero Section - Apple Style */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h1 className="text-6xl md:text-8xl font-semibold mb-6 text-gray-900 tracking-tight">
              DevJournal
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <p className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-2xl mx-auto font-light">
              Личный проект разработчика.
              <br />
              Идеи, заметки и код.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="flex gap-4 justify-center flex-wrap mb-12">
              <Link
                href="/projects"
                className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition text-sm"
              >
                Проекты
              </Link>
              <Link
                href="/about"
                className="px-8 py-3 border border-gray-400 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition text-sm"
              >
                О себе
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section - Apple Style */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 tracking-tight">
              О проекте
            </h2>
          </AnimatedSection>
          <div className="max-w-2xl mx-auto space-y-6">
            <AnimatedSection delay={100}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                DevJournal — это мой личный дневник разработчика, где я документирую свой путь в программировании.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={200}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Здесь вы найдёте мои проекты, заметки о разработке, интересные находки и мысли о технологиях.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section - Apple Style */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl font-semibold mb-16 text-center text-gray-900 tracking-tight">
              Технологии
            </h2>
          </AnimatedSection>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <AnimatedSection key={skill} delay={index * 50}>
                <div className="px-6 py-2.5 bg-gray-100 rounded-full border border-gray-200 hover:bg-gray-200 transition-all cursor-default text-sm font-medium text-gray-700">
                  {skill}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Apple Style */}
      <section className="py-24 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold mb-6 text-gray-900 tracking-tight">
            Готовы посмотреть мои работы?
          </h2>
          <p className="text-xl text-gray-600 mb-12 font-light max-w-xl mx-auto">
            Изучите мои проекты или почитайте блог о разработке
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/projects"
              className="px-8 py-3 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition text-sm"
            >
              Проекты
            </Link>
            <Link
              href="/blog"
              className="px-8 py-3 border border-gray-400 text-gray-900 rounded-full font-medium hover:bg-gray-50 transition text-sm"
            >
              Блог
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
