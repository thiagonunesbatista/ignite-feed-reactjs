import { ProfileAvatar } from '@/components/Profile'

import styles from './styles.module.css'

import { AuthorName, AuthorTitle } from '@/components/Author'

export const PostAuthor = ({
  author: { name, professionalTitle, profileAvatar: profileAvatarUrl },
  publishedAt
}) => {
  return (
    <header className={styles['post-author']}>
      <ProfileAvatar profileName={name} profileAvatarUrl={profileAvatarUrl} />

      <div>
        <AuthorName name={name} />
        <AuthorTitle title={professionalTitle} />
      </div>

      <p className={styles['post-author__published-at']}>{publishedAt}</p>
    </header>
  )
}
