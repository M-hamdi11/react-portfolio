# My Portfolio

A responsive personal portfolio website built with **React** and **Tailwind CSS**, featuring dark mode, a filterable projects section, and a validated contact form.

## Features

- 🌗 Dark / Light mode toggle
- 📱 Fully responsive design
- 🗂️ Projects section with category filter (All, React, API, Tailwind)
- 🛠️ Skills section with progress bars
- ✉️ Contact form with validation (React Hook Form + Zod)
- 🧭 Multi-page navigation with React Router

## Tech Stack

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home (Hero section) |
| `/projects` | My projects with filtering |
| `/skills` | Technologies and tools I use |
| `/contact` | Contact form |

## Project Structure

```
src/
├── assets/          # images
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx          # layout (Header + Outlet + Footer)
├── main.jsx         # router setup
└── index.css
```

## Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/react-portfolio.git
   ```
2. Go to the project folder
   ```bash
   cd react-portfolio
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Start the development server
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint |

## Screenshots

_Add screenshots of your website here._

## Author

**Mahmoud Hamdi**
React Frontend Developer

- GitHub: [https://github.com/M-hamdi11](#)
- LinkedIn: [https://www.linkedin.com/in/mahmoud-hamdi-b33827341/](#)
- Email: your-email@example.com