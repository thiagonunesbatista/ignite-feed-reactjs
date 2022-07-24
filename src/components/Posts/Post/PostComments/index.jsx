import { Fragment } from 'react'

import { Comment } from './Comment'

import styles from './styles.module.css'

export const PostComments = ({ comments }) => {
  return (
    <Fragment>
      <div className={styles['post-comments']}>
        {comments.map((comment, index) => (
          <Comment comment={comment} key={index} />
        ))}
      </div>
    </Fragment>
  )
}
