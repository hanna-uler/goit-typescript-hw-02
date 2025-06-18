import css from "./Loader.module.css"
import { SyncLoader } from "react-spinners"

export default function Loader() {
    return (
        <div className={css.container}>
            <SyncLoader color="#82c798" size={24}/>
            <p className={css.message}>Please wait while the little elves pick the appropriate pictures</p>
        </div>
    )
}