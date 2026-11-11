import "./App.css";
import Header from "./components/header/Header";
import AddForm from "./components/forms/add/AddForm";
import SearchForm from "./components/forms/search/SearchForm";
import Card from "./components/card/Card";
import ProjectList from "./components/projects/ProjectList";
import useProjects from "./components/hooks/UserProject";

function App() {
  const {
    projects,
    filteredProjects,
    search,
    setSearch,
    addProject,
    deleteProject,
  } = useProjects();

  return (
    <>
      <Header />
      <AddForm onAdd={addProject} />
      <div className="flex justify-center px-4">
        <Card>
          <SearchForm search={search} setSearch={setSearch} />
          <ProjectList
            projects={filteredProjects}
            hasProjects={projects.length > 0}
            onDelete={deleteProject}
          />
        </Card>
      </div>
    </>
  );
}

export default App;