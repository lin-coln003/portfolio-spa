# Personal Project Showcase App

A single page application built with React where you can add, search, and delete personal projects. Projects are saved in the browser, so they are still there after a refresh.

## Features

- **Add projects** with a title and description. Empty submissions are rejected with an inline error message.
- **Live search** filters projects by title as you type.
- **Delete projects** with a button on each item.
- **Persistent data** using `localStorage`.
- **Empty states** that tell you when there are no projects yet or no search matches.
- **Responsive layout** that works on phones and desktops.

## Tech Stack

- React
- Vite
- Tailwind CSS

## Component Hierarchy


| Component | Responsibility |
|---|---|
| `App` | Connects the `useProjects` hook to the UI |
| `Header` | Displays the app title |
| `AddForm` | Controlled form that creates a new project |
| `Card` | Reusable gray container |
| `SearchForm` | Controlled search input |
| `ProjectList` | Renders the list of projects or an empty-state message |
| `ProjectItem` | Displays a single project with an image placeholder and a delete button |

## State Management

All project state lives in the custom hook `useProjects`, which returns:

- `projects` and `filteredProjects`
- `search` and `setSearch`
- `addProject` and `deleteProject`

`App` calls the hook once and passes only the props each child needs.

## Props Flow

**`AddForm`**
- Receives `onAdd`
- Calls it on submit with a new project object (`id`, `title`, `description`), after checking that both fields are filled in. The form then clears.

**`SearchForm`**
- Receives `search` and `setSearch`
- Uses `search` as the value of the input, so it always shows the current text
- Calls `setSearch` on every keystroke to update the search term in state

**`ProjectList`**
- Receives `projects`, `hasProjects` and `onDelete`
- Maps over `projects` (the already-filtered list) and renders a `ProjectItem` for each one
- Uses `hasProjects` to choose the empty message: "No projects yet. Add one above." when nothing has been added, or "No projects found." when a search has no matches
- Passes `onDelete` down to each `ProjectItem`

**`ProjectItem`**
- Receives `project` and `onDelete`
- Displays `project.title` and `project.description` next to the image placeholder
- Calls `onDelete` with `project.id` when the Delete button is clicked, which removes that project from state

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/lin-coln003/portfolio-spa.git
   cd portfolio-spa
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
```

## Usage

1. Enter a title and description, then click **Add**.
2. Type in the search box to filter projects by title.
3. Click **Delete** on a project to remove it.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
