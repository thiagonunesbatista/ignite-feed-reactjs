import styles from './styles.module.css'

export const PageContainer = ({ children }) => (
  <div className={styles['page-container']}>{children}</div>
)
