import { Post } from './Post'

import styles from './styles.module.css'

import { posts } from '@/mocks/posts'

import { Fragment } from 'react'

import { PostComments } from './Post/PostComments'

export const Posts = () => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Fragment key={index}>
          <Post post={post} />
          <PostComments comments={post.comments} />
        </Fragment>
      ))}
    </div>
  )
}
