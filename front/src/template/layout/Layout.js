import styles from './Layout.module.css';

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            <div className={styles.wrapApp}>
                <div className={styles.wrapContent}>
                    {children}
                </div>
                <div className={styles.footer}>
                    Rick & Morty © 2023 - by: <a href="https://www.linkedin.com/in/noe-alonso-34437869/" target="_blank" rel="noreferrer">
                        Noe Alonso Rabadan</a> @soyHenry
                </div>
            </div>
        </div>
    )
}