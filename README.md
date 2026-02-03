# Atomix PassGen 🔑

![Astro](https://img.shields.io/badge/Astro-5.17.1-FF5D01?logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-06B6D4?logo=tailwindcss&logoColor=white)

**Atomix PassGen** is a secure and customizable password generator built with **Astro** and **Tailwind CSS**.  
It allows you to quickly generate strong passwords, copy them with one click, and fine-tune length and character sets — all fully client-side.

No tracking. No backend. No stored data.

---

## ✨ Features

- Generate secure passwords instantly  
- Custom password length (6–32 characters)  
- Toggle uppercase letters (A–Z)  
- Toggle lowercase letters (a–z)  
- Toggle numbers (0–9)  
- Toggle symbols (!@#$%^&*)  
- One-click copy to clipboard  
- Automatic regeneration when options change  
- 100% client-side (no server, no storage)

---

## 🧰 Prerequisites

You need:

- **Node.js** 18 or higher  
- **npm** (or any compatible Node package manager)

---

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/Ephistopheles/atomix-passgen.git
cd atomix-passgen
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```
http://localhost:4321
```

---

## 📦 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the local development server |
| `npm run build` | Build the static production site |
| `npm run preview` | Preview the production build |
| `npm run astro` | Run the Astro CLI |

---

## 🏗 Architecture

This project uses a static-first architecture powered by Astro.

```
ephistopheles-atomix-passgen/
├── astro.config.mjs → Astro configuration
├── package.json → Project metadata and scripts
├── tsconfig.json → TypeScript configuration
└── src/
    ├── pages/
    │   └── index.astro → Main application entry point
    ├── layouts/
    │   └── RootLayout.astro → Global layout, fonts and meta
    ├── components/
    │   └── PasswordGenerator.astro → Password generator UI and logic
    └── styles/
        └── global.css → Tailwind base styles and custom utilities
```

The password generator runs entirely in the browser using vanilla JavaScript.
No passwords are sent to any server, stored, or logged.

This makes the app fast, private, secure, and cheap to host.

---

## 🔗 Related Technologies

- [Astro](https://astro.build)
- [Tailwind CSS](https://tailwindcss.com)

---

## 👤 Author

**Johan Amed**  
GitHub: https://github.com/Ephistopheles
Email: [rjohanamed@gmail.com](mailto:rjohanamed@gmail.com)

---

## 📄 License

This project is licensed under the MIT License.
You are free to use, modify, and distribute it.
