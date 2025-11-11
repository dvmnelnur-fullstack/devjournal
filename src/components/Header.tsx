import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-gray-300 transition">
            DevJournal
          </Link>
          <div className="flex gap-6">
            <Link
              href="/"
              className="text-white/80 hover:text-white transition"
            >
              Главная
            </Link>
            <Link
              href="/projects"
              className="text-white/80 hover:text-white transition"
            >
              Проекты
            </Link>
            <Link
              href="/blog"
              className="text-white/80 hover:text-white transition"
            >
              Блог
            </Link>
            <Link
              href="/about"
              className="text-white/80 hover:text-white transition"
            >
              О себе
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

