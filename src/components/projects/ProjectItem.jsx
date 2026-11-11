export default function ProjectItem({ project, onDelete }) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 border border-black bg-white flex items-center justify-center text-4xl sm:text-5xl font-light  rounded-lg"
        aria-hidden="true"
      >
        X
      </div>

      <div className="min-w-0 flex-1">
        <h2 className="font-bold text-xl wrap-break-word">{project.title}</h2>
        <p className="text-black wrap-break-word">{project.description}</p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(project.id)}
        aria-label={`Delete ${project.title}`}
        className="shrink-0 border border-red-300 rounded-md px-3 py-1.5 bg-white text-red-600 text-sm font-semibold cursor-pointer hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-400"
      >
        Delete
      </button>
    </div>
  );
}