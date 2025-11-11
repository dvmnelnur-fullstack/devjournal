import Link from "next/link";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/dvmnelnur-fullstack",
    icon: "💻",
  },
  {
    name: "LinkedIn",
    url: "#",
    icon: "💼",
  },
  {
    name: "Twitter",
    url: "#",
    icon: "🐦",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition hover:scale-110"
          aria-label={link.name}
        >
          <span className="text-xl">{link.icon}</span>
        </a>
      ))}
    </div>
  );
}

