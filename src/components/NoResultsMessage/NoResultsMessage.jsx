import css from "./NoResultsMessage.module.css"

export default function NoResultsMessage() {
    return (
        <>
            <p className={css.messageHeader}>Sorry!</p>
            <p className={css.message}>The elves searched high and low, but found no pictures matching your query.</p>
            <p className={css.message}>Would you like to try a different word?</p>
        </>
    )
}