export default function SearchForm({ search, setSearch }) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Projects"
        className="border rounded-md w-full bg-white p-2"
      />
    </form>
  );
}