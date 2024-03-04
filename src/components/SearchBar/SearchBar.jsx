import css from "./SearchBar.module.css"


export default function SearchBar({onSubmit}) {
    return (
        <header>
            <form onSubmit={(e) => {
                e.preventDefault();
                onSubmit(e.target.elements[0].value);
                e.target.reset();
            }}>
    <input
      type="text"
      autoComplete="off"
      autoFocus
    placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>

    )
}