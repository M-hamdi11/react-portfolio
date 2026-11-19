import { Link } from "react-router-dom";

const links = [
  { name: "Home", to: "/" },
  { name: "Projects", to: "/projects" },
  { name: "Skills", to: "/skills" },
  { name: "Contact", to: "/contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/M-hamdi11" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/mahmoud-hamdi-b33827341/" },
  { name: "Email", href: "mailto:mahmoudhamdiouf4@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 text-gray-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Mahmoud{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hamdi
              </span>
            </h3>
            <p className="mt-2 max-w-xs text-sm text-gray-400">
              React Frontend Developer building clean, fast and responsive
              websites.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-3 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {links.map((l) => (
                <li key={l.name}>
                  <Link to={l.to} className="transition hover:text-blue-400">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="mb-3 font-semibold text-white">Find Me</h4>
            <ul className="space-y-2 text-sm">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-blue-400"
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Mahmoud Hamdi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}