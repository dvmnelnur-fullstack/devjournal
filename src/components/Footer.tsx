import Link from "next/link";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-16 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">DevJournal</h3>
            <p className="text-gray-600 text-sm">
              Личный проект разработчика — место для идей, заметок и кода.
            </p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Навигация</h4>
            <div className="flex flex-col gap-3">
              <Link href="/" className="text-gray-600 hover:text-gray-900 transition text-sm">
                Главная
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition text-sm">
                Проекты
              </Link>
              <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition text-sm">
                Блог
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900 transition text-sm">
                О себе
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-sm">Контакты</h4>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} DevJournal. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}

