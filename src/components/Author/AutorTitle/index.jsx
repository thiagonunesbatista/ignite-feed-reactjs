import styles from './styles.module.css'

export const AuthorTitle = ({ title, className }) => (
  <p className={`${styles['author-title']} ${className}`}>{title}</p>
)
