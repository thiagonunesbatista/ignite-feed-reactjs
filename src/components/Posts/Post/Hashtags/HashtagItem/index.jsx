import styles from './styles.module.css'

export const HashtagItem = ({ hashtag: { url, name } }) => (
  <a className={styles['hashtag-item']} href={url} target='_blank'>
    #{name}
  </a>
)
