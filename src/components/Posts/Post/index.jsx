import { PostAuthor } from './PostAuthor'
import { FeedbackForm } from './FeedbackForm'

import styles from './styles.module.css'

import { HashtagsContainer, HashtagItem } from './Hashtags'

import { PostComments } from './PostComments'

export const Post = ({ post: { author, comments, content, publishedAt } }) => (
  <article className={styles.post}>
    <PostAuthor author={author} publishedAt={publishedAt} />

    {content.text.map((currentText, index) => {
      if (currentText.type === 'paragraph') {
        return <p key={index}>{currentText.content}</p>
      }

      if (currentText.type === 'link') {
        return (
          <a key={index} href={currentText.url} target='_blank'>
            {currentText.content}
          </a>
        )
      }
    })}

    {content?.hashtags.length > 0 && (
      <HashtagsContainer>
        {content.hashtags.map((hashtag, index) => (
          <HashtagItem hashtag={hashtag} key={index} />
        ))}
      </HashtagsContainer>
    )}
    <FeedbackForm />

    <PostComments comments={comments} />
  </article>
)
