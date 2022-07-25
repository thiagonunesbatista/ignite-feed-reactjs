import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { AuthorName, AuthorTitle } from '@/components/Author'
import { ProfileAvatar } from '@/components/Profile'

import styles from './styles.module.css'

export const PostAuthor = ({
  author: { name, professionalTitle, profileAvatar: profileAvatarUrl },
  publishedAt
}) => {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr
    }
  )

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  return (
    <header className={styles['post-author']}>
      <ProfileAvatar
        profileName={name}
        profileAvatarUrl={profileAvatarUrl}
        isHighlight
      />

      <div>
        <AuthorName name={name} />
        <AuthorTitle title={professionalTitle} />
      </div>

      <time
        className={styles['post-author__published-at']}
        title={publishedDateFormatted}
        dateTime={publishedAt.toISOString()}
      >
        {publishedDateRelativeToNow}
      </time>
    </header>
  )
}
