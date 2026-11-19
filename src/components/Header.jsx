import { NavLink } from "react-router-dom";
export default function Header({darkMode,toggleDarkMode}){
      const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
    }`;
    return( <>
       <header className="sticky  top-0 z-50 border-b bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold">My Portfolio</h1>

        <nav className="flex items-center gap-1">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>
        </nav>

        <button
          onClick={toggleDarkMode}
          className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
     </>
    )
}