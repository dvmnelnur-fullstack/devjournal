import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/10 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">DevJournal</h3>
            <p className="text-white/60">
              Личный проект разработчика — место для идей, заметок и кода.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-white/60 hover:text-white transition">
                Главная
              </Link>
              <Link href="/projects" className="text-white/60 hover:text-white transition">
                Проекты
              </Link>
              <Link href="/blog" className="text-white/60 hover:text-white transition">
                Блог
              </Link>
              <Link href="/about" className="text-white/60 hover:text-white transition">
                О себе
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Контакты</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} DevJournal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

