import css from './LoadMoreBtn.module.css'


export default function LoadMoreBtn({onClick}) {
    return (
        <div className={css.loadBtnWrapper}>
            <button className={css.loadBtn} onClick={onClick}>
             Load more
            </button>
        </div>
    )
}