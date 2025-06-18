import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({turnPage}) {
    return (
        <>
        <button onClick={turnPage}>Load More</button>
        </>
    )
}