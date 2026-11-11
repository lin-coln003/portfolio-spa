import { useState, useMemo, useEffect } from "react";

export default function useProjects() {
  const [projects, setProjects] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("projects")) || [];
    } catch {
      return [];
    }
  });
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const addProject = (project) => setProjects((prev) => [...prev, project]);
  const deleteProject = (id) =>
    setProjects((prev) => prev.filter((p) => p.id !== id));

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      ),
    [projects, search]
  );

  return {
    projects,
    filteredProjects,
    search,
    setSearch,
    addProject,
    deleteProject,
  };
}