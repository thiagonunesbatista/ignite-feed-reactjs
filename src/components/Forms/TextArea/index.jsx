import styles from './styles.module.css'

export const TextArea = ({ value, setValue, placeholder = '' }) => (
  <textarea
    className={styles['text-area']}
    value={value}
    onChange={event => setValue(event.target.value)}
    placeholder={placeholder}
  />
)
