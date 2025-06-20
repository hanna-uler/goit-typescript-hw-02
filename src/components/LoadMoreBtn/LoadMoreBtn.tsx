import css from "./LoadMoreBtn.module.css"

export default function LoadMoreBtn({ turnPage }:LoadMoreProps) {
    return (
        <>
        <button onClick={turnPage}>Load More</button>
        </>
    )
}