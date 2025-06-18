import css from "./ErrorMessage.module.css"

export default function ErrorMessage() {
    return (
        <>
        <p className={css.message}>The internet elves are sleeping. We'll wake them up — try again!</p>
        </>
    )
}