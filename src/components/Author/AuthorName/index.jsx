import styles from './styles.module.css'

export const AuthorName = ({ name, className }) => (
  <p className={`${styles['author-name']} ${className}`}>{name}</p>
)
