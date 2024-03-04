import { FallingLines } from "react-loader-spinner"
import css from "./Loader.module.css"

export default function Loader() {
    return (
        <div className={css.loaderWrapper}>
            <p className={css.loadText}>
                Please wait 
            </p>
            <FallingLines color="#000" width="24"/>
        </div>
    )
}