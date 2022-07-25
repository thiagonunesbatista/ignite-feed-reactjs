import { Post } from './Post'

import styles from './styles.module.css'

import { posts } from '@/mocks/posts'

export const Posts = () => {
  return (
    <div className={styles.posts}>
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  )
}
