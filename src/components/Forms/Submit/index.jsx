import styles from './styles.module.css'

export const Submit = ({ text = 'Enviar' }) => (
  <button className={styles.submit}>{text}</button>
)
