import styles from './styles.module.css'

import { EditProfile } from './EditProfile'

import { AuthorName, AuthorTitle } from '@/components/Author'
import { ProfileAvatar } from '@/components/Profile'

export const ProfileCard = ({
  user: {
    name,
    professionalTitle,
    profileAvatar: profileAvatarUrl,
    profileCover
  },
  isLoggedUser = false
}) => (
  <div className={styles['profile-card']}>
    <img src={profileCover} className={styles['profile-card__cover']} />

    <ProfileAvatar
      className={styles['profile-card__avatar']}
      profileAvatarUrl={profileAvatarUrl}
      profileName={name}
      isHighlight
    />

    <AuthorName className={styles['profile-card__name']} name={name} />
    <AuthorTitle
      className={styles['profile-card__title']}
      title={professionalTitle}
    />

    {isLoggedUser && <EditProfile />}
  </div>
)
