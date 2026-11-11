import ProjectItem from "./ProjectItem";

export default function ProjectList({ projects, hasProjects, onDelete }) {
  if (projects.length === 0) {
    return (
      <p className="text-center text-gray-500 py-2">
        {hasProjects ? "No projects found." : "No projects yet. Add one above."}
      </p>
    );
  }

  return (
    <div className="mt-4 space-y-5">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
}