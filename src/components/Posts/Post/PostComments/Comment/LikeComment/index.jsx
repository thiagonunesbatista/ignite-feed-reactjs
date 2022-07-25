import styles from './styles.module.css'

import Like from '@/assets/icons/actions/like.svg'

export const LikeComment = ({ className }) => (
  <button
    className={`${styles['like-comment']} ${className}`}
    title='Aplaudir comentário'
  >
    <img src={Like} />
    Aplaudir * 03
  </button>
)
