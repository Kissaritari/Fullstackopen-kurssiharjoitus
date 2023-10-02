export function Filtteri(currentSeachTerm, setSearchTerm) {

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <p>
      filter shown with <input placeholder='Enter search term' value={currentSeachTerm} onChange={handleSearchChange} />
    </p>
  );
}
