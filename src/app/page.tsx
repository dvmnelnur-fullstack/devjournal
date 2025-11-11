export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white text-center p-10">
      <h1 className="text-5xl font-bold mb-4">Добро пожаловать в DevJournal 🚀</h1>
      <p className="text-lg mb-8">
        Это мой личный проект — место, где я делюсь идеями, заметками и кодом.
      </p>
      <a
        href="https://github.com/dvmnelnur-fullstack/devjournal"
        target="_blank"
        className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-300 transition"
      >
        Смотреть на GitHub
      </a>
    </main>
  );
}
