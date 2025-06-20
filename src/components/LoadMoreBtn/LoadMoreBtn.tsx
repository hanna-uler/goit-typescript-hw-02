import { LoadMoreProps } from "./LoadMoreBtn.types"

export default function LoadMoreBtn({ turnPage }:LoadMoreProps) {
    return (
        <>
        <button onClick={turnPage}>Load More</button>
        </>
    )
}