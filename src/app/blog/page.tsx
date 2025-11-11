import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Создание портфолио с Next.js",
    excerpt: "Как я создал своё портфолио используя Next.js 16, React 19 и TypeScript. Рассказываю о процессе разработки, выборе технологий и дизайне.",
    date: "2024-12-19",
    readTime: "5 мин",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    id: 2,
    title: "Заметка о разработке",
    excerpt: "Здесь будут мои заметки о разработке, интересные находки и мысли о технологиях. Добавьте свои посты, чтобы делиться опытом.",
    date: "2024-12-18",
    readTime: "3 мин",
    tags: ["Разработка", "Заметки"],
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Блог</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Заметки о разработке, интересные находки и мысли о технологиях
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="block bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition"
            >
              <div className="flex items-center gap-4 mb-4 text-sm text-white/60">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime} чтения</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
              <p className="text-white/70 mb-6">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/10 rounded text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">
              Пока нет постов. Скоро здесь появятся интересные статьи!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

