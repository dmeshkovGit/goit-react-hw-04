import css from "./SearchBar.module.css"
import { IoMdSearch } from "react-icons/io";
import { toast } from "react-hot-toast";


export default function SearchBar({onSubmit}) {
    return (
        <header className={css.pageHeader}>
            <form className={css.searchForm} onSubmit={(e) => {
                e.preventDefault();
                if (e.target.elements[0].value === "") {
                  toast.error("Please make sure to fill in the search area.",{duration: 2500,})
                } else {
                onSubmit(e.target.elements[0].value);
                e.target.reset();
                }
            }}>
    <input className={css.searchInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
          <button className={css.searchBtn}type="submit"><IoMdSearch size={18}/></button>
  </form>
</header>

    )
}