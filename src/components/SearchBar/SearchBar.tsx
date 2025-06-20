import css from './SearchBar.module.css'
import toast from 'react-hot-toast'
import { SearchBarProps } from './SearchBar.types';

export default function SearchBar({ onSubmit }: SearchBarProps) {
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const searchInput = form.elements.namedItem("searchInput") as HTMLInputElement;
        const searchQuery = searchInput.value.trim();
        if (searchQuery === "") {
            toast("Please enter the search query.");
        }
        onSubmit(searchQuery);
        form.reset()
    }
    return (
        <header className={css.container}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="searchInput"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos here"
                />
                <button className={css.btn} type="submit">Search</button>
            </form>
        </header>
    )
    
}