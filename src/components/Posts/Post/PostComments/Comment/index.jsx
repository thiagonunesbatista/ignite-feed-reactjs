import { ProfileAvatar } from '@/components/Profile'

import { LikeComment } from './LikeComment'

import styles from './styles.module.css'

export const Comment = ({
  comment: {
    content: { text },
    author: { name, profileAvatar: profileAvatarUrl }
  }
}) => (
  <div className={styles.comment}>
    <ProfileAvatar profileName={name} profileAvatarUrl={profileAvatarUrl} />
    <p className={styles.comment__text}>{text}</p>
    <LikeComment className={styles.comment__like} />
  </div>
)
