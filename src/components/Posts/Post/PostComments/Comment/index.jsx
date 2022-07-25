import { ProfileAvatar } from '@/components/Profile'

import { LikeComment } from './LikeComment'

import styles from './styles.module.css'

import IconTrash from '@/assets/icons/items/trash.svg'

import { AuthorName } from '@/components/Author'

export const Comment = ({
  comment: {
    content: { text },
    author: { name, profileAvatar: profileAvatarUrl }
  }
}) => (
  <div className={styles.comment}>
    <ProfileAvatar profileName={name} profileAvatarUrl={profileAvatarUrl} />

    <div className={styles.comment__content}>
      <div className={styles.comment__header}>
        <div>
          <AuthorName name={name} />
          <p className={styles['comment__published-at']}>Cerca de 2h</p>
        </div>

        <button className={styles.comment__delete} title='Deletar comentário'>
          <img src={IconTrash} />
        </button>
      </div>

      <p className={styles.comment__text}>{text}</p>
    </div>

    <LikeComment className={styles.comment__like} />
  </div>
)
