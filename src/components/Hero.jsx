import { Link } from "react-router-dom";
import myPhoto from "../assets/myphoto.jpeg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 text-white">
     
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl"></div>
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-purple-600/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-64px)] max-w-6xl flex-col-reverse items-center justify-center gap-12 px-6 py-16 md:flex-row md:justify-between">
        
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-sm text-blue-300">
            👋 Available for work
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
             Mahmoud Hamdi
            </span>
          </h1>

          <h2 className="mt-3 text-xl text-gray-300 md:text-2xl">
            React Frontend Developer
          </h2>

          <p className="mt-4 max-w-md text-gray-400">
            I build clean, fast and responsive websites using React and Tailwind CSS.
          </p>

          <div className="mt-8 flex justify-center gap-4 md:justify-start">
            <Link
              to="/projects"
              className="rounded-lg bg-linear-to-r from-blue-600 to-purple-600 px-6 py-3 font-medium shadow-lg shadow-blue-600/30 transition hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Contact Me
            </Link>
          </div>
        </div>

        
        <div className="relative">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 opacity-70 blur-lg"></div>
          <img
            src={myPhoto}
            alt="Your Name"
            className="relative h-60 w-60 rounded-full border-4 border-slate-900 object-cover md:h-80 md:w-80"
          />
        </div>
      </div>
    </section>
  );
}