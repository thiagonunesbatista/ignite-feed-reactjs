import { PostAuthor } from './PostAuthor'
import { FeedbackForm } from './FeedbackForm'

import styles from './styles.module.css'

import { HashtagsContainer, HashtagItem } from './Hashtags'

export const Post = ({ post: { author, content, publishedAt } }) => (
  <article className={styles.post}>
    <PostAuthor author={author} publishedAt={publishedAt} />

    <p
      className={styles.post__content}
      dangerouslySetInnerHTML={{ __html: content.text }}
    />

    {content?.hashtags.length > 0 && (
      <HashtagsContainer>
        {content.hashtags.map((hashtag, index) => (
          <HashtagItem hashtag={hashtag} key={index} />
        ))}
      </HashtagsContainer>
    )}
    <FeedbackForm />
  </article>
)
